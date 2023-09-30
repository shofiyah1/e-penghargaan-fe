<script setup lang="ts">
type IPendaftar = {
  nama: string;
  nip: string;
  perangkat_daerah: string;
  jabatan: string;
  unit_kerja: string;
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
    name: "Buat Usulan KPLB",
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
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Kamila Anggraeni S.Psi",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Dayat Junaedi S.Sos",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Amira Natasya  S.Pd",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Karina Oktarani M.Si",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Randi Oktovian S.Pd",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Rani Dwi Septiani S.Sos",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Indriyani Nurjannah SP.d",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Fajar Budi Pratama S.Kom",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
  },
  {
    nama: "Amina Eva Putri S.Psi",
    nip: "1995478953365",
    perangkat_daerah: "Dinas Pendidikan SMAN 7 Garut Kabupaten Garut",
    jabatan: "Guru Ahli Pertama",
    unit_kerja:"SMKN 1 Bojonggenteng Kabupaten Sukabumi",
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

const modalTitle = ref("Form Usulan Tim KPLB");
const modalIndex = ref(-1);


const closeModal = () => {
  modalTitle.value = "Form Usulan Tim KPLB";
  modalIndex.value = -1;
};


const showFormatUsulanModal = ref(false);

const openFormatUsulanModal = (index: number) => {
  modalTitle.value = "Form Usulan Tim KPLB";
  modalIndex.value = index;
  showFormatUsulanModal.value = true;
};

const selectAllChecked = ref(false);

function handleSelectAll() {
  pendaftar.forEach((item) => (item.checked = selectAllChecked.value));
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
              Buat Usulan KPLB
            </h1>
            <p class="text-gray-700 font-roboto w-2/3">
              Data usulan KPLB aparatur sipil negara Pemerintah Provinsi Jawa Barat
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
                <button @click="showFilter = false" class="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center gap-2 ml-3">
                  <p class="text-sm text-gray-700">Perangkat Daerah:</p>
                  <FormVueSelectRank v-model:modelValue="rankedby.rank" class="input-ranked" :options="['Badan Pengelolaan Keuangan', 'Sisa Masa Kerja, Masa Kerja']" />
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
            <span class="ml-3">Tandai Semua</span>
          </label>
          <button class="bg-green hover:bg-green-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-auto">
            Export ke Excel
          </button>
          <button @click="openFormatUsulanModal(i)" class="bg-blue-500 hover:bg-blue-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold ml-2">
            Download Format Usulan
          </button>
          <ModalFormatUsulan v-if="modalIndex !== -1" :show="showFormatUsulanModal" :title="modalTitle" @close="showFormatUsulanModal = false" @submit="handleSubmitModal" :data="pendaftar[modalIndex]" />
        </div>
        <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0" style="table-layout: auto">
          <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">Tandai</th>
              <th scope="col" class="px-2 py-2.5">No</th>
              <th scope="col" class="px-2 py-2.5">Nama</th>
              <th scope="col" class="px-2 py-2.5">NIP</th>
              <th scope="col" class="px-2 py-2.5">Jabatan</th>
              <th scope="col" class="px-2 py-2.5">Perangkat Daerah</th>
              <th scope="col" class="px-2 py-2.5">Unit Kerja</th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-50">
            <tr v-for="(item, i) in pendaftar" :key="i" class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg">
              <td class="px-2 py-2.5"><input type="checkbox" class="form-checkbox h-5 w-5 text-green-500" v-model="item.checked" /></td>
              <td class="px-2 py-2.5">{{ i + 1 }}</td>
              <td class="px-2 py-2.5">{{ item.nama }}</td>
              <td class="px-2 py-2.5">{{ item.nip }}</td>
              <td class="px-2 py-2.5">{{ item.jabatan }}</td>
              <td class="px-2 py-2.5">{{ item.perangkat_daerah }}</td>
              <td class="px-2 py-2.5">{{ item.unit_kerja }}</td>
            </tr>
          </tbody>
        </table>
        <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
      </div>
    </template>
  </section>
</template>
