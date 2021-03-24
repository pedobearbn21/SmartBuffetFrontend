<template>
  <div class="mx-auto w-11/12 ">
      <div class="text-5xl mt-20">
          ยินดีต้อนรับ
      </div>
      <div class="text-2xl mt-5">
           ลูกค้าโต๊ะ {{ $store.state.table_stable_id }}
      </div>
      <div class="mt-20">
            <router-link :to="{name:'รายการ',params: { id: $store.state.table_id }}">   
                <button name="btn-order" class="btn-order bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                    สั่งออเดอร์    
                </button>
            </router-link>
      </div>
      <div class="mt-5"  v-if="LengthofOrderInlist != 0">
            <button @click="gotoOrderhistory" name="btn-order-history" class="btn-order-history bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                ดูประวัติออเดอร์
            </button>
      </div>
      <div class="mt-5">
            <Alertcomponent @onConfirm='Checkbill' @onClose='Checkbill' title="เช็คบิล" text="กรุณารอสักครู่" icon="success" textButton="เช็คบิล" :showConfirmButton="false" styleButton="btn-checkbill bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 " />
      </div>
  </div>
</template>

<script>
import Alertcomponent from '../components/AlertComponent.vue'

export default {
    name: 'WelcomePage',
    components:{
        Alertcomponent
    },
    data: ()=> ({
        list: []
    }),
    computed: {
        // a computed getter
        LengthofOrderInlist() {
            this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
                .then((res)=>
                {
                    this.list = res.data;
                    this.$store.dispatch('onSetBucket', this.list)
                    // console.log(this.$store.state.bucket_meat);
                })
                .catch((err)=>{console.log(err);})
        return this.length 
        }
    },
    beforeCreate (){
        if (this.$route.params.id != undefined){
            this.$store.dispatch('onSetTableStableId', this.$route.params.id)
        } 
        this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
                .then((res)=>
                {
                    this.list = res.data;
                    this.$store.dispatch('onSetBucket', this.list)
                })
                .catch((err)=>{console.log(err);})
    },
    methods:{
        gotoOrderhistory(){
            this.$router.push( 
                {
                    name:'orderhistory',
                    params: { id:this.$store.state.table_stable_id }
                }
            )
        },
        Checkbill(){
            console.log(this.$store.state.table_id);
            this.axios.patch(`customer/table/update/${this.$store.state.table_id}`,{status: "CLOSE",table_clost_time:new Date()})
                .then((r)=>{
                    // this.$notification.push( message:`${this.$route.params.id} ต้องการเช็คบิลโต๊ะ`)  
                })
                .catch((err)=>{ console.log(err); })
            this.axios.patch(`customer/tablestable/${this.$store.state.table_stable_id}`, {status : "CLOSE"})
                .then((res)=>{console.log(res);})
                .catch((err)=>{console.log(err);})
                
        }
    }

    // this.$route.params.id
}
</script>

<style>

</style>