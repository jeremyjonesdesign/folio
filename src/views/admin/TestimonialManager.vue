<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="admin-content">
      <div class="admin-container">
        <h2>Gestion des Témoignages</h2>
        
        <form @submit.prevent="handleSubmit" class="testimonial-form">
          <div class="form-group">
            <input 
              type="file" 
              @change="handleImageUpload" 
              accept="image/*"
            >
          </div>
          <div class="form-group">
            <input 
              v-model="newTestimonial.author" 
              placeholder="Nom du client" 
              required
            >
          </div>
          <div class="form-group">
            <textarea 
              v-model="newTestimonial.text" 
              placeholder="Témoignage" 
              required
            ></textarea>
          </div>
          <div class="form-group">
            <input 
              v-model="newTestimonial.position" 
              placeholder="Poste / Entreprise"
            >
          </div>
          <div class="form-group">
            <input 
              v-model="newTestimonial.link_url" 
              placeholder="URL du site"
            >
          </div>
          <button type="submit">
            {{ editing ? 'Modifier' : 'Ajouter' }}
          </button>
        </form>

        <div class="testimonials-list">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id" 
            class="testimonial-item"
          >
            <img 
              v-if="testimonial.image_url"
              :src="testimonial.image_url" 
              :alt="testimonial.author" 
              class="testimonial-image"
              @error="handleImageError"
            >
            <div class="testimonial-content">
              <h3>{{ testimonial.author }}</h3>
              <p>{{ testimonial.text }}</p>
              <p>{{ testimonial.position }}</p>
              <a :href="testimonial.link_url" target="_blank">Voir le site</a>
            </div>
            <div class="testimonial-actions">
              <button @click="editTestimonial(testimonial)">Modifier</button>
              <button @click="deleteTestimonial(testimonial.id)">Supprimer</button>
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

interface Testimonial {
  id: string
  author: string
  text: string
  image_url?: string
  position?: string
  link_url?: string
}

interface NewTestimonial {
  author: string
  text: string
  image_url?: string
  position?: string
  link_url?: string
}

const testimonials = ref<Testimonial[]>([])
const newTestimonial = ref<NewTestimonial>({
  author: '',
  text: '',
  position: '',
  link_url: ''
})
const editing = ref(false)
const currentId = ref<string | null>(null)

const fetchTestimonials = async () => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Erreur:', error)
    return
  }

  testimonials.value = data
}

const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
  const filePath = `${fileName}`

  // Upload du fichier
  const { error: uploadError } = await supabase.storage
    .from('testimonials')
    .upload(filePath, file)

  if (uploadError) {
    console.error('Erreur upload:', uploadError)
    return
  }

  // Récupérer l'URL publique avec la bonne méthode
  const { data } = await supabase.storage
    .from('testimonials')
    .getPublicUrl(filePath)

  // Assurez-vous que l'URL est complète
  if (data) {
    newTestimonial.value.image_url = data.publicUrl
    console.log('URL publique générée:', data.publicUrl)
  }
}

const handleSubmit = async () => {
  if (editing.value && currentId.value) {
    const { error } = await supabase
      .from('testimonials')
      .update(newTestimonial.value)
      .eq('id', currentId.value)

    if (error) console.error('Erreur mise à jour:', error)
  } else {
    const { error } = await supabase
      .from('testimonials')
      .insert([newTestimonial.value])

    if (error) console.error('Erreur ajout:', error)
  }

  await fetchTestimonials()
  resetForm()
}

const editTestimonial = (testimonial: Testimonial) => {
  newTestimonial.value = { ...testimonial }
  editing.value = true
  currentId.value = testimonial.id
}

const deleteTestimonial = async (id: string) => {
  const testimonial = testimonials.value.find(t => t.id === id)
  
  if (testimonial?.image_url) {
    const filePath = testimonial.image_url.split('/').pop()
    if (filePath) {
      await supabase.storage
        .from('testimonials')
        .remove([filePath])
    }
  }

  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Erreur suppression:', error)
    return
  }

  await fetchTestimonials()
}

const resetForm = () => {
  newTestimonial.value = {
    author: '',
    text: '',
    position: ''
  }
  editing.value = false
  currentId.value = null
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  console.error('Erreur de chargement de l\'image:', target.src);
}

onMounted(fetchTestimonials)
</script>

<style>
@import '@/assets/styles/admin.css';
</style> 