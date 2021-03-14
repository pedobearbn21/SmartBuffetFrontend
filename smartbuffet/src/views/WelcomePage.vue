<template>
  <div class="mx-auto w-11/12 ">
      <div class="text-5xl mt-20">
          ยินดีต้อนรับ
      </div>
      <div class="text-2xl mt-5">
           ลูกค้าโต๊ะ {{ $store.state.table_id }}
      </div>
      <div class="mt-20">
            <router-link :to="{name:'รายการ',params: { id: $store.state.table_id }}">   
                <button name="btn-order" class="btn-order bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                    สั่งออเดอร์    
                </button>
            </router-link>
      </div>
      <div class="mt-5"  v-if="list.length != 0">
            <button name='btn-orderhistory' @click="gotoOrderhistory" class="btn-order-history bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                ดูประวัติออเดอร์
            </button>
      </div>
      <div class="mt-5">
            <button @click="1+1" class="btn-checkbill bg-yellow-300 rounded-xl w-full md:w-6/12 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-400 ">
                เช็คบิล
            </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WelcomePage',
    data: ()=> ({
        list: []
    }),
    beforeCreate (){
        if (this.$route.params.id != undefined){
            this.$store.dispatch('onSetTableId', this.$route.params.id)
        } 
        console.log(this.$route.params.id, this.$store.state.table_id);
        this.axios.get(`customer/ordersearch/${this.$store.state.table_id}`)
                .then((res)=>
                {
                    this.list = res.data;
                    this.$store.dispatch('onSetBucket', this.list)
                    // console.log(this.$store.state.bucket_meat);
                })
                .catch((err)=>{console.log(err);})
    },
    methods:{
        gotoOrderhistory(){
            this.$router.push( 
                {
                    name:'orderhistory',
                    params: { id:this.$store.state.table_id }
                }
            )
        }
    }

    // this.$route.params.id
}
</script>

<style>

</style>