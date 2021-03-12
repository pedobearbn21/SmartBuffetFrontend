<template>
    <div>
        <div class="justify-self-center mx-6 mt-5   ">
            <div v-for="(item,index) in list" :key="item.id">
                <BillOrder :index='index' :name='item.name' :status='item.status' :meat_list='item.meat_list' />
            </div>
        </div>
        <div>
            <button type="submit" @click="Checkbill" class="fixed bottom-0 left-0  h-12 px-2 w-full  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              เช็คบิล
            </button>
        </div>
    </div>
</template>

<script>
import BillOrder from '../components/BillOrder.vue'
export default {
    name:'OrdersHistory',
    components:{
        BillOrder
    },
    data:()=>({
        list: []
    }),
    // beforeCreate (){
    //     this.list = this.$store.state.bucket_meat
    //     console.log(this.list);
    // },
    created(){
        
        this.list = this.$store.state.bucket_meat 
        console.log(this.list);
    },
    methods:{
        Checkbill(){
            
            this.$axios.patch(`customer/table/${this.$store.state.table_id}`)
                .then((r)=>{  
                    // this.$notification.push( message:`${this.$route.params.id} ต้องการเช็คบิลโต๊ะ`)  
                })
                .catch((err)=>{ console.log(err); })
        }
    }
}
</script>
