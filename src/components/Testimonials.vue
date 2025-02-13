<template>
  <div class="testimonials">
    <div class="header-container">
      <h2>Kudos to those ❤️</h2>
    </div>
    <div class="testimonial-grid">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <div class="testimonial-header">
          <img :src="testimonial.image_url" class="testimonial-avatar" :alt="`${testimonial.author} avatar`" />
          <span class="testimonial-author">{{ testimonial.author }}, <a :href="testimonial.link_url" target="_blank"> {{ testimonial.position }}</a></span>
        </div>
        <p>"{{ testimonial.text }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

interface Testimonial {
  id: number
  author: string
  text: string
  image_url: string
  position: string
  link_url: string
}

const testimonials = ref<Testimonial[]>([])

const fetchTestimonials = async () => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('id, author, text, image_url, position, link_url')
      .order('id')
    if (error) {
   
      return
    }
    
    if (data) {
      testimonials.value = data

    }
  } catch (error) {

  }
}

onMounted(() => {
  fetchTestimonials()
})
</script>
