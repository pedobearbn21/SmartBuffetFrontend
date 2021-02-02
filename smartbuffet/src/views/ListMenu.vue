<template>
    <div>
        <button class="bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 " @click="clickisus">Test Api</button>
        <div v-for="item in list" :key="item.id">{{ item.name}}</div>
    </div>

</template>

<script>
import { onMounted } from 'vue'
export default {
    name: 'ListMenu',
    data(){
        return {
            list: ''
        }
    },
    mounted (){
        this.clickisus()
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