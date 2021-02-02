<template>
    <div class="container" v-if="listtable" >
        <li v-for="item in listtable" :key="item.id">
            {{item.name}}
            <!-- Check Life cycle -->
            <MainOpen :name ='item.name'/>
        </li>
    </div>
</template>

<script>
import MainOpen from '../components/MainOpen.vue' 
export default {
    componenets: {
        MainOpen
    },
    data: function() {
        listtable: []
    },
    beforeMount(){
        this.getTable()
    },
    methods:{
          getTable(){
            this.axios.get('customer/tablestale')
                  .then((res)=>{
                      this.listtable = res.data;
                      console.log(this.listtable);
                  })
                  .catch((err)=>{console.log(err);})
          }
      }
}
</script>

<style>

</style>