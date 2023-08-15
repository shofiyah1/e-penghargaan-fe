<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';
import ModalBaseDetail from './BaseDetail.vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const listTimeline = ref([
  {
    nama: 'MENUNGGU APPROVE OPA',
    tanggal: '2023-06-14 07:37:22'
  },
  {
    nama: 'APPROVE DISIPLIN',
    tanggal: '2023-06-14 07:37:22'
  },
  {
    nama: 'MENUNGGU APPROVE DISIPLIN',
    tanggal: '2023-06-14 07:37:22'
  },
  {
    nama: 'SUBMIT USULAN',
    tanggal: '2023-06-14 07:37:22'
  },
])


const emit = defineEmits(['close', 'submit']);

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <ModalBaseDetail :is-open="show" :title="title" @close="closeModal">
    <div class="timeline mt-2">
      <div class="timeline-item" v-for="(item, index) in listTimeline" :key="item.nomor">
        <div class="timeline-column">
          <div class="timeline-image" v-if="index === 0">
            <img src="/images/svg/Circle.svg" alt="Image 1" />
          </div>
          <div class="timeline-image" v-else-if="index > 0 && index <= 3">
            <img src="/images/svg/Circle2.svg" alt="Image 2" />
          </div>
          <div class="vertical-line mt-2" v-if="index < 3"></div>
        </div>
        <div class="timeline-column">
          <div :class="{ 'timeline-label': true, 'text-green-500 font-bold': index === 0, 'text-black': index > 0 }">
            {{ item.nama }}
          </div>
          <div class="text-gray-700">{{ item.tanggal }}</div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button @click="closeModal" class="bg-green-500 text-white px-4 py-2 rounded-lg">Tutup</button>
    </div>
  </ModalBaseDetail>
</template>

<style>
.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
  margin-bottom: 30px;
}

.timeline-column {
  display: flex;
  flex-direction: column;
  position: relative; 
}

.timeline-circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #069550;
  color: #E0E0E0;

}

.vertical-line {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background-color: #E0E0E0;
}
</style>