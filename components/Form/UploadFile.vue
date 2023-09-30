<template>
  <div class="flex items-center">
    <div class="flex-grow">
      <div class="mt-4 p-2 border-2 border-solid border-gray-300 rounded-md transition duration-300 flex items-center">
        <label for="fileInput" class="cursor-pointer flex-grow">
          <span v-if="file">Berkas Terpilih: {{ file.name }}</span>
          <span v-else>Pilih Berkas</span>
          <input id="fileInput" type="file" class="hidden" @change="handleFileChange" />
        </label>
      </div>
    </div>
    <button class="ml-2 px-4 py-2 bg-gray-200 text-black rounded cursor-pointer" @click="openFileInput" style="height: 43px; margin-top: 15px; margin-left: -4px;">
      Browse
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const file = ref(null);

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  file.value = selectedFile;
};

const openFileInput = () => {
  const fileInput = document.getElementById('fileInput');
  if (fileInput) {
    fileInput.click();
  }
};

const isUbahBerkasMode = ref(false);
</script>

<style scoped>
/* Gunakan kelas Tailwind CSS di sini sesuai kebutuhan */
</style>
