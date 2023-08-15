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
  nama: "Maman Nugroho ST, MA",
  nip: "1995478953365",
  perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
  jabatan: "Guru Ahli Pertama",
  usia: "29 Tahun",
  tgl_pensiun: "10 Mei 2023",
  sisa_masa: "30 Tahun",
  hukdis: "-",
  aksi: "0",
  link: "maman-nugroho",
  gelar_depan: "-",
  gelar_belakang: "S.Pd",
  tempat_lahir: "Tasikmalaya",
  tanggal_lahir: "1995-11-10",
  sk_cpns: "-",
  tmt_cpns: "1990-03-01",
  gol_ruang: "Pembina TK.I (IV/b)",
  tmt_gol: "2015-10-01",
  pendidikan_terakhir: "S1",
  tmt_pangkat: "2015-10-01",
  tmt_jabatan: "2022-03-11",
  jenis_hukuman: "-",
  sk_hukuman: "-",
  tmt_akhir: "-",
  sk_cltn: "-",
  tmt_berakhir: "-",
  masa_kerja: "33 Tahun 4 Bulan",
  slks_usul: "-",
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
          <label for="nip" class="block mb-2">NIP</label>
          <FormTextAreaDisabled v-model="data.nip" :rows="1" name="nip" id="nip" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nama" class="block mb-2">Nama Lengkap</label>
          <FormTextAreaDisabled v-model="data.nama" :rows="1" name="nama" id="nama" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="gelardpn" class="block mb-2">Gelar Depan</label>
          <FormTextAreaDisabled v-model="data.gelar_depan" :rows="1" name="gelardpn" id="gelardpn" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="gelarblkng" class="block mb-2">Gelar Belakang</label>
          <FormTextAreaDisabled v-model="data.gelar_belakang" :rows="1" name="glrblkng" id="glrblkng" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tempatlahir" class="block mb-2">Tempat Lahir</label>
          <FormTextAreaDisabled v-model="data.tempat_lahir" :rows="1" name="tempatlahir" id="tempatlahir" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tgllahir" class="block mb-2">Tanggal Lahir</label>
          <FormTextAreaDisabled v-model="data.tanggal_lahir" :rows="1" name="tgllahir" id="tgllahir" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="jenis" class="block mb-2">Jenis Kelamin</label>
          <div class="flex items-center">
            <input type="radio" id="male" value="Laki-laki" v-model="selectedGender" name="gender" class="mr-2" />
            <span>Laki-laki</span>
            <input type="radio" id="female" value="Perempuan" v-model="selectedGender" name="gender" class="ml-4 mr-2" />
            <span>Perempuan</span>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="skcpns" class="block mb-2">Nomor SK CPNS</label>
          <FormTextAreaDisabled v-model="data.sk_cpns" :rows="1" name="skcpns" id="skcpns" readonly />
          <p style="color: red; font-size: 11px;">Nomor SK CPNS belum tersedia, silahkan update di SIAP Jabar</p>
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtcpns" class="block mb-2">TMT CPNS</label>
          <FormTextAreaDisabled v-model="data.tmt_cpns" :rows="1" name="tmtcpns" id="tmtcpns" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="golruang" class="block mb-2">Gol Ruang</label>
          <FormTextAreaDisabled v-model="data.gol_ruang" :rows="1" name="golruang" id="golruang" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtruang" class="block mb-2">TMT Gol Ruang</label>
          <FormTextAreaDisabled v-model="data.gol_ruang" :rows="1" name="tmtruang" id="tmtruang" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="pendidikan" class="block mb-2">Pendidikan Terakhir</label>
          <FormTextAreaDisabled v-model="data.pendidikan_terakhir" :rows="1" name="pendidikan" id="pendidikan" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtpangkat" class="block mb-2">TMT Jabatan</label>
          <FormTextAreaDisabled v-model="data.tmt_jabatan" :rows="1" name="tmtpangkat" id="tmtpangkat" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="jabatan" class="block mb-2">Jabatan</label>
          <FormTextAreaDisabled v-model="data.jabatan" :rows="1" name="jabatan" id="jabatan" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtjabatan" class="block mb-2">Jenis Hukuman</label>
          <FormTextAreaDisabled v-model="data.jenis_hukuman" :rows="1" name="tmtjabatan" id="tmtjabatan" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="jenishukuman" class="block mb-2">Nomor SK Jenis Hukuman</label>
          <FormTextAreaDisabled v-model="data.sk_hukuman" :rows="1" name="jenishukuman" id="jenishukuman" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nomorsk" class="block mb-2">TMT Berakhirnya Hukuman Disiplin</label>
          <FormTextAreaDisabled v-model="data.tmt_akhir" :rows="1" name="nomorsk" id="nomorsk" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtakhir" class="block mb-2">Nomor SK CLTN</label>
          <FormTextAreaDisabled v-model="data.sk_cltn" :rows="1" name="tmtakhir" id="tmtakhir" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nomorskcltn" class="block mb-2">TMT Berakhir CLTN</label>
          <FormTextAreaDisabled v-model="data.tmt_berakhir" :rows="1" name="nomorskcltn" id="nomorskcltn" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtakhircltn" class="block mb-2">Masa Kerja</label>
          <FormTextAreaDisabled v-model="data.masa_kerja" :rows="1" name="tmtakhircltn" id="tmtakhircltn" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="masakerja" class="block mb-2">SLKS Yang Diusulkan</label>
          <FormTextAreaDisabled v-model="data.slks_usul" :rows="1" name="masakerja" id="masakerja" readonly />
        </div>
      </div>
      
    </div>

    <div class="flex justify-end">
      <button @click="closeModal" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tutup</button>
    </div>
  </ModalBaseDetail>
</template>