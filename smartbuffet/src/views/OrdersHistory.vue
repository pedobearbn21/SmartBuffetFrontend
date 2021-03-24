<template>
    <div>
        <div class="justify-self-center mx-6 mt-5   ">
            <p class="text-xl font-bold">ราคารวมตอนนี้ : {{value>0?value:0}}</p>
            <div v-for="(item,index) in list" :key="item.id">
                <BillOrder @servedOrder='fectchHistory' :index='index+1' :id='item.id' :name='item.name' :status='item.status' :meat_list='item.meat_list' />
            </div>
        </div>
        <div>
            <Alertcomponent title="เช็คบิล" text="กรุณารอสักครู่" @onConfirm='Checkbill' @onClose='Checkbill' icon="success" textButton="เช็คบิล" :showConfirmButton="false" styleButton="fixed bottom-0 left-0 h-12 px-2 w-full  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" />
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
        list: [],
        value: 0
    }),
    computed:{
    },
   // setup(){
    //     const list = reactive()
    //     const getList = async(id)=>{
    //         console.log(1);
    //         // await axios.get(`customer/ordersearch/${id}`)
    //         //     .then((res)=>{
    //         //         list.value = res.data
    //         //     })
    //         //     .catch((err)=>{console.log(err);})
    //         //     console.log(list);
    //     }
    //     return {
    //         list, getList
    //     }
    // }, 
    mounted(){
        this.list = this.$store.state.bucket_meat  
        this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
            .then((res)=>{
                this.list = res.data
            })
            .catch((err)=>{console.log(err);})
        this.CalTotalCost()
    },
    methods:{
        Checkbill(){
            this.axios.patch(`customer/table/update/${this.$store.state.table_id}`,{status: "CLOSE",table_clost_time:new Date()})
                .then((r)=>{
                    // this.$notification.push( message:`${this.$route.params.id} ต้องการเช็คบิลโต๊ะ`)  
                })
                .catch((err)=>{ console.log(err); })  
            this.axios.patch(`customer/tablestable/${this.$store.state.table_stable_id}`, {status : "CLOSE"})
                .then((res)=>{console.log(res);})
                .catch((err)=>{console.log(err);})
        },
        fectchHistory(){
            this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
            .then((res)=>{this.list = res.data})
            .catch((err)=>{console.log(err);})
        },
        CalTotalCost(){
            for (let index = 0; index < this.list.length; index++) {
                for (let j = 0; j < this.list[index].meat.length; j++) {
                    let cur = this.list[index].meat[j]
                    this.value = this.value + (cur.quantity*cur.meat.cost)
                }
                
            }
        }
    }
}
</script>
