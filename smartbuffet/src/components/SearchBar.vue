<template>
  <div class="flex w-auto max-w-screen-sm	  h-auto">
    <div class=" justify-center">
        <div class="relative text-gray-600 focus-within:text-gray-400  m-1">
          <span class="absolute inset-y-0 left-0 flex items-center p-1 ">
            <button type="submit" class="focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input @input="changeInput"  type="search" name="q" class="py-2 text-sm rounded-full pl-6 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="ใส่เนื้อที่ต้องการหา" autocomplete="off" />
        </div>
    </div>

    <div class="relative inline-flex mt-1">
      <svg class="w-2  absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
      <select v-model="selected" @change="changeType" class="border border-gray-300 rounded-full text-gray-600 h-10 pl-3 pr-7 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        <option >ประเภท</option>
        <option v-for="item in list_type" :value="item.id" :key="item.id">{{ item.name_type }}</option>
      </select>
    </div>
    

    <div class="relative inline-block text-left m-1">
      <div>
        <button type="button" @click="buttonAddClick" class="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
          ADD
          <svg  class=" ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'SearchBar',
    props: ['list_type'],
    data:()=>({
      selected: ''
    }),
    methods: {
      changeInput(e){
        this.$emit('inputChange',e.target.value)
      },
      changeType(e){
        this.$emit('changeType',this.selected)
      },
      buttonAddClick(){
        this.$emit('eventAddClick')
      }
    },
}
</script> 