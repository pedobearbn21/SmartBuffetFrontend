<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
    data_label: {
      type: Array
    },
    dataset_meat: {
      type: Array
    }
  },
  data:()=>({
    dataC: {},
    label_meat: [],
    dataset_meata: [],
    stock: {}
  }),
  created(){

    // Used Meat
    this.axios.get('customer/testgb')
        .then((res)=>{
            this.stock = res.data;
            this.ConvertData();
        })
        .catch((err)=>{console.log();})
    
  },
  methods:{
    getStockMeat(){
        this.axios.get('customer/meatlist')
            .then(res=>{
                this.$store.dispatch('onSetMeatList',res.data)
                this.label_meat = res.data.map((data)=>data.name)
            })
            .catch(err=>{console.log(err);})
    },
    ConvertData(){
        // for (let index = 0; index < this.label_meat.length; index++) {
        //     this.dataset_meat[index] = 0
        // }
        // for (let index = 0; index < this.stock.length; index++) {
        //     for (let j = 0; j < this.stock[index].meat.length; j++) {
        //         if( this.label_meat.includes(this.stock[index].meat[j].name)){
        //             let i = this.label_meat.indexOf(this.stock[index].meat[j].name)
        //             this.dataset_meata[i] = this.dataset_meata[i] + this.stock[index].meat[j].quantity
        //         }; 
        //     }
        // }
        this.renderChart({
                labels: this.data_label,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: this.dataset_meat
                    },
                ]
            }, this.chartOptions)
    }
  },
  mounted () {
    
    // console.log('mounted');
    this.renderChart({
                labels: this.data_label,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: this.dataset_meat
                    },
                ]
            }, this.chartOptions)
    // console.log(this.label_meat, this.dataset_meata);
  }
})
</script>