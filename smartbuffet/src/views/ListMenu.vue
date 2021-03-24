<template>
    <div class="mt-3">
        <SearchBar :option_no_add='true' :list_type="list_type" @inputChange='(e)=>searchMeat(e)' @changeType='(e)=>searchbyType(e)' />
        <div v-for="item in list" :key='item.id' >
            <div name='cardmeat-${id}'>
                <CardMeat :id='item.id' :name='item.name' :quantity="item.quantity" :meat_img='item.meat_img' @ClickEvent="(e) => eventMeat(e)"/>
            </div>
        </div>
        <footer class="pt-20"></footer>
            <button name='btn-pickmeat' type="button" @click="navigateToOrder" class="w-full items-center flex text-white font-bold bg-green-200 md:bg-gray-300 px-2 text-center fixed bottom-0 h-16 ">
                <div class="flex-grow relative grid grid-cols-12 ">
                    <span class=" col-span-2">
                            icon 
                    </span>
                    |
                    <span class="col-span-9">เพิ่มลงในตะกร้า({{CartCount}})</span>
                </div>
                
            </button>
    </div>

</template>

<script>
import { onMounted } from 'vue'
import CardMeat from '../components/CardMeat.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
    name: 'ListMenu',
    components:{
        CardMeat,
        SearchBar
    },
    data(){
        return {
            list: [ ],
            CartList: [],
            ShoppingCart: new Set(),
            list_type: []
        }
    },
    computed: {
    // a computed getter
        CartCount() {
            // `this` points to the vm instance
        return this.$store.state.meat_list.length
}
    },
    beforeCreate (){
        console.log(this.$store.state.meat_list)
        this.axios.get('customer/meatlist')
                .then((res)=>{this.list = res.data;})
                .catch((err)=>{console.log(err);})
        this.axios.get('/customer/type')
                .then((res)=>{
                    this.list_type = res.data
                })
                .catch((err)=>{console.log(err);})
    },
    
    methods:{
        getMeat(){
            this.axios.get('customer/meatlist')
                .then((res)=>{this.list = res.data;})
                .catch((err)=>{console.log(err);})
        },
        navigateToOrder(){
            this.$router.push( {name:'เช็คเอาท์ตะกร้า'})
        },
        eventMeat(e){
            this.$store.state.meat_list.push(e)
            this.$store.state.meat_list = this.deleteDuplicate(e)
            // logic add cart
            console.log(this.$store.state.meat_list);
        },
        deleteDuplicate(e){
            let arr_unique = []
            if (this.$store.state.meat_list.length >1){
                arr_unique = this.$store.state.meat_list.filter((item,index)=>{
                    return item.id != e.id
                })
                arr_unique.push(e)
            }else{
                arr_unique.push(e)
            }
            return arr_unique
        },
        searchMeat(e){
            if (e === ''){
                this.getMeat()
            }else{
                this.axios.get('/customer/meat/searchtext/'+e)
                .then((res)=>{
                    this.list = res.data
                })
                .catch((err)=>{console.log(err);})
            }
        },
        searchbyType(e){
            this.axios.get('/customer/meat/search/'+e)
                .then((res)=>{
                    this.list = res.data
                })
                .catch((err)=>{console.log(err);})
        },
    }

}
</script>