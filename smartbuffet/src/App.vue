<template>
  <div class="container w-screen">
    <AddMeat/> 
    <!-- <div class="container mx-auto">
    <router-view />
      <div>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
      </div>
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
      <router-view />
    </div> -->
  </div>
</template>

<script>
import NavNew from './components/NavNew.vue'
import Layout from './components/Layout.vue'
import MainOpen from './components/MainOpen.vue'
import Opentable from './components/Opentable.vue'
import AddMeat from './components/AddMeat.vue'
import BillOrder from './components/AddMeat.vue'
import ListTable from './views/ListTable.vue'
export default {
  name: 'App',
  components: {
    NavNew,
    Layout,
    MainOpen,
    Opentable,
    AddMeat,
    BillOrder,
    ListTable
  }
}
</script>
