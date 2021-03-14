<template>
<!-- <div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> -->
    <!-- <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> -->
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="justify-center bg-green-400 px-4 pt-3 pb-3 sm:p-6 sm:pb-4">
        <div class=" text-2xl text-center text-gray-900">หมายเลขโต๊ะ</div>
      </div>
      <div class="flex items-center justify-center bg-gray-50 px-4">
        <div class="relative text-gray-600 my-5  ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
               class="fill-current" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 22.5"  
                width="50px" 
                height="50px"
               >
               <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
              </svg>
          </span>
          <input class="py-2 text-sm  text-gray-900 bg-gray-100 rounded-md pl-10 focus:outline-none border border-gray-900 " placeholder="จำนวนลูกค้า" autocomplete="off">
        </div>
      </div>
      <div class="grid grid-cols-2 px-4 pb-4 h-auto place-content-between  justify-items-stretch">
        <button type="button" class="col-span-1 justify-self-center  w-3/4 rounded-md border-transparent bg-red-500 "> Cancel</button>
        <button type="button" class="col-span-1 justify-self-center w-3/4 rounded-md border-transparent bg-green-500 "> Accept</button>
      </div>
    </div>
  <!-- </div>
</div> -->
</template>

<script>
  export default {
    name: 'Opentable',
  }
</script>