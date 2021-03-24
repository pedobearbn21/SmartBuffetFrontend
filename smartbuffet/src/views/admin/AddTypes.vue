<template>
  <div class="mt-20">
        <p class="text-3xl text-bold"> เพิ่มประเภท </p>
        <div class="flex justify-center mx-5 my-5 space-x-1">
            <div class="grid grid-cols-12 mt-1 rounded-md shadow-sm">
                <label for="name_type" class="col-span-5 m-5 block text-sm font-medium text-gray-700">ชื่อประเภท</label>
                <input type="text" v-model="name_type" name="name_type" id="name_type" class="col-span-7 focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="ชื่อประเภท">
            </div>
            
        </div>
        <div class=" flex justify-center mx-5 space-x-1">
                <button @click="addType" class="btn-order-history bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                    กดเพิ่มประเภท
                </button>
        </div>      
            
        
  </div>
</template>

<script>
import AlertComponent from '../../components/AlertComponent.vue'
export default {
    components: {
        AlertComponent
    },
    data:()=>{
        name_type: ''
    },
    methods:{
        addType(){
            this.axios.post('customer/type',{name_type:this.name_type})
                .then((res)=>{console.log(res.data);})
                .catch((err)=>{console.log(err);})
        }
    },
}
</script>