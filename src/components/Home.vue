<template>
  <div class="container">
    <!-- Colonne de gauche (33.33%) -->
    <div class="left-column">
      <div class="presentation">
        <div class="header-container">
          <h1>Product  <s>designer</s>, maker.</h1>
          <nav class="menu">
            <a href="mailto:contact@jeremy.design.com">
              <img src="@/assets/images/Mailbox.svg" width="24" height="24" class="email-icon" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/jeremy-jones-designer/" target="_blank">
              <img src="@/assets/images/Linkedin.svg" width="24" height="24" class="linkedin-icon" alt="LinkedIn" />
            </a>
          </nav>
        </div>
        <div class="intro">
          <p class="intro">
            They call me <strong>J.J</strong> in the business.
            <br>
            I've done quite a lot of things.
          </p>
          <p>
            With over 17 years of multidisciplinary design experience spanning industries such as SaaS, Gaming, Healthcare, and fashion across the USA and Europe. 
          </p>
          <p>
            For every complex problem, there is an answer that is clear, simple and wrong.
          </p>
        </div>
      </div>

      <div class="testimonials">
        <h2>Clients</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <img src="https://picsum.photos/50" class="testimonial-avatar" alt="Client avatar" />
            <p>"Un design exceptionnel qui a dépassé nos attentes..."</p>
            <span class="testimonial-author">- John Doe</span>
          </div>
          <div class="testimonial-card">
            <img src="https://picsum.photos/51" class="testimonial-avatar" alt="Client avatar" />
            <p>"Collaboration parfaite et résultats impressionnants..."</p>
            <span class="testimonial-author">- Jane Smith</span>
          </div>
        </div>
      </div>

      <div class="projects">
        <div class="project-grid">
          <a href="#" class="project-card">
            <img src="https://picsum.photos/400/300" alt="Typology" />
            <span>Typology.com</span>
          </a>
          <a href="#" class="project-card">
            <img src="https://picsum.photos/401/300" alt="Async" />
            <span>Async.com</span>
          </a>
          <a href="#" class="project-card">
            <img src="https://picsum.photos/402/300" alt="Cycle" />
            <span>Cycle.app</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Colonne du milieu (33.33%) -->
    <div class="middle-column">
      <div class="content-wrapper">
        <h2 class="featured-title">Ideas</h2>
        <div class="creative-grid">
          <div class="image-preview wide" @click="openPreview(5)">
            <img src="https://picsum.photos/800/600?random=5" alt="Project work 1" />
          </div>
          <div class="image-preview tall" @click="openPreview(6)">
            <img src="https://picsum.photos/800/600?random=6" alt="Project work 2" />
          </div>
          <div class="image-preview" @click="openPreview(7)">
            <img src="https://picsum.photos/800/600?random=7" alt="Project work 3" />
          </div>
          <div class="image-preview big" @click="openPreview(8)">
            <img src="https://picsum.photos/800/600?random=8" alt="Project work 4" />
          </div>
        </div>
      </div>
    </div>

  </div>
  
  <!-- Nouveau composant de défilement des logos -->
  <div class="logo-scroll-container">
    <Vue3Marquee
      :clone="true"
      :duration="80"
      :pause-on-hover="true"
      :space="100"
      class="marquee-container"
    >
      <img src="@/assets/images/logo1.svg" alt="Logo client 1" class="client-logo">
      <img src="@/assets/images/logo2.svg" alt="Logo client 2" class="client-logo">
      <img src="@/assets/images/logo3.svg" alt="Logo client 3" class="client-logo">
      <img src="@/assets/images/logo4.svg" alt="Logo client 4" class="client-logo">
      <img src="@/assets/images/logo5.svg" alt="Logo client 5" class="client-logo">
      <img src="@/assets/images/logo6.svg" alt="Logo client 6" class="client-logo">
      <img src="@/assets/images/logo7.svg" alt="Logo client 7" class="client-logo">
      <img src="@/assets/images/logo8.svg" alt="Logo client 8" class="client-logo">
      <img src="@/assets/images/logo9.svg" alt="Logo client 9" class="client-logo">
      <img src="@/assets/images/logo10.svg" alt="Logo client 10" class="client-logo">
      <img src="@/assets/images/logo11.svg" alt="Logo client 11" class="client-logo">
      <img src="@/assets/images/logo12.svg" alt="Logo client 12" class="client-logo">
    </Vue3Marquee>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import '../styles/Home.css'

const selectedImage = ref<number | null>(null)
const logoScroll = ref<HTMLElement | null>(null)
const logoWrapper = ref<HTMLElement | null>(null)
let scrollPosition = 0
let animationFrameId: number

const openPreview = (imageId: number) => {
  selectedImage.value = imageId
}

const closePreview = () => {
  selectedImage.value = null
}

onMounted(() => {
  if (!logoWrapper.value || !logoScroll.value) return
  
  // Clone les logos pour créer l'effet infini
  const clonedWrapper = logoWrapper.value.cloneNode(true)
  logoScroll.value.appendChild(clonedWrapper)

  const animate = () => {
    if (!logoScroll.value || !logoWrapper.value) return
    
    scrollPosition -= 1
    const wrapperWidth = logoWrapper.value.offsetWidth

    if (Math.abs(scrollPosition) >= wrapperWidth) {
      scrollPosition = 0
    }

    logoScroll.value.style.transform = `translateX(${scrollPosition}px)`
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>



