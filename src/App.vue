<template>
  <div class="h-screen text-gray-700 w-full bg-gray-50">
    <div class="w-full fixed bg-white shadow-sm border-b">
      <div class="flex justify-between">
        <div class="w-1/6 p-4 border-r">
          <a href="#" class="font-semibold">Security analyzer</a>
        </div>
        <ul class="flex text-gray-900 px-8 py-4 space-x-6">
          <li><a href="">About</a></li>
        </ul>
      </div>
    </div>
    <div class="w-full h-screen flex pt-14">
      <div class="w-1/6 shadow bg-white p-5">
        <ul class=" flex-col space-y-3">
          <li><a class="hover:text-green-600" href="">New scan</a></li>
          <li><a class="hover:text-green-600" href="">Scan history</a></li>
          <li><a class="hover:text-green-600" href="">Repporting</a></li>
        </ul>
      </div>
      <div class="w-5/6 py-8 px-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
