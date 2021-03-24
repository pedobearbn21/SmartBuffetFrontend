<template>
    <div class="">
        <div class="box-border md:box-content border-2 border-transparent rounded-md ">
            <div class="text-lg">ออเดอร์</div>
            <div class="box-border md:box-content border-2 rounded-md w-auto my-2">
                <table class="w-full text-center">
                     <thead class="bg-green-500 flex  text-white w-full rounded-t rounded-b-none ">
                        <tr class="flex w-full p-2 ">
                            <th class="flex-1 ">เนื้อ</th>
                            <th class="flex-1 ">จำนวน</th>
                        </tr>
                     </thead>
                    <tbody class="bg-grey-light flex" v-for="item in list" :key="item.id" style="height: auto;">
                        <tr class="flex w-full p-2" >
                            <td class="flex-1">{{item.name}}</td>
                            <td class="flex-1">{{item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="px-4 py-3 sm:px-6">
            <button @click="orderServe" v-if="status == 'ORDERED'" type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              เสิร์ฟ
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['order_id'],
    data:()=>({
        list : [],
        status: null
    }),
    computed:{
        // total_cost() {
        //     return this.list.reduce((accumulator, currentValue) => {
        //         return accumulator + currentValue.meat.quanity*currentValue.meat.meat.cost
        // }, 0)
    },
    beforeCreate(){
        this.axios.get(`customer/order/${this.order_id}`)
            .then((res)=>{
                this.list = res.data.meat
                this.status = res.data.status
            })
            .catch((err)=>{console.log(err);})
    },
    methods:{
        orderServe(){
            this.axios.patch(`customer/order/${this.order_id}`,{status: 'SERVED'})
                .then((res)=>{
                    console.log(res);
                    this.$swal({
                        title:'Served',
                        icon: 'success'
                    })
                })
                .catch((err)=>{console.log(err);})
            this.$emit('ClickServed')
        }
    }
}
</script>