<template>
  <div class="ideas">
    <h2>Miscellaneous</h2>
    <div class="ideas-grid">
      <div v-for="idea in ideas" :key="idea.id" :class="{'idea-card': true, 'text-only': !idea.media_url}">
        <div v-if="idea.media_url" class="media-container" @click="handleImageClick(idea.media_url)">
          <h3 class="idea-title">{{ idea.title }} <span class="date">{{ formatDate(idea.created_at) }}</span></h3>
          <p>{{ idea.description }}</p>
          <img v-if="isImage(idea.media_url)" :src="idea.media_url" class="idea-image" :alt="idea.title">
          <iframe v-else-if="isVideo(idea.media_url)"
            :src="getEmbedUrl(idea.media_url)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="idea-video">
          </iframe>
        </div>
        <div v-else class="text-container">
          <h3>{{ idea.title }} <span class="date">{{ formatDate(idea.created_at) }}</span></h3>
          <p>{{ idea.description }}</p>
        </div>
      </div>
    </div>


    <Transition name="modal-fade">
      <div v-if="showModal" class="modal" @click="handleModalClose">
        <img :src="selectedImage" class="modal-image" @click.stop>
        <button class="close-button" @click="handleModalClose">×</button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

interface Idea {
  id: number
  title: string
  description: string
  media_url: string
}

const ideas = ref<Idea[]>([])

const showModal = ref(false)
const selectedImage = ref('')

const fetchIdeas = async () => {
  try {
    const { data, error } = await supabase
      .from('ideas')
      .select('id, title, description, media_url, created_at')
      .order('id', { ascending: false })

    if (error) {
      throw new Error(`Erreur Supabase: ${error.message}`)
    }
    
    if (data) {
      ideas.value = data
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erreur lors de la récupération des idées: ${error.message}`)
    }
  }
}

// Fonctions utilitaires pour la gestion des médias
const isImage = (url: string) => {
  return url.match(/\.(jpeg|jpg|gif|png)$/) !== null
}

const isVideo = (url: string) => {
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

const handleImageClick = (imageUrl: string) => {
  showModal.value = true
  selectedImage.value = imageUrl
}

const handleModalClose = () => {
  showModal.value = false
}

// Ajout de la fonction formatDate
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

onMounted(() => {
  fetchIdeas()
})
</script>

<style scoped>
@font-face {
  font-family: 'GT-Regular';   
  src: url('@/assets/fonts/GT-America-Regular.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'GT-Light';   
  src: url('@/assets/fonts/GT-America-Light.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'GT-Medium';   
  src: url('@/assets/fonts/GT-America-Medium.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
}@font-face {
  font-family: 'GT- ';   
  src: url('@/assets/fonts/GT-America-Bold.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.ideas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 0 auto;
}
.ideas{
    h2{
        margin-bottom: 1rem;
    }
}
.idea-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
    h3{
    color: #FFF;
    font-size: 1rem;
    font-family: 'GT-Bold';
    margin: 0;
    padding: 0;
    }
}

.media-container {
  width: 100%;
  position: relative;
  padding-top: 56.25%;
  cursor: pointer;
  z-index: 1;

  p {
    position: absolute;
    top: 2rem;
    left: 0rem;
    z-index: 200;
    color: white;
    margin: 0;
    padding: 0.5rem 1rem;
  }
}

.media-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%);
  z-index: 2;
  border-radius: 4px;
  pointer-events: none;
}

.idea-title {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 20000;
  color: white;
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.idea-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  z-index: 1;
}

.idea-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
}

.modal-image {
  transition: transform 0.3s ease;
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

/* Animations pour la modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-image,
.modal-fade-leave-to .modal-image {
  transform: scale(0.8);
}

.text-only {
  padding: 2rem;
  transition: all 0.3s ease;
}
.idea-card.text-only {
  transform: translateY(-5px);
  box-shadow: 0 0px 1px #F0F0F0;
  white-space: pre-wrap;
  p{
    font-family: 'Inter';
    font-weight: 400;
    color: #333;
  }
}
.text-container {
  h3 {
    color: #333;
    font-family: 'GT-Bold';
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
}
.date{
    font-family: 'Inter';
    font-size: 0.8rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 40px;
  }
</style> 