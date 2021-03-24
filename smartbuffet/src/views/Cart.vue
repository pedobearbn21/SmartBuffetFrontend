<template>
    <div>
        <div class="py-10 font-semibold text-2xl ">สิ่งของที่จะทำการสั่ง</div>
        <div v-for="(meat, index) in list" :key="meat.id">
            <card-cart :name='meat.name' :quantity='meat.quantity'  @addCountMeat='(e) => eventMeat(e,index)' @delCountMeat='(e) => eventMeat(e,index)' />
        </div>
        <div class="flex flex-row mt-5 py-5">
                <div class="flex-1 ml-8">จำนวนทั้งหมด</div>
                <div class="flex-1 ml-5">{{totalDisk || 0}} จาน</div>
        </div>
        <div name='btn-pushorder' class="px-4 py-4 mt-2 text-center sm:px-6">
            <button type="submit" v-if="list.length!=0" @click="sendOrder" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                สั่งของ
            </button>
            <button type="submit" v-else disabled @click="alert('กรุณาเพิ่มเนื้อ')" class="disabled:opacity-10 justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
        this.list = this.$store.state.meat_list 
        console.log(this.list);
    },
    methods: {
        eventMeat(value,index){
            if(this.list[index].quantity+value <=0){
                this.list.splice(index,1)
            }else{
                this.list[index].quantity = this.list[index].quantity+value
            }
            
        },
        sendOrder(){
            const data = {
                    meats:[...this.list],
                    order_time: new Date(),
                    table_id: this.$store.state.table_id
                }
            this.axios.post('customer/orderlist',data)
                .then((res)=>{ 
                    this.$swal({
                        title: 'สั่งสำเร็จ',
                        text: 'กรุณารอสักครู่',
                        icon: 'success',
                        showCloseButton: true,
                        showConfirmButton: false,
                    })
                })
                .catch((err)=>console.log(err))
            this.list = []
            this.$store.dispatch('onSetBucket', this.list)
            this.$router.push( {name:'welcomepage',params: {id: this.$store.state.table_stable_id}})
        }
    }
    
}
</script>