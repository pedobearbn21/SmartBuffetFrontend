<template>
    <div>
        <div class="justify-self-center mx-6 mt-5   ">
            <div v-for="(item,index) in list" :key="item.id">
                <BillOrder :index='index+1' :id='item.id' :name='item.name' :status='item.status' :meat_list='item.meat_list' />
            </div>
        </div>
        <div>
            <!-- <div class="fixed bottom-0 left-0"> -->
                <Alertcomponent title="เช็คบิล" text="กรุณารอสักครู่" @onConfirm='Checkbill' @onClose='Checkbill' icon="success" textButton="เช็คบิล" :showConfirmButton="false" styleButton="fixed bottom-0 left-0 h-12 px-2 w-full  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" />
            <!-- </div> -->
            <!-- <button type="submit" @click="Checkbill" class="  h-12 px-2 w-full  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              เช็คบิล
            </button> -->
        </div>
    </div>
</template>

<script>
import BillOrder from '../components/BillOrder.vue'
import Alertcomponent from '../components/AlertComponent.vue'
import OrderHistoryTable from '../components/OrderHistoryTable.vue'
export default {
    name:'OrdersHistory',
    components:{
        BillOrder,
        Alertcomponent,
        OrderHistoryTable
    },
    data:()=>({
        list: []
    }),
    created(){
        console.log(this.$store.state.table_id);
        this.list = this.$store.state.bucket_meat 
        this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
            .then((res)=>{this.list = res.data})
            .catch((err)=>{console.log(err);})
    },
    methods:{
        Checkbill(){
            console.log(this.$store.state.table_id);
            this.axios.patch(`customer/table/${this.$store.state.table_id}`,{status: "CLOSE"})
                .then((r)=>{
                    console.log(r);
                    // this.$notification.push( message:`${this.$route.params.id} ต้องการเช็คบิลโต๊ะ`)  
                })
                .catch((err)=>{ console.log(err); })  
            this.axios.patch(`customer/tablestable/${this.$store.state.table_stable_id}`, {status : "CLOSE"})
                .then((res)=>{console.log(res);})
                .catch((err)=>{console.log(err);})
        }
    }
}
</script>
