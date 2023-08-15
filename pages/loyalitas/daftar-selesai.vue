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
    name: "Daftar Selesai",
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
const currentPage = ref("daftar-selesai");

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


const showDataPegawaiModal = ref(false);
const showRiwayatStatusModal = ref(false);

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

</script>

<template>
  <section>
    <template v-if="currentPage === 'daftar-selesai'">
      <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
        <Breadcrumb :items="breadcrumb" />
        <div class="flex justify-between mt-7">
          <div class="flex flex-col gap-4 pt-1">
            <h1 class="text-3xl text-gray-900 font-bold font-lora">
              Daftar Selesai
            </h1>
            <p class="text-gray-700 font-roboto w-2/3">
              Data yang selesai di validasi aparatur sipil negara Pemerintah Provinsi Jawa barat
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
      <div class="mt-8 flex flex-col gap-4">
        <button class="bg-green hover:bg-green-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold w-max ml-auto">
          Export ke Excel
        </button>
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0">
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
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
                <button @click="openRiwayatStatusModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Riwayat.svg" alt="" class="w-5 h-5 mr-2">
                </button>
                <button @click="openDataPegawaiModal(i)" class="text-sm text-blue-600 font-bold underline">
                  <img src="/images/svg/Detail.svg" alt="" class="w-5 h-5 mr-2">
                </button>
              </td>
            </tr>
          </tbody>
          <ModalDataPegawai v-if="modalIndex !== -1" :show="showDataPegawaiModal" :title="modalTitle" @close="showDataPegawaiModal = false" @submit="handleSubmitModal" :data="pendaftar[modalIndex]" />
          <ModalRiwayatStatus :show="showRiwayatStatusModal" :title="modalTitle" @close="closeModal" :data="pendaftar[modalIndex]" />
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </template>
  </section>
</template>
