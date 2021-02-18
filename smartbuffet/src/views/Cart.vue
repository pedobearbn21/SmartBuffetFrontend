<template>
    <div>
        <div class="py-10 font-semibold text-2xl ">สิ่งของที่จะทำการสั่ง {{props.CartList}}</div>
        <div v-for="meat in list" :key="meat.id">
            <card-cart :name='meat.name' :quantity_meat='meat.quantity_meat' @addCountMeat='e => meat.quantity_meat+e' @delCountMeat='e => meat.quantity_meat+e' />
        </div>
        <div class="flex flex-row mt-5 py-5">
                <div class="flex-1 ml-8">จำนวนทั้งหมด</div>
                <div class="flex-1 ml-5">0 จาน</div>
        </div>
        <div class="px-4 py-4 mt-2 text-center sm:px-6">
            <button type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                สั่งของ
            </button>
        </div>
    </div>
</template>

<script>
import CardCart from '../components/CardCart.vue'
export default {
    name:'Cart',
    components: {
        CardCart
    },
    data(){
        return {
            list: []
        }
    },
    created(){
        console.log(this.props.Cart);
        // this.list = this.$route.params.CartList.map(e =>e = {
        //     id: e.id,
        //     name: e.name,
        //     quantity_meat: 0,
        // })
    }
    
}
</script>