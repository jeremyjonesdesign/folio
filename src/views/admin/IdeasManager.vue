<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="admin-content">
      <div class="admin-container">
        <div class="header-container">
          <h2>Gestion des Idées</h2>
          <button @click="resetForm" class="add-button"> Add</button>
        </div>
        
        <form @submit.prevent="handleSubmit" class="idea-form">
          <div class="form-group">
            <input 
              v-model="newIdea.title" 
              placeholder="Titre de l'idée" 
              required
            >
          </div>
          
          <div class="form-group">
            <textarea 
              v-model="newIdea.description" 
              placeholder="Description"
              style="white-space: pre-wrap;"
            ></textarea>
          </div>
          <div class="form-group">
            <div class="media-input">
              <input 
                v-model="newIdea.media_url" 
                placeholder="URL vidéo (YouTube/Vimeo)"
              >
              <span>OU</span>
              <input 
                type="file" 
                @change="handleImageUpload" 
                accept="image/*"
              >
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="submit-button">
              {{ editing ? 'Modifier' : 'Ajouter' }}
            </button>
          </div>
        </form>

        <div class="ideas-list">
          <div 
            v-for="idea in ideas" 
            :key="idea.id" 
            class="idea-item"
          >
            <div class="media-preview">
              <img 
                v-if="isImage(idea.media_url)"
                :src="idea.media_url" 
                :alt="idea.title"
                @error="handleImageError"
              >
              <iframe
                v-else-if="isVideo(idea.media_url)"
                :src="getEmbedUrl(idea.media_url)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div class="idea-content">
              <h3>{{ idea.title }}</h3>
              <p style="white-space: pre-wrap;">{{ idea.description }}</p>
              <div class="idea-actions">
              <button @click="editIdea(idea)">Modifier</button>
              <button @click="deleteIdea(idea.id)">Supprimer</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import AdminSidebar from '@/components/AdminSidebar.vue'

interface Idea {
  id?: number
  title: string
  description: string
  media_url?: string
  user_id?: string
}

const ideas = ref<Idea[]>([])
const newIdea = ref<Idea>({
  title: '',
  description: '',
  media_url: ''
})
const editing = ref(false)
const currentId = ref<number | null>(null)

const fetchIdeas = async () => {
  const { data, error } = await supabase
    .from('ideas')
    .select('*')
    .order('id', { ascending: false })

  if (error) {
    console.error('Erreur:', error)
    return
  }

  ideas.value = data
}

const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('ideas')
    .upload(filePath, file)

  if (uploadError) {
    console.error('Erreur upload:', uploadError)
    return
  }

  const { data } = await supabase.storage
    .from('ideas')
    .getPublicUrl(filePath)

  if (data) {
    newIdea.value.media_url = data.publicUrl
  }
}

const handleSubmit = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    console.error('Utilisateur non connecté')
    return
  }

  const ideaWithUser = {
    ...newIdea.value,
    user_id: user.id
  }

  if (editing.value && currentId.value) {
    const { error } = await supabase
      .from('ideas')
      .update(ideaWithUser)
      .eq('id', currentId.value)

    if (error) console.error('Erreur mise à jour:', error)
  } else {
    const { error } = await supabase
      .from('ideas')
      .insert([ideaWithUser])

    if (error) console.error('Erreur ajout:', error)
  }

  await fetchIdeas()
  resetForm()
}

const editIdea = (idea: Idea) => {
  newIdea.value = { ...idea }
  editing.value = true
  currentId.value = idea.id || null
}

const deleteIdea = async (id: number) => {
  const idea = ideas.value.find(i => i.id === id)
  
  if (idea?.media_url && isImage(idea.media_url)) {
    const filePath = idea.media_url.split('/').pop()
    if (filePath) {
      await supabase.storage
        .from('ideas')
        .remove([filePath])
    }
  }

  const { error } = await supabase
    .from('ideas')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Erreur suppression:', error)
    return
  }

  await fetchIdeas()
}

const resetForm = () => {
  newIdea.value = {
    title: '',
    description: '',
    media_url: ''
  }
  editing.value = false
  currentId.value = null
}

const isImage = (url?: string) => {
  if (!url) return false
  return url.match(/\.(jpeg|jpg|gif|png)$/) !== null
}

const isVideo = (url?: string) => {
  if (!url) return false
  return url.includes('youtube.com') || url.includes('vimeo.com')
}

const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com')) {
    const videoId = url.split('v=')[1]
    return `https://www.youtube.com/embed/${videoId}`
  } else if (url.includes('vimeo.com')) {
    const videoId = url.split('vimeo.com/')[1]
    return `https://player.vimeo.com/video/${videoId}`
  }
  return url
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  console.error('Erreur de chargement de l\'image:', target.src);
}

onMounted(fetchIdeas)
</script>


