<template>
    <div class="bg-pink-200 relative">
        <!-- <div v-for="item in list" :key="item.id">
            <CardMeat :id='item.id' :name='item.name' :quantity="item.quantity" :meat_img='item.meat_img'/>
        </div> -->
        <div v-for="i in 100" :key='i'>
            <CardMeat :id='i' :name='i' :quantity="i" :meat_img='i'/>
        </div>

            <div class="w-full items-center flex text-white font-bold bg-green-200 md:bg-gray-300 px-2 text-center fixed bottom-0 h-16 ">
                <div class="flex-grow relative grid grid-cols-12 ">
                    <span class=" col-span-2">
                            icon 
                    </span>
                    |
                    <span class="col-span-9">เพิ่มลงในตะกร้า</span>
                        <!-- <span class="absolute grid-col">
                            <svg
                            class="fill-current" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30px" 
                                height="30px"
                            >
                            <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
                            </svg>
                        </span> -->
                </div>
                
            </div>
            <!-- <div class=" fixed h-16 bottom-0">    
                <button type="button" class="inline-flex justify-center item-center rounded-md border border-transparent shadow-sm  bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-max sm:text-sm">
                    <svg
                        class="fill-current" 
                        
                        xmlns="http://www.w3.org/2000/svg"
                        
                        width="50px" 
                        height="50px"
                        >
                        <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
                    </svg>
                        เปิดโต๊ะ
                </button>
                
            </div> -->
    </div>

</template>

<script>
import { onMounted } from 'vue'
import CardMeat from '../components/CardMeat.vue'
export default {
    name: 'ListMenu',
    components:{
        CardMeat
    },
    data(){
        return {
            list: [ ]
        }
    },
    beforeCreate (){
        this.axios.get('customer/meatlist')
                .then((res)=>{this.list = res.data})
                .catch((err)=>{console.log(err);})
    },
    methods:{
        clickisus(){
            this.axios.get('customer/meatlist')
                .then((res)=>{this.list = res.data})
                .catch((err)=>{console.log(err);})
        }
    }

}
</script>

<style>

</style>