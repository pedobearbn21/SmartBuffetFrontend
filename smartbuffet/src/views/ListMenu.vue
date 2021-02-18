<template>
    <div class="">
        <div v-for="item in list" :key='item.id' >
                <CardMeat :id='item.id' :name='item.name' :quantity="item.quantity" :meat_img='item.meat_img' @ClickEvent="(e) => eventMeat(e)"/>
        </div>
        <footer class="pt-20"></footer>
            <button type="button" @click="navigateToOrder" class="w-full items-center flex text-white font-bold bg-green-200 md:bg-gray-300 px-2 text-center fixed bottom-0 h-16 ">
                <div class="flex-grow relative grid grid-cols-12 ">
                    <span class=" col-span-2">
                            icon 
                    </span>
                    |
                    <span class="col-span-9">เพิ่มลงในตะกร้า({{CartCount}})</span>
                </div>
                
            </button>
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
            list: [ ],
            CartList: [],
            ShoppingCart: new Set()
        }
    },
    computed: {
    // a computed getter
        CartCount() {
            // `this` points to the vm instance
        return this.CartList.length
}
    },
    beforeCreate (){
        console.log(this.$store.state.pad)
        this.axios.get('customer/meatlist')
                .then((res)=>{this.list = res.data;})
                .catch((err)=>{console.log(err);})
    },
    
    methods:{
        navigateToOrder(){
            const arr = [...this.CartList]
            console.log(arr);
            this.$router.push( {name:'เช็คเอาท์ตะกร้า',params:{ CartList:this.CartList[0] }})
        },
        eventMeat(e){
            this.CartList.push(e)
            // logic add cart
            console.log(this.CartList);
        }
    }

}
</script>

<style>

</style>