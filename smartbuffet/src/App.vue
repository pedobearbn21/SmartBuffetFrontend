<template>
  <div class="">
    <div class="">
     <router-view/>
    </div>
  </div>
</template>

<script>
import NavNew from './components/NavNew.vue'
import Layout from './components/Layout.vue'
import MainOpen from './components/MainOpen.vue'
import Opentable from './components/Opentable.vue'
import AddMeat from './components/AddMeat.vue'
import BillOrder from './components/BillOrder.vue'
import ListTable from './views/ListTable.vue'
import CardMeat from './components/CardMeat.vue'
import OrderHistoryTable from './components/OrderHistoryTable.vue'
import Bill from './components/Bill.vue'
import SearchBar from './components/SearchBar.vue'
import ListMenu from './views/ListMenu.vue'
import AddMeatOrder from './views/AddMeatOrder.vue'
export default {
  name: 'App',
   components: {
     NavNew,
     Layout,
     MainOpen,
     Opentable,
     AddMeat,
     BillOrder,
     ListTable,
     CardMeat,
     OrderHistoryTable,
     Bill,
     SearchBar,
     ListMenu,
     ListTable,
     AddMeatOrder
   }
}
</script>
