<template>
    <div class="">
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
        </div>
</template>

<script>
export default {
    data:()=>({
        list: []
    }),
    beforeCreate(){
        this.axios.get('customer/meatlist')
            .then(res=>{this.list = res.data;})
            .catch(err=>{console.log(err);})
    }
}
</script>

<style>

</style>