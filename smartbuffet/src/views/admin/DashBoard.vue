<template>
    <div class="Chart">
        <MonthlyChart :chartData='datacollection' />
        <!-- {{ total_customer_graph }} -->
    </div>
  
</template>

<script>
import MonthlyChart from '../../components/LineChartExample.vue'
export default {
    name: 'DashBoard',
    components: {
      MonthlyChart
    },
    data(){
        return {
            total_customer: [],
            datacollection: {
                labels: [1, 2],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [52, 21]
                    }, {
                        label: 'Data two',
                        backgroundColor: '#f87979',
                        data: [11, 6]
                    }
                ]
            }
        }
    },
    mounted () {
      this.fillData()
    },
    computed : {
        total_customer_graph(){
            return this.total_customer.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.people_count  
                    }, 0)
        }
    },
    created(){
        this.axios.get('customer/totalcustomer')
                .then((res)=>{console.log(res.data);this.total_customer = res.data})
                .catch((err)=>{console.log(err);})
    },
    methods: {
        getDataDashboard(){
            this.axios.get('customer/totalcustomer')
                .then((res)=>{console.log(res);this.total_customer = res})
                .catch((err)=>{console.log(err);})
        },
        fillData () {
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }, {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }
                ]
            }
        },
        getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
}
</script>
<style>
  .Chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>