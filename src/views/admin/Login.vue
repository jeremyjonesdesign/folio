<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Administration</h2>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Mot de passe" required>
      </div>
      <button type="submit">Se connecter</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    if (signInError) throw signInError

    router.push('/admin/testimonials')
  } catch (e) {
    error.value = "Erreur de connexion"
    console.error(e)
  }
}
</script>

<style scoped>
.login-container {
  background-color: #ffffff; /* ou la couleur de votre choix */
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 14px;
}
</style> 