<template>
        <div class="w-12/12 ">
            <div class="justify-center  pt-4 text-center">
                <button type="button" @click="eventCallBack(id,name)" class="border-2 border-gray-500 w-11/12 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-lg transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white">
                        <div class="flex justify-around "> <!-- กรอบของโต๊ะ -->
                            <div class="p-2 px-0 mx-0">
                                <img class="h-20 w-40 " alt="Vue logo" :src="path_cloud+meat_img"/>
                            </div> <!--เลขโต๊ะ -->
                            <div class="p-2 grid grid-rows-2 grid-flow-col gap-6">
                                <div >
                                    {{name}} : {{quantity}}
                                </div> <!-- สเตตัส -->
                                <div v-if="cost>0">
                                     ราคา : {{ cost }}
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div> 
</template>

<script>
export default {
    name:'CardMeat',
    props: ['id', 'name', 'quantity', 'meat_img', 'cost'],
    data:()=>({
        path_cloud: 'https://res.cloudinary.com/de7oksxda/'
    }),
    methods:{
        eventCallBack(id,name){
            this.$emit('ClickEvent',{id:id, name:name, quantity:1})
        }
    }
}
</script>