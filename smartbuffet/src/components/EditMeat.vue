<template>
<div>
<form @submit.prevent="createMeat">
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
                <div class="space-y-1 text-center">
                  <img :src="new_file||file_shows?file_show:path_cloud+fileprops" class="w-full "/>
                </div>
              </div>
            </div>
          </div>
                <div class="flex justify-center my-5 space-x-1">
                    <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                        <label for="name" class="col-span-5 m-5 block text-sm font-medium text-gray-700">ชื่อของเนื้อ</label>
                        <input type="text" v-model="nameprops" name="name" id="name" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="ชื่อของเนื้อ">
                    </div>
                </div>

                <div class=" justify-center my-5 ">
                  <!-- w-full px-3 py-2  border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer -->
                    <div class="mt-1 rounded-md shadow-sm grid-cols-12 grid ">
                        <label for="category" class="col-span-5 m-5  block text-sm font-medium text-gray-700">ประเภท</label>
                      <!-- <input type="text" name="dish" id="dish" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="จำนวนจาน"> -->
                            <select v-model="selected_typeprops" name="category" id="category" class="col-span-7 w-max pl-5  border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer h-full   sm:text-sm">
                                <option selected value=""  class="text-gray-300">โปรดเลือกประเภท</option>
                                <option v-for="item in type_list" :value="item.id" :key="item.id">{{item.name_type}}</option>
                            </select>
                    </div>
                    </div>

                    <div class="flex justify-center my-5 space-x-1">
                        <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                            <label for="dish" class="col-span-5 m-5 block text-sm font-medium text-gray-700">จำนวนจาน</label>
                            <input type="number" v-model="quantityprops" name="dish" id="dish" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="จำนวนจาน">
                        </div>
                    </div>

                    <div class="flex justify-center my-5 space-x-1 ">
                        <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                            <label for="price" class="col-span-5 m-5 px-4 block text-sm font-medium text-gray-700">ราคา</label>
                            <input type="number" v-model="priceprops" name="price" id="price" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="ราคา">
                        </div>
                    </div>

          <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button  type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Save
            </button>
          </div>
        </div>
    </div>
  </div>
</form>
</div>
</template>
<script>
import { ref } from 'vue'
export default {
//   props:['id', 'name', 'price', 'quantity', 'selected_type', 'file'],
  props:{
      item_id: Number,
      name: String,
      price: Number,
      quantity: Number,
      selected_type: Number,
      file:String
  },
  data:()=>({
    dragover: false,
    file_show: null,
    type_list: [],
    new_file: null,
    path_cloud: 'https://res.cloudinary.com/de7oksxda/'

  }),
  setup(props){
    const myupload = ref(null)
    const idprops = ref(props.item_id)
    const priceprops = ref(props.price)
    const nameprops = ref(props.name)
    const quantityprops = ref(props.quantity)
    const selected_typeprops = ref(props.selected_type)
    const fileprops = ref(props.file)

    function ClickUpload(){
      myupload.value.click()
    }
    return {
      myupload,
      ClickUpload,
      idprops,
      priceprops,
      nameprops,
      quantityprops,
      selected_typeprops,
      fileprops

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
      this.new_file = fileObject
      const reader = new FileReader();
      reader.onload = (e) => {
        this.file_show = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    createMeat(e){
        console.log(this.idprops);
      const dataForm = new FormData()
    
      dataForm.append('name',this.nameprops)
      dataForm.append('cost',this.priceprops)
      dataForm.append('quantity',this.quantityprops)
      if(this.new_file){
        dataForm.append('meat_img',this.new_file)
      }
      dataForm.append('type',this.selected_typeprops)



      this.axios.patch(`customer/meat/${this.idprops}`,dataForm)
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