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
  checked: boolean;
  sk_cltn: string;
  cltn_tmt: string;
  tgl_pengangkatan: string;
};

type DataPegawai = {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
};

const breadcrumb = ref([]);

function updateBreadcrumb(title) {
  breadcrumb.value = [
    {
      name: 'Beranda',
      to: '/',
    },
    {
      name: title,
      to: '',
    },
  ];
}

const showFilter = ref(false);
const filter = ref({
  tahun: "",
  tipe_pendaftar: "",
  tipe_pns: "",
  kategori: "",
  sisa_masa: "",
});
const currentPage = ref("usulan-pembekalan");

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
    aksi: "Lihat Detail",
    link: "maman-nugroho",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/kamila-anggraeni",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/dayat-junaedi",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/amira-natasya",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/karina-oktarani",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/randi-oktovian",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/rani-dwi",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/indriyani-nurjannah",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/fajar-budi",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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
    aksi: "Lihat Detail",
    link: "/amina-eva",
    checked: false,
    sk_cltn: "-",
    cltn_tmt: "10 Mei 2023",
    tgl_pengangkatan: "10 Mei 2023"
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

const tanggal_1 = ref("");
const tanggal_2 = ref("");

const selectedComponent = ref("usulan");

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

const selectedComponentData = computed(() => {
  if (selectedComponent.value === 'usulan') {
    return {
      title: 'Usulan Loyalitas',
      description: 'Data usulan loyalitas aparatur sipil negara Pemerintah Provinsi Jawa barat',
    };
  } else if (selectedComponent.value === 'hukdis') {
    return {
      title: 'Hukdis / CLTN',
      description: 'Data hukdis / CLTN usulan loyalitas aparatur sipil negara Pemerintah Provinsi Jawa barat',
    };
  } else if (selectedComponent.value === 'persyaratan') {
    return {
      title: 'Persyaratan',
      description: 'Persyaratan usulan loyalitas aparatur sipil negara Pemerintah Provinsi Jawa barat',
    };
  }
});

const modalTitle = ref("Data Diri Pegawai");
const modalIndex = ref(-1);


const closeModal = () => {
  modalIndex.value = -1;
  showRiwayatStatusModal.value = false;
  showPengusulanLoyalitasModal.value = false;
};


const showDataPegawaiModal = ref(false);
const showRiwayatStatusModal = ref(false);
const showPengusulanLoyalitasModal = ref(false);


const openDataPegawaiModal = (index: number) => {
  modalTitle.value = "Data Diri Pegawai";
  modalIndex.value = index;
  showDataPegawaiModal.value = true;
};

const openRiwayatStatusModal = (index: number) => {
  modalTitle.value = "Riwayat Status (1961234567890 - Maman Nugroho)";
  modalIndex.value = index;
  showRiwayatStatusModal.value = true;
};

const openPengusulanLoyalitasModal = (index: number) => {
  modalTitle.value = "Form Pengusulan Loyalitas";
  modalIndex.value = index;
  showPengusulanLoyalitasModal.value = true;
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
    <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
      <Breadcrumb :items="breadcrumb" />
      <div class="flex justify-between mt-7">
        <div class="flex flex-col gap-4 pt-1">
          <h1 class="text-3xl text-gray-900 font-bold font-lora">
            {{ selectedComponentData.title }}
          </h1>
          <p class="text-gray-700 font-roboto w-2/3">
            {{ selectedComponentData.description }}
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
                  <FormVueSelect v-model:modelValue="filter.tahun" class="input-select" label="Perangkat Daerah" :options="[
                    'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut',
                    'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut',
                    'Dinas Pendidikan SMAN 7 Garut Kabupaten Garut',
                  ]" />
                </div>
                <div class="flex flex-row gap-4">
                  <div class="flex flex-col gap-1">
                    <label for="tipe_pendaftar_1" class="label">Periode Pensiun</label>
                    <FormDatePicker v-model:modelValue="tanggal_1" required class="input-select" />
                  </div>
                  <div class="flex items-center mt-6">s/d</div>
                  <div class="flex flex-col gap-1 mt-7">
                    <FormDatePicker v-model:modelValue="tanggal_2" required class="input-select" />
                  </div>
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
            </div>
          </div>
        </div>
        <img src="/images/illustrasi.png" alt="illustrasi" />
      </div>
    </div>
    <div class="mt-5">
      <nav class="flex flex-col sm:flex-row">
        <button :class="[
          'text-gray-600 py-2 px-6 block hover:text-green-600 focus:outline-none font-bold',
          {
            'text-green-600 border-b-2 border-green-600': selectedComponent === 'usulan',
          },
        ]" @click="showComponent('usulan'); resetNilai(); updateBreadcrumb('Usulan Pembekalan')">
          Buat Usulan
        </button>
        <button :class="[
          'text-gray-600 py-4 px-6 block hover:text-green-600 focus:outline-none',
          {
            'text-green-600 border-b-2 border-green-600': selectedComponent === 'hukdis',
          },
        ]" @click="showComponent('hukdis'); resetNilai(); updateBreadcrumb('Hukdis / CLTN')">
          Hukdis / CLTN
        </button>
        <button :class="[
          'text-gray-600 py-4 px-6 block hover:text-green-600 focus:outline-none',
          {
            'text-green-600 border-b-2 border-green-600': selectedComponent === 'persyaratan',
          },
        ]" @click="showComponent('persyaratan'); resetNilai(); updateBreadcrumb('Persyaratan')">
          Persyaratan
        </button>
      </nav>
    </div>
    <div v-if="selectedComponent === 'usulan'">
      <div class="mt-5 flex flex-col gap-4">
        <div class="flex items-center">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 ml-2" v-model="selectAllChecked" @change="handleSelectAll" />
            <span class="ml-3">Tandai Semua</span>
          </label>
          <button class="bg-green hover:bg-green-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-auto">
            Export ke Excel
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-2">
            Submit Usulan
          </button>
        </div>
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0">
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">Tandai</th>
              <th scope="col" class="px-2 py-2.5">No</th>
              <th scope="col" class="px-2 py-2.5">Nama</th>
              <th scope="col" class="px-2 py-2.5">NIP</th>
              <th scope="col" class="px-2 py-2.5">Perangkat Daerah</th>
              <th scope="col" class="px-2 py-2.5">Jabatan</th>
              <th scope="col" class="px-2 py-2.5">Tgl Pengangkatan</th>
              <th scope="col" class="px-2 py-2.5">Usia</th>
              <th scope="col" class="px-2 py-2.5">Tgl Pensiun</th>
              <th scope="col" class="px-2 py-2.5">Sisa Masa Kerja</th>
              <th scope="col" class="px-2 py-2.5">Hukdis</th>
              <th scope="col" class="px-2 py-2.5">Aksi</th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-50">
            <tr v-for="(item, i) in pendaftar" :key="i" class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg">
              <td class="px-2 py-2.5"><input type="checkbox" class="form-checkbox h-5 w-5 text-green-500" v-model="item.checked" /></td>
              <td class="px-2 py-2.5">{{ i + 1 }}</td>
              <td class="px-2 py-2.5">{{ item.nama }}</td>
              <td class="px-2 py-2.5">{{ item.nip }}</td>
              <td class="px-2 py-2.5">{{ item.perangkat_daerah }}</td>
              <td class="px-2 py-2.5">{{ item.jabatan }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pengangkatan }}</td>
              <td class="px-2 py-2.5">{{ item.usia }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pensiun }}</td>
              <td class="px-2 py-2.5">{{ item.sisa_masa }}</td>
              <td class="px-2 py-2.5">{{ item.hukdis }}</td>
              <td class="px-2 py-2.5">
                <button @click="openDataPegawaiModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Detail.svg" alt="" class="w-5 h-5 mr-2">
                </button>
                <button @click="openRiwayatStatusModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Riwayat.svg" alt="" class="w-5 h-5 mr-2">
                </button>
              </td>
            </tr>
          </tbody>
          <ModalDataPegawai v-if="modalIndex !== -1" :show="showDataPegawaiModal" :title="modalTitle" @close="showDataPegawaiModal = false" />
          <ModalRiwayatStatus :show="showRiwayatStatusModal" :title="modalTitle" @close="closeModal" :data="pendaftar[modalIndex]" />
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </div>
    <div v-if="selectedComponent === 'hukdis'">
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
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0">
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">Status</th>
              <th scope="col" class="px-2 py-2.5">No</th>
              <th scope="col" class="px-2 py-2.5">Nama</th>
              <th scope="col" class="px-2 py-2.5">NIP</th>
              <th scope="col" class="px-2 py-2.5">Hukdis</th>
              <th scope="col" class="px-2 py-2.5">No SK CLTN</th>
              <th scope="col" class="px-2 py-2.5">CLTN TMT</th>
              <th scope="col" class="px-2 py-2.5">Perangkat Daerah</th>
              <th scope="col" class="px-2 py-2.5">Jabatan</th>
              <th scope="col" class="px-2 py-2.5">Usia</th>
              <th scope="col" class="px-2 py-2.5">Tgl Pensiun</th>
              <th scope="col" class="px-2 py-2.5">Sisa Masa Kerja</th>
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
              <td class="px-2 py-2.5">{{ item.hukdis }}</td>
              <td class="px-2 py-2.5">{{ item.sk_cltn }}</td>
              <td class="px-2 py-2.5">{{ item.cltn_tmt }}</td>
              <td class="px-2 py-2.5">{{ item.perangkat_daerah }}</td>
              <td class="px-2 py-2.5">{{ item.jabatan }}</td>
              <td class="px-2 py-2.5">{{ item.usia }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pensiun }}</td>
              <td class="px-2 py-2.5">{{ item.sisa_masa }}</td>
              <td class="px-2 py-2.5">
                <button @click="openDataPegawaiModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Edit.svg" alt="" class="w-5 h-5 mr-2">
                </button>
                <button @click="openRiwayatStatusModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Riwayat.svg" alt="" class="w-5 h-5 mr-2">
                </button>
              </td>
            </tr>
          </tbody>
          <ModalDataPegawai v-if="modalIndex !== -1" :show="showDataPegawaiModal" :title="modalTitle" @close="showDataPegawaiModal = false" />
          <ModalRiwayatStatus :show="showRiwayatStatusModal" :title="modalTitle" @close="closeModal" :data="pendaftar[modalIndex]" />
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </div>
    <div v-if="selectedComponent === 'persyaratan'">
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
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0">
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">Status</th>
              <th scope="col" class="px-2 py-2.5">No</th>
              <th scope="col" class="px-2 py-2.5">Nama</th>
              <th scope="col" class="px-2 py-2.5">NIP</th>
              <th scope="col" class="px-2 py-2.5">Perangkat Daerah</th>
              <th scope="col" class="px-2 py-2.5">Jabatan</th>
              <th scope="col" class="px-2 py-2.5">Tanggal Pengangkatan</th>
              <th scope="col" class="px-2 py-2.5">Usia</th>
              <th scope="col" class="px-2 py-2.5">Tgl Pensiun</th>
              <th scope="col" class="px-2 py-2.5">Sisa Masa Kerja</th>
              <th scope="col" class="px-2 py-2.5">Hukdis</th>
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
              <td class="px-2 py-2.5">{{ item.jabatan }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pengangkatan }}</td>
              <td class="px-2 py-2.5">{{ item.usia }}</td>
              <td class="px-2 py-2.5">{{ item.tgl_pensiun }}</td>
              <td class="px-2 py-2.5">{{ item.sisa_masa }}</td>
              <td class="px-2 py-2.5">{{ item.hukdis }}</td>
              <td class="px-2 py-2.5">
                <button @click="openPengusulanLoyalitasModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Edit.svg" alt="" class="w-5 h-5 mr-2">
                </button>
                <button @click="openRiwayatStatusModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Riwayat.svg" alt="" class="w-5 h-5 mr-2">
                </button>
              </td>
            </tr>
          </tbody>
          <ModalPengusulanLoyalitas v-if="modalIndex !== -1" :show="showPengusulanLoyalitasModal" :title="modalTitle" @close="showPengusulanLoyalitasModal = false" />
          <ModalRiwayatStatus :show="showRiwayatStatusModal" :title="modalTitle" @close="closeModal" :data="pendaftar[modalIndex]" />
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </div>
  </section>
</template>
