<template>
    <div class="container" >
        <div v-for="item in listtable" :key="item.id">
            <main-open class="open-table" @cardClicked='cardClicked(item.status,item.id)' :name='item.name' :status='item.status'/>
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
        this.axios.get('customer/tablestable')
                  .then((res)=>{
                      this.listtable = res.data;
                      console.log(this.listtable);
                  })
                  .catch((err)=>{console.log(err);})
    },
    methods:{
          getTable(){
            this.axios.get('customer/tablestable')
                  .then((res)=>{
                      this.listtable = res.data;
                      console.log(this.listtable);
                  })
                  .catch((err)=>{console.log(err);})
          },
          openTableDialy(){
              const data = {
                  people_count:this.people_count,
                  table:this.$store.state.table_stable_id,
                  table_open_time: new Date()
              }
              this.axios.post('customer/table',data)
                .then((res)=>{this.$swal({title:"Success",icon:"success"})})
                .catch((err)=>{console.log(err);})
          },
          cardClicked (status, id){
            if(status == 'CLOSE'){
                const {value: inputtext} = this.$swal({
                title: 'จำนวนคนในโต๊ะ',
                input: 'number',
                inputValue: 'sad',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText:'Cancel',
                confirmButtonColor: '#9EFF00',
                cancelButtonColor: '#B7B7B7',
                reverseButtons: true
                }).then((result)=>{
                    if(result.value) {
                        console.log(id);
                        const data = {
                            people_count: result.value,
                            table: id,
                            table_open_time: new Date()
                        }
                        this.axios.post('customer/table', data)
                            .then(res=>{
                                this.$swal({title:"Success",icon:"success"})
                                this.axios.patch(`customer/tablestable/${id}`,{status: 'OPEN'})
                                    .then((res)=>{this.getTable()}).catch((err)=>{console.log(err);})
                                
                            })
                            .catch((err)=>{console.log(err);})
                        
                        

                    }
                })
            }else{
                this.$store.dispatch('onSetTableStableId',id)
                this.$router.push( 
                    {
                        name:'orderhistory',
                        params: { id:this.$store.state.table_stable_id }
                    }
                )
                    // this.axios.get(`customer/tablestable/${id}`)
                    //     .then((res)=>{
                    //         this.$router.push( 
                    //             {
                    //                 name:'orderhistory',
                    //                 params: { id:this.$store.state.table_stable_id }
                    //             }
                    //         )
                    //     })
                    //     .catch((err)=>{console.log(err);})
            }
            
          }
      }
}
</script>

<style>

</style>