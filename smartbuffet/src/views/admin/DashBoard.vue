<template>
    <div class="  mt-5 pt-5">
        <p class="text-3xl font-normal">กราฟรายงานประจำวัน</p>
        <div class=" mx-5 mt-2 mb-5 rounded-lg  shadow-xl"   >
            <p>จำนวนการสั่งเนื้อวันนี้</p>
            <MonthlyChart :chartData='datacollection' :data_label='label_meat' :dataset_meat='dataset_meat'  style="position: relative; height:40vh; width:80vw"/>
        </div>
        <!-- {{ total_customer_graph }} -->
        <div class="shadow-xl mx-5">
            <Proplecomeon :total='total_customer_graph'/>
        </div>
        <div class="inset-0 mt-5 mx-5 shadow-xl">
            <stock-meat />
        </div>
    </div>
</template>

<script>
import MonthlyChart from '../../components/LineChartExample.vue'
import Proplecomeon from '../../components/Peoplecomeon.vue'
import StockMeat from '../../components/StockMeat.vue'
export default {
    name: 'DashBoard',
    components: {
      MonthlyChart,
      Proplecomeon,
      StockMeat
    },
    data(){
        return {
            total_customer: [],
            datacollection: {
            },
            label_meat: [],
            dataset_meat: [],
            stock: []
        }
    },
    created () {
        
        this.ConvertData()
    },
    computed : {
        total_customer_graph(){
            return this.total_customer.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.people_count  
                    }, 0)
        },
    },
    beforeCreate(){
        this.$store.dispatch('onSetUser', 'admin');
        this.axios.get('customer/meatlist')
                .then(res=>{
                    this.$store.dispatch('onSetMeatList',res.data)
                    this.label_meat = res.data.map((data)=>data.name)
                })
                .catch(err=>{console.log(err);})
        // 2
        this.axios.get('customer/totalcustomer')
                .then((res)=>{this.total_customer = res.data})
                .catch((err)=>{console.log(err);})

        // Used Meat
        this.axios.get('customer/testgb')
            .then((res)=>{
                this.stock = res.data;
                this.ConvertData();
            })
            .catch((err)=>{console.log();})
        
        
    },
    mounted(){
        this.axios.get('customer/testgb')
            .then((res)=>{
                this.stock = res.data;
                this.ConvertData();
            })
            .catch((err)=>{console.log();})
    },
    methods: {
        getDataDashboard(){
            this.axios.get('customer/totalcustomer')
                .then((res)=>{this.total_customer = res})
                .catch((err)=>{console.log(err);})
        },
        getStockMeat(){
            this.axios.get('customer/meatlist')
                .then(res=>{
                    this.$store.dispatch('onSetMeatList',res.data)
                    this.label_meat = res.data.map((data)=>data.name)
                })
                .catch(err=>{console.log(err);})
        },
        ConvertData(){
            for (let index = 0; index < this.label_meat.length; index++) {
                this.dataset_meat[index] = 0
            }
            for (let index = 0; index < this.stock.length; index++) {
                for (let j = 0; j < this.stock[index].meat.length; j++) {
                    if( this.label_meat.includes(this.stock[index].meat[j].name)){
                        let i = this.label_meat.indexOf(this.stock[index].meat[j].name)
                        this.dataset_meat[i] = this.dataset_meat[i] + this.stock[index].meat[j].quantity
                    }; 
                }
            }
            this.datacollection = {
                labels: this.label_meat,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: this.dataset_meat
                    },
                ]
            }
        }
    }
}
</script>
<style>
  .Chart {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    border-radius: 5px;
  }
</style>