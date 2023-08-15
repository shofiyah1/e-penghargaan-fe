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

const selectedComponent = ref("datadiri");

function showComponent(componentName) {
  selectedComponent.value = componentName;
}

type Inilaitupoksi = {
  nilai: number | null;
};

const nilaituponiaksi = reactive<Inilaitupoksi[]>([
  {
    nilai: null,
  },
]);

const resetNilai = () => {
  nilaituponiaksi.forEach((item) => {
    item.nilai = null;
  });
};

type pembekalan = {
  nama: string,
}

const pembekalan = reactive<pembekalan[]>([
  {
    nama: 'Scan Daftar Riwayat Hidup Singkat',
  },
  {
    nama: 'Pas Photo',
  },
  {
    nama: 'Proposal',
  },
])

type loyalitas = {
  nama: string,
}

const loyalitas = reactive<loyalitas[]>([
  {
    nama: 'SK CPNS',
  },
  {
    nama: 'SK PNS',
  },
  {
    nama: 'SK Jabatan Terakhir',
  },
  {
    nama: 'SK Kenaikan Pangkat Terakhir',
  },
  {
    nama: 'SKP Bernilai Baik (Tahun 2021 dan 2022)',
  },
  {
    nama: 'Surat Keterangan Tidak Pernah Dijatuhi Hukuman Disiplin Tingkat',
  },
  {
    nama: 'Surat Pernyataan Tidak Pernah Menjalankan Cuti Di Luar Tanggungan Negara',
  },
  {
    nama: 'Dokumen Hasil Karya (Piagam/Sertifikat selama menjadi PNS)',
  },
  {
    nama: 'Sertifikat Pembekalan',
  },
  {
    nama: 'SK MPP (Apabila Status Pegawai MPP)',
  },


])
</script>

<template>
  <ModalBaseDetail :is-open="show" :title="title" @close="closeModal">
    <div class="">
        <nav class="flex flex-col sm:flex-row">
          <button
            :class="[
              'text-gray-600 py-2 px-6 block hover:text-green-600 focus:outline-none font-bold',
              {
                'text-green-600 border-b-2 border-green-600': selectedComponent === 'datadiri',
              },
            ]"
            @click="showComponent('datadiri'); resetNilai();"
          >
            Data Diri Pegawai
          </button>
          <button
            :class="[
              'text-gray-600 py-4 px-6 block hover:text-green-600 focus:outline-none',
              {
                'text-green-600 border-b-2 border-green-600': selectedComponent === 'berkas',
              },
            ]"
            @click="showComponent('berkas'); resetNilai();"
          >
            Berkas Persyaratan
          </button>
        </nav>
      </div>
    <div v-if="selectedComponent === 'datadiri'">
    <div class="flex gap-4 mt-5">
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
          <label for="tmtpangkat" class="block mb-2">TMT Pangkat</label>
          <FormTextAreaDisabled v-model="data.tmt_pangkat" :rows="1" name="tmtpangkat" id="tmtpangkat" readonly />
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
          <label for="tmtjabatan" class="block mb-2">TMT Jabatan</label>
          <FormTextAreaDisabled v-model="data.tmt_jabatan" :rows="1" name="tmtjabatan" id="tmtjabatan" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="jenishukuman" class="block mb-2">Jenis Hukuman</label>
          <FormTextAreaDisabled v-model="data.jenis_hukuman" :rows="1" name="jenishukuman" id="jenishukuman" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nomorsk" class="block mb-2">Nomor SK Jenis Hukuman</label>
          <FormTextAreaDisabled v-model="data.sk_hukuman" :rows="1" name="nomorsk" id="nomorsk" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtakhir" class="block mb-2">TMT Berakhirnya Hukuman Disiplin</label>
          <FormTextAreaDisabled v-model="data.tmt_akhir" :rows="1" name="tmtakhir" id="tmtakhir" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="nomorskcltn" class="block mb-2">Nomor SK CLTN</label>
          <FormTextAreaDisabled v-model="data.sk_cltn" :rows="1" name="nomorskcltn" id="nomorskcltn" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="tmtakhircltn" class="block mb-2">TMT Berakhir CLTN</label>
          <FormTextAreaDisabled v-model="data.tmt_berakhir" :rows="1" name="tmtakhircltn" id="tmtakhircltn" readonly />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-1/2">
        <div class="mb-4">
          <label for="masakerja" class="block mb-2">Masa Kerja</label>
          <FormTextAreaDisabled v-model="data.masa_kerja" :rows="1" name="masakerja" id="masakerja" readonly />
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <label for="slksusul" class="block mb-2">SLKS Yang Diusulkan</label>
          <FormTextAreaDisabled v-model="data.slks_usul" :rows="1" name="slksusul" id="slksusul" readonly />
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectedComponent === 'berkas'">
    <p class="font-roboto text-xl text-gray-800 font-semibold mt-5">Persyaratan Pembekalan</p>
    <div class="flex flex-col gap-4 mt-5">
      <div v-for="(item, index) in pembekalan" class="bg-white rounded-md p-4 flex w-full h-104 border border-gray-200">
        <div class="flex items-center justify-start">
          <img src="/images/svg/Berkas.svg" alt="Logo" class="h-6 w-6 mr-4">
          <label class="font-roboto text-l font-semibold text-gray-900" style="font-size:13px"> {{ item.nama }}</label>
        </div>
        <div class="flex items-center justify-end flex-grow">
          <button v-if="index !== 2" class="w-auto h-10 border rounded-lg py-2 px-4 text-sm font-bold border-blue text-blue mr-2">Lihat Berkas</button>
          <button v-if="index !== 2" class="bg-red-700 text-white px-2 py-2 rounded-lg">Tolak Berkas</button>
          <button v-if="index === 2" class="bg-green-500 text-white px-2 py-2 rounded-lg">Upload Berkas</button>
        </div>
      </div>
    </div>
    <p class="font-roboto text-xl text-gray-800 font-semibold mt-5">Persyaratan Loyalitas</p>
    <div class="flex flex-col gap-4 mt-5">
      <div v-for="(item, index) in loyalitas" class="bg-white rounded-md p-4 flex w-full h-104 border border-gray-200">
        <div class="flex items-center justify-start">
          <img src="/images/svg/Berkas.svg" alt="Logo" class="h-6 w-6 mr-4">
          <label class="font-roboto font-semibold text-gray-900" style="font-size:13px">{{ item.nama }}</label>
        </div>
        <div class="flex items-center justify-end flex-grow">
          <button v-if="index < 5" class="w-auto h-10 border rounded-lg py-2 px-4 text-sm font-bold border-blue text-blue mr-2">Lihat Berkas</button>
          <button v-if="index < 5" class="bg-red-700 text-white px-2 py-2 rounded-lg">Tolak Berkas</button>
          <button v-if="index >= 5" class="bg-green-500 text-white px-2 py-2 rounded-lg">Upload Berkas</button>
        </div>
      </div>
      <div class="flex justify-between">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Regenerate Berkas</button>
        <button @click="closeModal" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tutup</button>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-end">
    <button @click="closeModal" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tutup</button>
  </div>
  </ModalBaseDetail>
</template>