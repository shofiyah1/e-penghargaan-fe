<script setup lang="ts">
type IPendaftar = {
  tanggal: Date;
  deskripsi: string;
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
    name: "Timeline",
    to: "",
  },
]);

const showFilter = ref(false);
const filter = ref({
  tahun: "",
  tipe_pendaftar: "",
  tipe_pns: "",
  kategori: "",
  instansi: "",
});

const currentPage = ref("pns-berprestasi");

const formatDate = (date) => {
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return formattedDate;
};

const pendaftar = reactive<IPendaftar[]>([
  {
    tanggal: new Date("2023-06-30"),
    deskripsi: "Penutupan Pendaftaran Seleksi PNS Berprestasi Tahun 2023",
  },
  {
    tanggal: new Date("2023-05-08"),
    deskripsi: "Pembukaan Pendaftaran Seleksi PNS Berprestasi Tahun 2023",
  },
  {
    tanggal: new Date("2023-05-04"),
    deskripsi: "Sosialisasi Seleksi Penghargaan PNS Berprestasi Tahun 2023",
  },
  {
    tanggal: new Date("2023-05-02"),
    deskripsi: "Sosialisasi Seleksi Penghargaan PNS Berprestasi Tahun 2023",
  },
  {
    tanggal: new Date("2023-05-01"),
    deskripsi: "Sosialisasi Seleksi Penghargaan PNS Berprestasi Tahun 2023",
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

const modalTitle = ref("Tambah Timeline");
const modalTanggal = ref<Date | null>(null);
const modalDeskripsi = ref<string>('');
const modalIndex = ref(-1);

const editItem = (index: number) => {
  modalIndex.value = index;
  modalTitle.value = "Edit Timeline";
  modalTanggal.value = pendaftar[index].tanggal;
  modalDeskripsi.value = pendaftar[index].deskripsi;
  showTambahTimelineModal.value = true;
};

const handleSubmitModal = (tanggal: Date, deskripsi: string) => {
  if (modalIndex.value === -1) {
    addTimeline(tanggal, deskripsi);
  } else {
    pendaftar[modalIndex.value].tanggal = tanggal;
    pendaftar[modalIndex.value].deskripsi = deskripsi;
  }
  closeModal();
};

const closeModal = () => {
  modalTitle.value = "Tambah Timeline";
  modalTanggal.value = "";
  modalDeskripsi.value = "";
  modalIndex.value = -1;
};

const deleteItem = (index: number) => {
  pendaftar.splice(index, 1);
};

const showTambahTimelineModal = ref(false);

const addTimeline = (tanggal, deskripsi) => {
  pendaftar.push({ tanggal: new Date(tanggal), deskripsi });
};

</script>

<template>
  <section>
    <template v-if="currentPage === 'pns-berprestasi'">
      <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
        <Breadcrumb :items="breadcrumb" />
        <div class="flex justify-between mt-7">
          <div class="flex flex-col gap-4 pt-1">
            <h1 class="text-3xl text-gray-900 font-bold font-lora">Timeline</h1>
            <p class="text-gray-700 font-roboto w-2/3">
              Data timeline aparatur sipil negara Pemerintah Provinsi Jawa barat
            </p>
            <div class="flex gap-4">
              <div
                class="relative border border-gray-500 rounded-lg w-[260px] lg:w-max"
              >
                <input
                  class="rounded-lg outline-none pl-3 h-10 w-60 text-sm placeholder-gray-600"
                  type="text"
                  placeholder="Cari nama, nip..."
                />
                <button
                  class="bg-green-700 hover:bg-green-600 rounded-lg p-2 h-10 absolute top-0 right-0"
                >
                  <img src="/images/svg/Cari.svg" alt="" />
                </button>
              </div>
              <div class="w-px bg-gray-300 my-0.5"></div>
              <div class="relative flex">
                <div class="relative flex">
                  <button
                    @click="showTambahTimelineModal = true"
                    class="text-sm bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Tambah Timeline
                  </button>
                </div>
                <LazyModalTimeline
                  :show="showTambahTimelineModal"
                  :title="modalTitle"
                  :tanggal="modalTanggal"
                  :deskripsi="modalDeskripsi"
                  @close="showTambahTimelineModal = false"
                  @submit="handleSubmitModal"
                />
              </div>
            </div>
          </div>
          <img src="/images/illustrasi.png" alt="illustrasi" />
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-4">
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
            style="table-layout: auto"
          >
            <colgroup>
              <col style="width: 1%" />
              <col style="width: 1%" />
              <col style="width: 34%" />
              <col style="width: 4%" />
            </colgroup>
            <thead
              class="text-sm text-white font-bold font-roboto capitalize bg-green"
            >
              <tr class="[&>*]:border-b">
                <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
                <th scope="col" class="px-2 py-2.5">Tanggal</th>
                <th scope="col" class="px-2 py-2.5">Deskripsi</th>
                <th scope="col" class="px-2 py-2.5">Aksi</th>
              </tr>
            </thead>
            <tbody class="[&>*:nth-child(even)]:bg-gray-50">
              <tr
                v-for="(item, i) in pendaftar"
                :key="i"
                class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg"
              >
                <td class="px-2 py-2.5">{{ i + 1 }}</td>
                <td class="px-2 py-2.5">{{ formatDate(item.tanggal) }}</td>
                <td class="px-2 py-2.5">{{ item.deskripsi }}</td>
                <td class="px-2 py-2.5">
                  <button
                    @click="editItem(i)"
                    class="ml-2 text-gray-600 hover:text-gray-900 bg-blue-50"
                  >
                    <Icon name="material-symbols:edit-outline" class="text-xl" />
                  </button>
                  <button
                    @click="deleteItem(i)"
                    class="ml-2 text-red-600 hover:text-red-900 bg-red-200"
                  >
                    <Icon name="ic:outline-delete" class="text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination
          :per-page="dataPegawai.per_page"
          :total="dataPegawai.total"
          :current-page="dataPegawai.current_page"
          :last-page="dataPegawai.last_page"
          @update:per-page="(val: any) => dataPegawai.per_page = val"
          @update:current-page="(val: any) => dataPegawai.current_page = val"
        />
      </div>
    </template>
  </section>
</template>
