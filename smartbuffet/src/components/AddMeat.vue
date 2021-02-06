<template>
<div>
    <div class="my-5">AddMeat</div>
  <div class=" h-auto w-auto">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Meat Photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG
                  </p>
                </div>
              </div>
            </div>
          </div>

                <div class="flex justify-center my-5">
                    <label for="name" class="m-5 block text-sm font-medium text-gray-700">ชื่อของเนื้อ</label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input type="text" name="name" id="name" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="ชื่อของเนื้อ">
                        </div>
                    </div>

                <div class="flex justify-center my-5">
                    <label for="category" class="m-5 px-2 block text-sm font-medium text-gray-700">ประเภท</label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input type="text" name="category" id="category" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="ประเภท">
                        </div>
                    </div>

                    <div class="flex justify-center my-5">
                    <label for="dish" class="m-5 block text-sm font-medium text-gray-700">จำนวนจาน</label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input type="text" name="dish" id="dish" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="จำนวนจาน">
                        </div>
                    </div>

                    <div class="flex justify-center my-5 ">
                    <label for="price" class="m-5 px-4 block text-sm font-medium text-gray-700">ราคา</label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="ราคา">
                        </div>
                    </div>

          <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button type="submit" class=" justify-center w-full h-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>



</template>