<script setup lang="ts">
type IPendaftar = {
  nama: string;
  nip: string;
  perangkat_daerah: string;
  jabatan: string;
  usia: string;
  tgl_pensiun: string;
  sisa_masa: string;
  hukdis: string;
  aksi: string;
  link: string;
  gelar_depan: string;
  gelar_belakang: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  sk_cpns: string;
  tmt_cpns: string;
  gol_ruang: string;
  tmt_gol: string;
  pendidikan_terakhir: string;
  tmt_pangkat: string;
  tmt_jabatan: string;
  jenis_hukuman: string;
  sk_hukuman: string;
  tmt_akhir: string;
  sk_cltn: string;
  tmt_berakhir: string;
  masa_kerja: string;
  slks_usul: string;
  tgl_pengangkatan: string;
  cltn_tmt: string;
  kategori_usulan: string;
};

type DataPegawai = {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
};

const breadcrumb = ref([
  {
    name: "Beranda",
    to: "/",
  },
  {
    name: "Verifikasi Pengusulan SLKS",
    to: "",
  },
]);

const showFilter = ref(false);
const filter = ref({
  tahun: "",
  tipe_pendaftar: "",
  tipe_pns: "",
  kategori: "",
  sisa_masa: "",
});

const rankedby = ref({
  rank: "",
});
const currentPage = ref("data-pegawai");

const pendaftar = reactive<IPendaftar[]>([
  {
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Kamila Anggraeni S.Psi",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/kamila-anggraeni",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Dayat Junaedi S.Sos",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/dayat-junaedi",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Amira Natasya  S.Pd",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/amira-natasya",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Karina Oktarani M.Si",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/karina-oktarani",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX"
  },
  {
    nama: "Randi Oktovian S.Pd",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/randi-oktovian",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Rani Dwi Septiani S.Sos",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/rani-dwi",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
  {
    nama: "Indriyani Nurjannah SP.d",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/indriyani-nurjannah",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX"
  },
  {
    nama: "Fajar Budi Pratama S.Kom",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/fajar-budi",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX"
  },
  {
    nama: "Amina Eva Putri S.Psi",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    usia: "29 Tahun",
    tgl_pensiun: "10 Mei 2023",
    sisa_masa: "30 Tahun",
    hukdis: "-",
    aksi: "0",
    link: "/amina-eva",
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
    tgl_pengangkatan: "10 Mei 2023",
    cltn_tmt: "10 Mei 2023",
    kategori_usulan: "SATYALANCANA KARYA SATYA XXX",
  },
]);

const dataPegawai = ref<DataPegawai>({
  current_page: 1,
  per_page: 20,
  total: 100,
  last_page: 10,
});

const navigateToPage = (link: string) => {
  currentPage.value = link;
};

const tanggal_1 = ref('');
const tanggal_2 = ref('');

const modalTitle = ref("Data Diri Pegawai");
const modalIndex = ref(-1);


const closeModal = () => {
  modalTitle.value = "Data Diri Pegawai";
  modalIndex.value = -1;
  showRiwayatStatusModal.value = false;
};


const showFormPengusulanModal = ref(false);
const showRiwayatStatusModal = ref(false);

const openDataPegawaiSLKSModal = (index: number) => {
  modalTitle.value = "Data Diri Pegawai";
  modalIndex.value = index;
  showFormPengusulanModal.value = true;
};

const openRiwayatStatusModal = (index: number) => {
  modalTitle.value = "Riwayat Status (1961234567890 - Maman Nugroho)";
  modalIndex.value = index;
  showRiwayatStatusModal.value = true;
};

const selectAllChecked = ref(false);

function handleSelectAll() {
  pendaftar.forEach((item) => (item.checked = selectAllChecked.value));
}

const imagePaths = {
  check: "/images/svg/Check.svg",
  checks: "/images/svg/Checks.svg",
  close: "/images/svg/Close.svg",
  closes: "/images/svg/Closes.svg"
};

const button1 = reactive({
  currentImage: imagePaths.check,
  isAlternateImage: false
});

const button2 = reactive({
  currentImage: imagePaths.close,
  isAlternateImage: false
});

function toggleImage(button) {
  if (button.isAlternateImage) {
    button.currentImage = button.currentImage === imagePaths.checks ? imagePaths.check : imagePaths.close;
  } else {
    button.currentImage = button.currentImage === imagePaths.check ? imagePaths.checks : imagePaths.closes;
  }
  button.isAlternateImage = !button.isAlternateImage;
}

</script>

<template>
  <section>
    <template v-if="currentPage === 'data-pegawai'">
      <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
        <Breadcrumb :items="breadcrumb" />
        <div class="flex justify-between mt-7">
          <div class="flex flex-col gap-4 pt-1">
            <h1 class="text-3xl text-gray-900 font-bold font-lora">
              Verifikasi Pengusulan SLKS
            </h1>
            <p class="text-gray-700 font-roboto w-2/3">
              Data verifikasi pengusulan SLKS aparatur sipil negara Pemerintah Provinsi Jawa barat
            </p>
            <div class="flex gap-4">
              <div class="relative border border-gray-500 rounded-lg w-[260px] lg:w-max">
                <input class="rounded-lg outline-none pl-3 h-10 w-60 text-sm placeholder-gray-600" type="text" placeholder="Cari nama, nip..." />
                <button class="bg-green-700 hover:bg-green-600 rounded-lg p-2 h-10 absolute top-0 right-0">
                  <img src="/images/svg/Cari.svg" alt="" />
                </button>
              </div>
              <div class="w-px bg-gray-300 my-0.5"></div>
              <div class="relative flex">
                <button @click="showFilter = !showFilter" class="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center gap-2">
                  <p class="text-sm text-gray-900 font-bold">Filter</p>
                  <img src="/images/svg/Filter.svg" alt="" />
                </button>
                <div v-if="showFilter" class="w-96 absolute top-14 bg-white rounded-xl p-4 shadow-md flex flex-col gap-6">
                  <div class="flex flex-col gap-1">
                    <FormVueSelect v-model:modelValue="filter.tahun" class="input-select" label="Perangkat Daerah" :options="['Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut']" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect v-model:modelValue="filter.tahun" class="input-select" label="Kategori SLKS" :options="['Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut']" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect v-model:modelValue="filter.tahun" class="input-select" label="Status SLKS" :options="['Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut', 'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut']" />
                  </div>
                  <div class="flex gap-4">
                    <button @click="showFilter = false" class="bg-white hover:bg-green-50 border border-green rounded-lg w-full py-2.5 text-sm text-green font-bold">
                      Batalkan
                    </button>
                    <button @click="showFilter = false" class="bg-green-700 hover:bg-green-800 rounded-lg w-full py-2.5 text-sm text-white font-bold">
                      Terapkan
                    </button>
                  </div>
                </div>
                <button @click="showFilter = false" class="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center gap-2 ml-3">
                  <p class="text-sm text-gray-700">Ranking by:</p>
                  <FormVueSelectRank v-model:modelValue="rankedby.rank" class="input-ranked" :options="['Masa Kerja, Sisa Masa Kerja', 'Sisa Masa Kerja, Masa Kerja']" />
                </button>
              </div>
            </div>
          </div>
          <img src="/images/illustrasi.png" alt="illustrasi" />
        </div>
      </div>
      <div class="mt-5 flex flex-col gap-4">
        <div class="flex items-center">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 ml-2" v-model="selectAllChecked" @change="handleSelectAll" />
            <span class="ml-3">Approve Semua</span>
          </label>
          <button class="bg-green hover:bg-green-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-auto">
            Export ke Excel
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-2">
            Submit Usulan
          </button>
        </div>
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0" style="table-layout: auto">
          <colgroup>
            <col style="width: 3%" />
            <col style="width: 3%" />
            <col style="width: 8%" />
            <col style="width: 5%" />
            <col style="width: 10%" />
            <col style="width: 6%" />
            <col style="width: 4%" />
            <col style="width: 3%" />
            <col style="width: 5%" />
            <col style="width: 5%" />
            <col style="width: 1%" />
            <col style="width: 7%" />
            <col style="width: 7%" />
            <col style="width: 4%" />
            <col style="width: 3%" />
          </colgroup>
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">Tandai</th>
              <th scope="col" class="px-2 py-2.5">No</th>
              <th scope="col" class="px-2 py-2.5">Nama</th>
              <th scope="col" class="px-2 py-2.5">NIP</th>
              <th scope="col" class="px-2 py-2.5">Perangkat Daerah</th>
              <th scope="col" class="px-2 py-2.5">Tgl Pengangkatan</th>
              <th scope="col" class="px-2 py-2.5">CLTN TMT</th>
              <th scope="col" class="px-2 py-2.5">Usia</th>
              <th scope="col" class="px-2 py-2.5">Masa Kerja</th>
              <th scope="col" class="px-2 py-2.5">Sisa Masa Kerja</th>
              <th scope="col" class="px-2 py-2.5">Hukdis</th>
              <th scope="col" class="px-2 py-2.5">Kategori Usulan</th>
              <th scope="col" class="px-2 py-2.5">Status</th>
              <th scope="col" class="px-2 py-2.5">Berkas</th>
              <th scope="col" class="px-2 py-2.5">Aksi</th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-50">
            <tr v-for="(item, i) in pendaftar" :key="i" class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg">
              <td class="px-2 py-2.5">
                <button @click="toggleImage(button1)">
                  <img :src="button1.currentImage" alt="" class="w-5 h-5 mr-2">
                </button>
                <button @click="toggleImage(button2)">
                  <img :src="button2.currentImage" alt="" class="w-5 h-5 mr-2">
                </button>
              </td>
              <td class="px-2 py-2.5">{{ i + 1 }}</td>
              <td class="px-2 py-2.5">{{ item.nama }}</td>
              <td class="px-2 py-2.5">{{ item.nip }}</td>
              <td class="px-2 py-2.5">{{ item.perangkat_daerah }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pengangkatan }}</td>
              <td class="px-2 py-2.5">{{ item.cltn_tmt }}</td>
              <td class="px-2 py-2.5">{{ item.usia }}</td>
              <td class="px-2 py-2.5">{{ item.masa_kerja }}</td>
              <td class="px-2 py-2.5">{{ item.sisa_masa }}</td>
              <td class="px-2 py-2.5">{{ item.hukdis }}</td>
              <td class="px-2 py-2.5">{{ item.kategori_usulan }}</td>
              <table>
                <tr>
                  <td class="px-2 py-2.5 rounded-lg h-5 flex items-center justify-center bg-green-100 text-green-600 border border-green-150 mt-2" style="display: inline-flex;">
                    Sudah Melengkapi Berkas
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2.5 rounded-lg h-5 flex items-center justify-center bg-blue-100 text-blue-600 border border-blue-150 mt-2" style="display: inline-flex;">
                    Sudah Diperiksa
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2.5 rounded-lg h-5 flex items-center justify-center bg-yellow-100 text-yellow-600 border border-yellow-150 mt-2 mb-2" style="display: inline-flex;">
                    Perbaikan Berkas
                  </td>
                </tr>
              </table>
              <td class="px-2 py-2">
                <a href="#" class="text-sm text-blue-600 font-bold underline"
                  >Unduh DRH</a>
              </td>
              <td class="px-2 py-2.5">
                <button @click="openDataPegawaiSLKSModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Detail.svg" alt="" class="w-5 h-5 mr-2" style="margin-top: -30px;">
                </button>
                <button @click="openRiwayatStatusModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Riwayat.svg" alt="" class="w-5 h-5 mr-2" style="margin-top: -30px;">
                </button>
              </td>
            </tr>
          </tbody>
          <ModalFormPengusulan v-if="modalIndex !== -1" :show="showFormPengusulanModal" :title="modalTitle" @close="showFormPengusulanModal = false" @submit="handleSubmitModal" :data="pendaftar[modalIndex]" />
          <ModalRiwayatStatus :show="showRiwayatStatusModal" :title="modalTitle" @close="closeModal" :data="pendaftar[modalIndex]" />
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </template>
  </section>
</template>
