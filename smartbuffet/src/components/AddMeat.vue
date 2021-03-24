<template>
<div>
  <div class=" h-auto w-auto">
    <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

            <div>
              <!-- <label class="block text-sm font-medium text-gray-700">
                Meat Photo
              </label> -->
              <div @drop="filedragUpload" @click="ClickUpload" @dragover="(event) =>{dragover=true;event.preventDefault()}"  @dragleave="dragover=false" :class="dragover?'bg-green-300':''" class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <input id="file-upload" ref="myupload" @change="changeFile" name="file-upload" type="file" class="invisible  sr-only">
                <div class="space-y-1 text-center" v-if="!file_show">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <!-- <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"> -->
                      <span name='btn-Upload' class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">Upload a file</span>
                    <!-- </label> -->
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG
                  </p>
                </div>
                <div class="space-y-1 text-center" v-else>
                  <img :src="file_show" class="w-full "/>
                </div>
              </div>
            </div>
          </div>
                <div class="flex justify-center my-5 space-x-1">
                    <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                        <label for="name" class="col-span-5 m-5 block text-sm font-medium text-gray-700">ชื่อของเนื้อ</label>
                        <input type="text" v-model="name" name="input-NameMeat" id="name" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="ชื่อของเนื้อ">
                    </div>
                </div>

                <div class=" justify-center my-5 ">
                  <!-- w-full px-3 py-2  border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer -->
                    <div class="mt-1 rounded-md shadow-sm grid-cols-12 grid ">
                        <label for="category" class="col-span-5 m-5  block text-sm font-medium text-gray-700">ประเภท</label>
                      <!-- <input type="text" name="dish" id="dish" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="จำนวนจาน"> -->
                            <select v-model="selected_type" name="category" id="category" class="col-span-7 w-max pl-5  border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer h-full   sm:text-sm">
                                <option name='btn-Type' selected value=""  class="text-gray-300">โปรดเลือกประเภท</option>
                                <option v-for="item in type_list" :value="item.id" :key="item.id">{{item.name_type}}</option>
                            </select>
                    </div>
                    </div>

                    <div class="flex justify-center my-5 space-x-1">
                        <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                            <label for="dish" class="col-span-5 m-5 block text-sm font-medium text-gray-700">จำนวนจาน</label>
                            <input type="number" v-model="quantity" name="input-NumDish" id="dish" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="จำนวนจาน">
                        </div>
                    </div>

                    <div class="flex justify-center my-5 space-x-1 ">
                        <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                            <label for="price" class="col-span-5 m-5 px-4 block text-sm font-medium text-gray-700">ราคา</label>
                            <input type="number" v-model="price" name="input-price" id="price" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="ราคา">
                        </div>
                    </div>

          <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button name='btn-SaveMeat' @click="createMeat" type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Save
            </button>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import { ref } from 'vue'
export default {
  data:()=>({
    dragover: false,
    file: null,
    file_name: '',
    file_show: null,
    name: '',
    selected_type: '',
    type_list: [],
    quantity: 0,
    price: 0,

  }),
  setup(){
    const myupload = ref(null)

    function ClickUpload(){
      myupload.value.click()
    }
    return {
      myupload,
      ClickUpload
    }
  },
  beforeCreate(){
    this.axios.get('/customer/type').then((res)=>{this.type_list=res.data;console.log(res.data);})
  },  
  methods: {
    filedragUpload(event){
      event.preventDefault();
      this.createBase64Image(event.dataTransfer.files[0])

    },
    changeFile(event){
      event.preventDefault();
      this.createBase64Image(event.target.files[0])
    },
    createBase64Image(fileObject) {
      this.file = fileObject
      this.file_name = fileObject.name
      const reader = new FileReader();
      reader.onload = (e) => {
        this.file_show = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    createMeat(){
      const dataForm = new FormData()
      dataForm.append('name',this.name)
      dataForm.append('cost',this.price)
      dataForm.append('quantity',this.quantity)
      dataForm.append('meat_img',this.file)
      dataForm.append('type',this.selected_type)


      this.axios.post('customer/meatlist',dataForm)
        .then((res)=>{
          // Notification 
          console.log(res);
          // this.$router.go(-1)
        })
        .catch((err)=>{console.log(err);})
    }
  }
}
</script>