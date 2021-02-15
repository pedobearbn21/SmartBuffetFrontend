<template>
    <div class="h-screen">
        <div class="py-10 font-semibold text-2xl ">สิ่งของที่จะทำการสั่ง</div>
        <div class="bg-red-50">
            <div class=" flex flex-row py-7 px-10 ">
                <div class="flex-auto py-2 ">ชื่อเนื้อ</div>
                <div class="flex">
                    <div class="mx-2">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            ลบ
                        </button>
                    </div>
                    <div class="flex-1 py-2 px-2 ">1</div>
                    <div class="mx-2">
                        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            บวก
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row mt-5 py-5">
                <div class="flex-1 ml-8">จำนวนทั้งหมด</div>
                <div class="flex-1 ml-5">0 จาน</div>
        </div>
        <div class="px-4 py-4 mt-2 text-center sm:px-6">
            <button type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              สั่งของ
            </button>
        </div>
    </div>
</template>