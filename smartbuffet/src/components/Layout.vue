<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar :statusDropdown='dropDownOpen' />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="dropDownOpen ? 'overlay' : ''" id="main-content">

        <NavNew  />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './Sidebar.vue'
import NavNew from './NavNew.vue'
export default {
  name: 'Dashboard',
  data() {
      return {
          dropDownOpen: false
      }
  },
  components: {
    Sidebar,
    NavNew,
  }
}
</script>