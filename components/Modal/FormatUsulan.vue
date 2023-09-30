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

const pendaftar = ref({
  nama: "Amira Natasya  S.Sos",
  nip: "1995478953365",
  perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
  jabatan: "Guru Ahli Pertama",
  tahun: "2023",
  tanggal: "01-01-2023",
  nama_penandatangan: "Maman Nugroho S.Kom",
});

const selectedGender = ref('');

const emit = defineEmits(['close', 'submit']);

const closeModal = () => {
  emit('close');
};

const data = reactive(pendaftar.value);

onMounted(() => {
  Object.assign(data, pendaftar.value);
});


</script>

<template>
  <ModalBaseDetail :is-open="show" :title="title" @close="closeModal">
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nip" class="block mb-2">Tahun</label>
          <FormTextArea v-model="data.tahun" :rows="1" name="nip" id="nip" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nama" class="block mb-4">Tanggal</label>
          <FormDatePicker v-model="data.tanggal" required />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="gelardpn" class="block mb-2">NIP</label>
          <FormTextArea v-model="data.nip" :rows="1" name="gelardpn" id="gelardpn" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="gelarblkng" class="block mb-2">Nama</label>
          <FormTextArea v-model="data.nama" :rows="1" name="glrblkng" id="glrblkng" />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tempatlahir" class="block mb-2">Jabatan</label>
          <FormTextArea v-model="data.jabatan" :rows="1" name="tempatlahir" id="tempatlahir" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tgllahir" class="block mb-2">NIP (Penandatangan)</label>
          <FormTextArea v-model="data.nip" :rows="1" name="tgllahir" id="tgllahir" />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtcpns" class="block mb-2">Nama (Penandatangan)</label>
          <FormTextArea v-model="data.nama_penandatangan" :rows="1" name="tmtcpns" id="tmtcpns" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="golruang" class="block mb-2">Jabatan (Penandatangan)</label>
          <FormTextArea v-model="data.jabatan" :rows="1" name="golruang" id="golruang" />
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button @click="closeModal" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tutup</button>
    </div>
  </ModalBaseDetail>
</template>