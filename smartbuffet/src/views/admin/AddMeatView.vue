<template>
    <div>
        <AddMeat />
    </div>
</template>

<script>
import AddMeat from '../../components/AddMeat.vue'
export default {
    name :'AddMeatView',
    components: {
        AddMeat
    },
    beforeCreate(){
        this.$store.dispatch('onSetUser', 'admin');
    }
}
</script>
