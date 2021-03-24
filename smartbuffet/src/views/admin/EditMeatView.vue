<template>
    <EditMeat :item_id='item.id' :name='item.name' :price='item.cost' :selected_type='item.type' :quantity='item.quantity' :file='item.meat_img' />
</template>

<script>
import EditMeat from "../../components/EditMeat.vue";
export default {
    components:{
        EditMeat
    },
    data:()=>({
        item: null
    }),
    beforeCreate(){
        this.axios(`customer/meat/${this.$route.params.id}`)
            .then((res)=>{
                this.item = res.data
                console.log(this.item.id);
            })
            .catch((err)=>{console.log(err);})
    }
}
</script>
