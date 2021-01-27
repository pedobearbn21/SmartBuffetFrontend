<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <!-- <Sidebar :statusDropdown='dropDownOpen' /> -->
        <div class="header">
          <NavNew   class="mb-6"/>
        </div>  
        <div class="container h-screen p-6 mt-12   mx-auto">
          <router-view />
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavNew from './NavNew.vue'
export default {
  name: 'Layout',
  data() {
      return {
          dropDownOpen: false
      }
  },
  components: {
    NavNew,
  }
}
</script>