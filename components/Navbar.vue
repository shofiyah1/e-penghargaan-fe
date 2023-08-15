<template>
  <div class="bg-white border-b border-gray-300 flex sticky top-0 z-20 justify-end items-center gap-4 px-6 py-4">
    <div class="flex gap-6">
      <div class="relative flex">
        <Icon name="ic:round-mail" class="w-5 h-5" />
        <div class="absolute bottom-2 left-2.5 bg-red-600 w-4 h-4 rounded-xl flex items-center justify-center text-xs text-white font-medium font-roboto">8</div>
      </div>
      <Icon name="ic:baseline-notifications" class="w-5 h-5" />
    </div>
    <p class="text-sm text-gray-900 font-bold">Super Admin</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU" class="rounded-full w-10 h-10" alt="image pegawai" />
    <Icon @click="showMenu = !showMenu" name="fa6-solid:caret-down" class="w-5 h-5 cursor-pointer" />
    <div v-if="showMenu" class="bg-white border border-gray-20 rounded-lg shadow-sm w-[224px] absolute z-20 top-20">
      <button class="px-4 py-3 w-full text-gray-900 text-left font-bold hover:bg-gray-50">Super Admin</button>
      <div class="bg-gray-20 h-px"></div>
      <button @click="logout" class="px-4 py-3 w-full text-sm text-red-500 text-left hover:bg-red-50">Logout</button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const showMenu = ref(false);

const changeShowMenu = () => {
  showMenu.value = false
}

const logout = () => {

  return navigateTo('/login')
}
</script>
  