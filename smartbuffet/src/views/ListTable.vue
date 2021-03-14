<template>
    <div class="container" >
        <div v-for="item in listtable" :key="item.id">
            <main-open :name='item.name' :status='item.status'/>
        </div>
    </div>
</template>

<script>
import MainOpen from '../components/MainOpen.vue' 
import axios from 'axios'
export default {
  components: { MainOpen },
    componenets: {
        MainOpen
    },
    data: function() {
        return {
            listtable: []
        }
    },

    beforeCreate(){
        this.axios.get('customer/tablestale')
                  .then((res)=>{
                      this.listtable = res.data;
                      console.log(this.listtable);
                  })
                  .catch((err)=>{console.log(err);})
    },
    methods:{
          getTable(){
            this.axios.get('customer/tablestale')
                  .then((res)=>{
                      this.listtable = res.data;
                      console.log(this.listtable);
                  })
                  .catch((err)=>{console.log(err);})
          },
          openTableDialy(){
              this.axios.post('customer/table',data)
                .then((res)=>{this.$swal({title:"Success",icon:"success"})})
                .catch((err)=>{console.log(err);})
          }
      }
}
</script>

<style>

</style>