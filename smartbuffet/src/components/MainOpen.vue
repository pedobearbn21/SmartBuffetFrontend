<template>
  <div @click="EventClick" class="overflow-y-auto">
    <div class="justify-center  pt-4 px-4 text-center sm:block sm:p-0">

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
      <div class="hover:shadow-xl border-2 border-gray-500   w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class=" bg-white px-4 pt-4 pb-4 sm:p-6 sm:pb-4" :class="status=='OPEN'?'bg-red-300':'bg-yellow-200'">
            <div class="flex justify-between  "> <!-- กรอบของโต๊ะ -->
              <div class=" p-2">โต๊ะ : {{name}}</div> <!--เลขโต๊ะ -->
              <div class=" p-2 ">สถานะ : {{status === 'OPEN'?'ไม่ว่าง':'ว่าง'}}</div> <!-- สเตตัส -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainOpen',
    props: ['name', 'status'],
    methods:{
      EventClick(){
        this.$emit('cardClicked')
      }
    }
  }
</script>