<template>
    <div class="pt-4 max-w-screen-sm">
        <div class="flex">
            <SearchBar @inputChange="(e)=>searchMeat(e)" @changeType='(e)=>searchbyType(e)' @eventAddClick='eventAddButton' :list_type='list_type'/>
        </div>
        <div>
            <div v-for="item in list_meat" :key="item.id">
                <CartMeat @ClickEvent='editMeat(item.id)' :id="item.id" :name="item.name" :quantity="item.quantity" :meat_img="item.meat_img"/>
            </div>
        </div>
    </div>
</template>

<script>
import CartMeat from '../../components/CardMeat.vue'
import SearchBar from '../../components/SearchBar.vue'

export default {
    name: 'ManageMeat',
    components:{
        SearchBar,
        CartMeat,
    },
    data:()=>({
        list_meat: [],
        list_type: []
    }),
    beforeCreate(){
        this.$store.dispatch('onSetUser', 'admin');
        this.axios.get('/customer/meatlist')
                .then((res)=>{
                    console.log(res);
                    this.$store.dispatch('onSetMeatList', res.data)
                    this.list_meat = res.data
                    console.log(this.$store.state.meat_list);
                })
                .catch((err)=>{console.log(err);})
        this.axios.get('/customer/type')
                .then((res)=>{
                    this.list_type = res.data
                })
                .catch((err)=>{console.log(err);})
    },
    methods: {
        getMeat(){
            this.axios.get('/customer/meatlist')
                .then((res)=>{
                    console.log(res);
                    this.$store.dispatch('onSetMeatList', res.data)
                    this.list_meat = res.data
                })
                .catch((err)=>{console.log(err);})
        },
        searchMeat(e){
            if (e === ''){
                this.getMeat()
            }else{
                this.axios.get('/customer/meat/searchtext/'+e)
                .then((res)=>{
                    this.$store.dispatch('onSetMeatList', res.data)
                    this.list_meat = res.data
                })
                .catch((err)=>{console.log(err);})
            }
        },
        searchbyType(e){
            this.axios.get('/customer/meat/search/'+e)
                .then((res)=>{
                    this.$store.dispatch('onSetMeatList', res.data)
                    this.list_meat = res.data
                })
                .catch((err)=>{console.log(err);})
        },
        eventAddButton(){
            this.$router.push({name:'addMeat'})
        },
        editMeat(id){
            this.$router.push({name: 'editMeat',params: { id: id}})
        }
    }
}
</script>

<style>

</style>