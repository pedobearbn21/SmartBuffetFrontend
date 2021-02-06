<template>
  <div class="mx-auto w-11/12 ">
      <div class="text-5xl mt-20">
          ยินดีต้อนรับ
      </div>
      <div class="text-2xl mt-5">
           ลูกค้าโต๊ะ {{ $route.params.id }}
      </div>
      <div class="mt-20">
            <router-link :to="{name:'รายการ',params: {id: $route.params.id}}">   
                <button  class="bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                    สั่งออเดอร์    
                </button>
            </router-link>
      </div>
      <div class="mt-5">
            <button @click="1+1" class="bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                เช็คบิล
            </button>

      </div>
  </div>
</template>

<script>
export default {
    name: 'WelcomePage',
    data: ()=> ({
        
    })

    // this.$route.params.id
}
</script>

<style>

</style>