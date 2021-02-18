<template>
    <div class="p-5">
        <div class="">ใบเสร็จโต๊ะที่</div>
            <div class="box-border md:box-content border-2 rounded-md w-full my-8">
                <table class="w-full">
                    <div class="text-left ml-5 pt-5">จำนวนลูกค้า</div>
                    <tbody class="bg-grey-light flex" style="height: auto;">
                        <tr class="flex w-full mt-4 ">
                            <td class="flex-1 p-4">วากิว</td>
                            <td class="flex-1 p-4">10</td>
                        </tr>
                    </tbody>
                    <tbody class="bg-grey-light flex mt-4" style="height: auto;">
                        <tr class="flex w-full ">
                            <td class="flex-1 p-4">รวม</td>
                            <td class="flex-1 p-4">ราคารวม</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div class="flex justify-center p-5">
            <div class="text-red-500">*</div>
            <div class="mx-2">กินไม่หมดปรับสองเท่าตามราคาหัว</div>
            <div class="text-red-500">*</div>
        </div>
        <div class="justify-center p-5">ขอบคุณที่มาใช้บริการ ครับ/ค่ะ</div>
        <div class="px-4 py-8 sm:px-6">
            <button type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              ชำระเงิน
            </button>
          </div>
    </div>
</template>