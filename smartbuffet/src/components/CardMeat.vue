<template>
    <router-link :to="{name: 'รายการ'}">
        <div class=" overflow-y-auto ">
            <div class="justify-center  pt-4 text-center">
                <div class="border-2 border-gray-500 w-11/12 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white">
                        <div class="flex justify-around "> <!-- กรอบของโต๊ะ -->
                        <div class="p-2 px-0 mx-0"><img class="h-20 w-40 " alt="Vue logo" :src="meat_img"/></div> <!--เลขโต๊ะ -->
                        <div class="p-2">{{name}} : {{quantity}}</div> <!-- สเตตัส -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name:'CardMeat',
    props: ['id', 'name', 'quantity', 'meat_img']
}
</script>