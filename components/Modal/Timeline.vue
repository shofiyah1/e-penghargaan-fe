<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';
import ModalBase from './Base.vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    default: "",
  },
  deskripsi: {
    type: String,
    default: "",
  },
});

const tanggal = ref('');
const deskripsi = ref('');

const emit = defineEmits(['close', 'submit']);

const closeModal = () => {
  emit('close');
  tanggal.value = '';
  deskripsi.value = '';
};

const handleSubmit = (event) => {
  event.preventDefault();
  emit('submit', tanggal.value, deskripsi.value);
  closeModal();
};

watch(
  () => props.show,
  (newValue, oldValue) => {
    if (newValue) {
      tanggal.value = props.tanggal;
      deskripsi.value = props.deskripsi;
    } else {
      tanggal.value = '';
      deskripsi.value = '';
    }
  }
);
</script>

<template>
 <ModalBase :is-open="show" :title="title" @close="closeModal" @submit="handleSubmit">
    <form @submit="handleSubmit">
      <div class="mb-4">
        <label for="tanggal" class="block mb-2">Tanggal</label>
        <FormDatePicker v-model:modelValue="tanggal" required />
      </div>
      <div class="mb-4">
        <label for="deskripsi" class="block  mb-2">Deskripsi</label>
        <FormTextArea v-model:modelValue="deskripsi" :label="textModal" :rows="6" placeholder="Isilah deskripsi dengan singkat, padat, dan jelas." name="deskripsi" id="deskripsi" />
      </div>
      <div class="flex justify-end">
        <button type="button" @click="closeModal" class="bg-white hover:bg-green-50 border border-green-700 rounded-lg py-2.5 px-4 text-center text-green-700 transition-colors duration-300 font-bold text-sm mr-3 mt-4">Batalkan</button>
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Simpan</button>
      </div>
    </form>
  </ModalBase>
</template>