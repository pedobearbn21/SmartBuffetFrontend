<template>
  <div>
      <Navbar />
    <div class="container mx-auto">
      <div>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
      </div>
      <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
