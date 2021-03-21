<template>
  <div class="mt-4">
      <div v-for="item in table_list" :key="item.id">
          {{ item.name }}
      </div>
  </div>
</template>

<script>
import Opentable from '../../components/Opentable.vue'
export default {
    name: 'OpenTableView',
    components:{
        Opentable
    },
    data:()=>({
        table_list: []
    }),
    beforeCreate(){
         this.axios.get('/customer/tablestable')
            .then((res)=>{
                this.table_list = res.data
                console.log(this.table_list);
            })
            .catch((err)=>{console.log(err);})
    },
    methods: {
    }
}
</script>