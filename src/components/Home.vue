<template>
  <div class="container">
    <!-- Colonne de gauche (33.33%) -->
    <div class="left-column">
      <div class="presentation">
        <div class="header-container">
          <h1>Product <s>designer</s>, maker.</h1>
          <nav class="menu">
            <a href="mailto:contact@jeremy.design.com" 
               style="display: flex; align-items: center;"
               title="Envoyer un email"
               class="icon-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18V22H14V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 12H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 8H6.5C5.57174 8 4.6815 8.36875 4.02513 9.02513C3.36875 9.6815 3 10.5717 3 11.5V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H20C20.2652 18 20.5196 17.8946 20.7071 17.7071C20.8946 17.5196 21 17.2652 21 17V11.5C21 10.5717 20.6313 9.6815 19.9749 9.02513C19.3185 8.36875 18.4283 8 17.5 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 2H19V5H14V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9985 11.625C13.9038 11.632 13.8152 11.6747 13.7507 11.7443C13.6861 11.814 13.6503 11.9055 13.6504 12.0005C13.6505 12.0954 13.6866 12.1869 13.7513 12.2563C13.8161 12.3258 13.9048 12.3682 13.9995 12.375C14.0487 12.3749 14.0975 12.3652 14.143 12.3463C14.1884 12.3274 14.2297 12.2997 14.2645 12.2648C14.2993 12.2299 14.3269 12.1886 14.3456 12.143C14.3644 12.0975 14.3741 12.0487 14.374 11.9995C14.3739 11.9503 14.3642 11.9015 14.3453 11.856C14.3263 11.8106 14.2987 11.7693 14.2638 11.7345C14.2289 11.6997 14.1876 11.6721 14.142 11.6534C14.0965 11.6346 14.0477 11.6249 13.9985 11.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5 8C7.42826 8 8.3185 8.36875 8.97487 9.02513C9.63125 9.6815 10 10.5717 10 11.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jeremy-jones-designer/" 
               target="_blank" 
               style="display: flex; align-items: center;"
               title="Voir le profil LinkedIn"
               class="icon-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3H16.504C17.0944 3 17.6791 3.11629 18.2245 3.34224C18.77 3.56818 19.2657 3.89936 19.6832 4.31685C20.1006 4.73434 20.4318 5.22998 20.6578 5.77546C20.8837 6.32094 21 6.90558 21 7.496V16.505C20.9997 17.6972 20.5259 18.8406 19.6828 19.6835C18.8397 20.5265 17.6962 21 16.504 21H7.496C6.30359 21 5.16001 20.5263 4.31685 19.6832C3.47368 18.84 3 17.6964 3 16.504V7.5C3 6.30653 3.47411 5.16193 4.31802 4.31802C5.16193 3.47411 6.30653 3 7.5 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 11V16.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.7188 16.5001V13.3501C11.7188 12.7534 11.9558 12.1811 12.3778 11.7591C12.7997 11.3371 13.372 11.1001 13.9688 11.1001C14.5655 11.1001 15.1378 11.3371 15.5597 11.7591C15.9817 12.1811 16.2188 12.7534 16.2188 13.3501V16.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99778 8C7.89898 8.00044 7.80253 8.03014 7.7206 8.08535C7.63867 8.14056 7.57493 8.2188 7.53743 8.3102C7.49992 8.4016 7.49034 8.50206 7.50988 8.5989C7.52942 8.69575 7.57722 8.78463 7.64723 8.85434C7.71725 8.92404 7.80634 8.97144 7.90327 8.99055C8.0002 9.00967 8.10062 8.99964 8.19185 8.96173C8.28308 8.92382 8.36104 8.85973 8.41589 8.77756C8.47073 8.69538 8.5 8.5988 8.5 8.5C8.5 8.43416 8.48699 8.36896 8.46173 8.30815C8.43646 8.24734 8.39943 8.19212 8.35277 8.14566C8.3061 8.09921 8.25072 8.06242 8.1898 8.03743C8.12888 8.01243 8.06363 7.99971 7.99778 8Z" fill="black"/>
              </svg>

            </a>
          </nav>
        </div>
        <div class="intro">
          <p>
            They call me <strong>J.J</strong> in the business.
            <br>
            I've done quite a lot of things.
          </p>
          <br>
          <p>
            With over 17 years of multidisciplinary design experience spanning industries such as SaaS, Gaming, Healthcare, and Fashion across the USA and Europe. 
          </p>
          <br>
          <blockquote class="quote">
            <p>For every complex problem, there is an answer that is clear, simple and wrong.</p>
            <cite> - Jeremy
          <svg width="32" height="32" viewBox="0 0 395 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M289.13 14.9424C300.47 27.3224 309.57 44.6125 319.81 58.8425C320.82 60.2425 322.93 60.5524 323.71 61.7924C325.64 64.8824 327.61 73.4325 328.26 73.9625C330.55 75.8325 335.77 71.0025 333.78 82.3425C340.04 78.0325 343.18 91.0325 345.03 92.4625C356.42 101.292 366.85 110.682 377.66 121.472C387.49 131.272 393.94 141.932 390.82 158.432C400.27 160.752 389.26 177.722 385.78 179.352C382.65 180.812 378.75 179.992 375.33 180.882C367.42 182.942 368.8 182.422 361.1 183.062C326.51 185.982 292.18 183.342 257.75 186.312C257.68 192.652 257.91 199.022 257.78 205.382C257.72 207.972 254.35 213.592 258.81 214.282C260.12 214.482 263.59 212.272 266.56 212.492C302.89 215.202 339.7 218.992 374.39 230.252C378.87 232.472 378.51 253.332 375.68 258.272C371.27 258.272 367.31 256.402 362.85 256.222C354.67 255.892 318.89 255.482 312.75 257.252C298.83 261.262 302.33 259.642 289.03 260.912C285.3 261.272 274.89 265.542 268.99 266.742C263.64 267.832 258.35 266.762 253.04 268.212C250.74 269.522 249.21 293.772 242.75 296.312C238.67 288.272 239.82 279.022 239.77 270.312C219.83 271.412 200.3 275.792 180.65 278.402C177.07 278.882 173.3 276.942 170.69 277.252C149.13 279.822 157.02 290.882 155.75 307.302C154.06 329.172 152.28 359.862 146.86 380.412C142.2 398.102 131.25 414.112 113.78 397.292C111.48 395.072 92.71 373.272 91.67 371.402C86.22 361.632 88.19 363.602 80.86 354.212C77.1 349.392 73.08 342.642 69.66 337.342C67.06 333.312 69.38 328.712 61.77 330.302L63.75 320.312C53.86 326.902 54.15 315.692 50.42 312.222C46.42 308.512 37.11 302.852 33.63 299.462C31.22 297.112 30.45 291.292 29.39 290.622C27.75 289.592 24.27 291.022 22.24 289.872C19.21 288.162 12.67 275.392 11.12 272.722C10.59 271.812 7.10999 271.762 6.10999 269.002C2.36999 258.682 8.31 248.082 0 239.662L9.73999 225.272C16.02 226.242 22.87 220.852 26.87 220.372C29.23 220.082 31.93 221.772 34.42 221.562C68.99 218.642 103.36 221.692 137.77 218.312L139.68 193.482C138.43 191.162 137.59 190.992 135.19 190.792C126.48 190.062 115.6 191.102 106.78 190.292C77.7 187.602 48.8601 183.742 21.0701 174.412C17.1601 165.622 16.5 155.412 19.85 146.352C24.26 146.352 28.2201 148.222 32.6801 148.402C40.8601 148.732 76.64 149.142 82.78 147.372C96.7 143.362 93.2 144.982 106.5 143.712C109.76 143.402 116.18 139.772 121.36 138.892C128.41 137.702 135.46 137.722 142.45 136.422C145.52 134.742 147.08 111.512 152.78 108.312C157.82 115.962 155.21 125.732 155.76 134.312C157.73 136.412 189.21 129.312 195.05 128.602C201.52 127.822 208.24 126.932 214.86 126.202C222.25 125.382 229.09 129.112 237.79 123.322L243.92 49.4524C248.75 35.4024 249.34 -3.62754 272.67 0.272458C276.37 0.892458 285.81 11.2825 289.14 14.9125L289.13 14.9424ZM295.18 54.9125C293.38 53.2725 290.05 52.9424 287.88 51.2524C283.78 48.0624 276.79 37.2325 271.59 45.6525C267.98 51.5025 266.66 74.5525 265.29 82.8525C264.85 85.5325 262.4 88.0225 261.88 91.4525C260.45 100.982 261.18 110.852 259.74 120.312C265.35 122.402 270.82 121.042 275.96 121.462C292.05 122.752 305.85 122.562 322.76 124.352C329.92 125.112 336.62 125.082 343.76 124.312C339.11 117.042 334.51 108.422 329.7 101.392C322.48 90.8425 303.22 62.2624 295.18 54.9224V54.9125ZM233.77 212.332L233.74 188.322C224.82 192.022 214.46 189.912 204.77 190.332C197.09 190.662 187.63 190.482 181.01 190.932C175.04 191.342 169.01 197.652 161.77 192.312V216.312C185.57 212.822 209.69 212.512 233.76 212.322L233.77 212.332ZM135.78 284.332C130.18 282.272 124.83 283.852 119.66 283.432C107.96 282.492 104.1 283.162 92.41 283.522C81.99 283.842 74.06 279.872 64.01 279.522C59.93 279.382 55.89 280.662 51.77 280.332C67.35 302.402 81.68 329.192 100.67 348.412C103.1 350.872 114.85 361.673 117.08 361.883C119.11 362.073 120.87 361.122 122.58 360.182C126.55 353.252 128.91 341.062 130.59 332.472C131.48 327.932 133.15 321.062 133.7 317.212C135.21 306.492 133.96 295.002 135.8 284.322L135.78 284.332Z" 
                class="animated-path"/>
          </svg>
            </cite>
          </blockquote>

   
        </div>
      </div>
      <div class="commitment">
        <h2>Latest Commitments</h2>
        <div v-for="(company, index) in companies" 
             :key="index" 
             class="company-item">
          <div class="company-info">
            <div class="company-roles">
              <a v-if="company.url" 
                 :href="company.url" 
                 target="_blank" 
                 class="company-link">
                <span class="company-name">{{ company.name }}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <div class="role-tags">
                <span v-for="(role, roleIndex) in company.role" 
                      :key="roleIndex" 
                      class="company-role"
                      style="float: right; margin-left: 8px;">
                  {{ role }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

    </div>

    <!-- Colonne du milieu (33.33%) -->
    <div class="middle-column">
      <Ideas />
    </div>
    <div class="right-column"> 
      Right Column
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import Testimonials from '@/components/Testimonials.vue'
import Ideas from '@/components/Ideas.vue'
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

const companies = [
  { name: 'Krisspy', role: ['Product', 'Web App'], url: 'https://krisspy.ai' },
  { name: 'Async', role: ['Product', 'iOS', 'Web'], url: 'https://async.com' },
  { name: 'Typology', role: ['iOS'], url: 'https://typology.com' },
  { name: 'Mozza', role: ['Product Design'], url: 'https://mozza.io' },
  { name: 'Cycle', role: ['Product','Web'], url: 'https://cycle.com' },
  { name: 'Hermes', role: ['Web Customer Platform'], url: 'https://hermes.com' },
  { name: 'June', role: ['Web'], url: 'https://june.so' },
  { name: 'Spendesk', role: ['UX'], url: 'https://spendesk.com' },
  { name: 'STid', role: ['iOS'], url: 'https://stid.com' },
  { name: 'Brigad', role: ['Web'], url: 'https://brigad.co' },
  { name: 'Voodoo', role: ['iOS'], url: 'https://voodoo.io' },
  { name: 'Etam', role: ['iOS'], url: 'https://etam.com' },
  { name: 'Immosquare', role: ['UX'], url: 'https://immosquare.com' },
  { name: 'Edenred', role: ['iOS'], url: 'https://www.edenred.fr/ticket-restaurant' },
  { name: 'Activision', role: ['iOS'], url: 'https://www.activision.com/games/call-of-duty/call-of-duty-mobile' }
]

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

<style scoped>
.animated-path {
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  stroke: #333;
  stroke-width: 2;
  fill: transparent;
  transform: translateX(-100px);
  opacity: 0;
  animation: 
    draw 4s ease forwards,
    fillIn 1s ease forwards 1s,
    slideIn 0.6s ease-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fillIn {
  from {
    fill: transparent;
  }
  to {
    fill: #333;
  }
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>







