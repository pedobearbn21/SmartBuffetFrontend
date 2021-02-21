<template>
    <div class="bg-red-50">
        <div class=" flex flex-row py-7 px-10 ">
            <div class="flex-auto py-2 ">{{name}}</div>
            <div class="flex">
                <div class="mx-2">
                    <button type="button" @click="delCount" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        ลบ
                    </button>
                </div>
                <div class="flex-1 py-2 px-2 ">{{quantity}}</div>
                <div class="mx-2">
                    <button type="button" @click="addCount" class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        บวก
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CardCart',
    props: ['name', 'quantity' ],
    methods:{
        addCount(){
            console.log('event add');
            this.$emit('addCountMeat',1)
        },
        delCount(){
            console.log('event del');
            this.$emit('delCountMeat',-1)
        }
    },
    
}
</script>