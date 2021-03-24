<template>
    <div class=" z-10 inset-0 overflow-y-auto ">
        <div class="flex  justify-center  text-center">

            <span class="hidden sm:inline-block  sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom w-full  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6  grid grid-cols-12">
                    <div class="col-span-6">
                        <div class="mx-auto  flex items-center justify-center  w-20 rounded-xl bg-yellow-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="mt-3 sm:mt-0 sm:ml-36 text-center">
                            <h3 class="text-2xl self-center leading-6 font-medium text-gray-900" id="modal-headline">
                                จำนวนลูกค้า
                            </h3>
                            <div class='mt-5 text-xl'>
                                {{total}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['total'],
    data:()=>{
        data_graph:null
    },
    beforeCreate(){
        this.axios.get('customer/totalcustomer')
            .then(res=>{this.data_graph=res.data})
            .catch(err=>{console.log(err);})
    },
    methods:{
        QueryCustomerToday(){
            const num_total = this.data_graph.reduce((accumulator,currentValue)=>{
                        return accumulator + currentValue.people_count
                    },0)
        }
    }
}
</script>