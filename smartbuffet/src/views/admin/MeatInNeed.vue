<template>
  <div class="mt-5 mx-5">
       <div class="">
        <div class="box-border md:box-content border-2 border-transparent rounded-md ">
            <div class="text-lg">รายการเนื้อที่ต้องการ</div>
            <div class="box-border md:box-content border-2 rounded-md w-auto my-2">
                <table class="w-full text-center">
                     <thead class="bg-green-500 flex  text-white w-full rounded-t rounded-b-none ">
                        <tr class="flex w-full p-2 ">
                            <th class="flex-1 ">เนื้อ</th>
                            <th class="flex-1 ">จำนวน</th>
                        </tr>
                     </thead>
                    <tbody class="bg-grey-light flex" v-for="(item,index) in list" :key="index" style="height: auto;">
                        <tr class="flex w-full p-2" >
                            <td class="flex-1">{{item.meat}}</td>
                            <td class="flex-1">{{item.quantity__sum}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="px-4 py-3 sm:px-6">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data: ()=>({
        list:[]
    }),
    beforeCreate(){
        this.axios.get('customer/meat/inneed')
            .then((res)=>{this.list = res.data})
            .catch((err)=>{console.log(err);})
    },
    methods: {

    }
}
</script>