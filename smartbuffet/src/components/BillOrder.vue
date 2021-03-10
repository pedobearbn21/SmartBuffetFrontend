<template>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="max-w-md mx-auto h-auto bg-white rounded-b rounded-t" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
          <div class="grid grid-cols-12 flex items-stretch h-full font-bold">
            <div class="one col-span-1 " >
              <div class="bg-red-500 rounded-l rounded-tl w-3.5 h-full"></div>
            </div>
            <div class="two col-span-4 self-center">ออเดอร์ที่ {{  index  }}</div>
            <div class="three col-span-5 self-center">{{ status }}</div>
            <div class="four col-span-2 self-center h-auto px-2 py-2.5" >
              <img src="../assets/eye.png" width="35rem">
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  props: ['index','name', 'status']
}
</script>