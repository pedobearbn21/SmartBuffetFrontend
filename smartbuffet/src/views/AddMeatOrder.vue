<template>
    <div>
        <SearchBar/>
        <CardMeat/>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import CardMeat from '../components/CardMeat.vue'
export default {
    name: 'App',
   components: {
     SearchBar,
     CardMeat
   }
}
</script>