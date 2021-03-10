<template>
    <div class=" ">
        <div class="justify-self-enter mx-6">
            <div v-for="(index,item) in list" :key="item.id">
                <BillOrder :index='index' :name='item.name' :status='item.status' :meat_list='item.meat_list' />
            </div>
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
}
</script>
