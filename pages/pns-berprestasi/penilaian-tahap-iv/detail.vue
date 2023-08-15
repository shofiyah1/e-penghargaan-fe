<script setup lang="ts">
type IPendaftar = {
  nama: string;
  jabatan: string;
  nip: string;
  jenis_kelamin: string;
  judul_karya: string;
  tipe_pendaftar: string;
  tipe_pns: string;
  kategori: string;
  instansi: string;
  perangkat_daerah: string;
  tgl_daftar: string;
  keputusan: string;
  visitasi: string;
  status: string;
  aksi: string;
  link: string;
};

type IPenilai = {
  nama_penilai: string;
  catatan: string;
};

type IPertanyaan = {
  pertanyaan: string;
  bobot: string;
  nilai_penilai1: string;
  nilai_penilai2: string;
  nilai_penilai3: string;
  nilai_penilai4: string;
  skor_penilai1: string;
  skor_penilai2: string;
  skor_penilai3: string;
  skor_penilai4: string;
};
const breadcrumb = ref([
  {
    name: "Beranda",
    to: "/",
  },
  {
    name: "Penilaian Tahap IV",
    to: "/",
  },
  {
    name: "Detail Penilaian",
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
const currentPage = ref("data-pendaftar");

const pendaftar = reactive<IPendaftar[]>([
  // {
  //   nama: "Dr. Amira Natasya,  M.Pd",
  //   jabatan: "Pengelola Teknologi Informasi",
  //   nip: "1995478953365",
  //   jenis_kelamin: "Perempuan",
  //   judul_karya: "Bringing Jabar To The Cloud",
  //   tipe_pendaftar: "Mandiri",
  //   tipe_pns: "Provinsi Jawa Barat",
  //   kategori: "Inovatif",
  //   instansi: "Pemerintah Kota Cirebon",
  //   perangkat_daerah: "Dinas Komunikasi dan Infomatika",
  //   tgl_daftar: "10 Mei 2023",
  //   keputusan: "Rekomendasi",
  //   visitasi: "-",
  //   status: "Disetujui",
  //   aksi: "Lihat Detail",
  //   link: "/amira-natasya",
  // },
  {
    nama: "Maman Nugroho ST, MA",
    jabatan: "Pengelola Teknologi Informasi",
    nip: "1995478953365",
    jenis_kelamin: "Laki-Laki",
    judul_karya: "Bringing Jabar To The Cloud",
    tipe_pendaftar: "Mandiri",
    tipe_pns: "Provinsi Jawa Barat",
    kategori: "Inspiratif",
    instansi: "Pemerintah Kota Cirebon",
    perangkat_daerah: "Dinas Komunikasi dan Infomatika",
    tgl_daftar: "10 Mei 2023",
    keputusan: "Rekomendasi",
    visitasi: "-",
    status: "Disetujui",
    aksi: "Lihat Detail",
    link: "/maman-nugroho",
  },
]);

const pertanyaan = reactive<IPertanyaan[]>([
  {
    pertanyaan:
      "Urgensi Karya Nyata Inovatif dalam memecahkan permaslahan dilapangan",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
  {
    pertanyaan: "Unjuk Kerja dari Inovasi (Demo Kerja Inovasi)",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
  {
    pertanyaan: "Tingkat keberlajutan penerapan Inovasi",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
  {
    pertanyaan: "Kelayakan Penerapan Inovasi (Secara Teknis, Ekonomi dan Sosial Kultural)",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
  {
    pertanyaan: "Dukungan dari atasan, Rekan kerja dan Bawahan.",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
  {
    pertanyaan: "Dampak Inovasi dari Penerima Manfaat/Dampak",
    bobot: "10",
    nilai_penilai1: "85",
    nilai_penilai2: "90",
    nilai_penilai3: "93",
    nilai_penilai4: "90",
    skor_penilai1: "8.5",
    skor_penilai2: "9",
    skor_penilai3: "9.3",
    skor_penilai4: "9",
  },
]);

const penilai = reactive<IPenilai[]>([
  {
    nama_penilai: "Prof. Dr. Hj. Nunuy Nur Afiah, S.E.,Ak.,M.Si., C.A.",
    catatan:
      "Inovasi sudah diimplementasikan dan produknya tinggal memperoleh ijin dari pihak yang berwenang",
  },
  {
    nama_penilai: "Dr. Kartib Bayu., Ir., M.Si",
    catatan:
      "Inovasi sudah diimplementasikan dan produknya tinggal memperoleh ijin dari pihak yang berwenang",
  },
  {
    nama_penilai: "Dr. Ferry Hadiyanto, S.E, M.A.",
    catatan:
      "Inovasi sudah diimplementasikan dan produknya tinggal memperoleh ijin dari pihak yang berwenang",
  },
  {
    nama_penilai: "Diding Sakri, ST., MA., Ph.D.",
    catatan:
      "Inovasi sudah diimplementasikan dan produknya tinggal memperoleh ijin dari pihak yang berwenang",
  },
]);

const selectedComponent = ref("penilaian");

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

</script>

<template>
  <section>
    <div v-if="currentPage === 'data-pendaftar'">
      <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
        <Breadcrumb :items="breadcrumb" />
        <div class="flex justify-between mt-7">
          <div class="flex flex-col gap-4 pt-1">
            <h1 class="text-3xl text-gray-900 font-bold font-lora">
              Penilaian Tahap IV
            </h1>
            <p class="text-gray-700 font-roboto w-2/3">
              Data penilaian tahap IV aparatur sipil negara Pemerintah Provinsi
              Jawa barat
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
                <button
                  @click="showFilter = !showFilter"
                  class="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center gap-2"
                >
                  <p class="text-sm text-gray-900 font-bold">Filter</p>
                  <img src="/images/svg/Filter.svg" alt="" />
                </button>
                <div
                  v-if="showFilter"
                  class="w-96 absolute top-14 bg-white rounded-xl p-4 shadow-md flex flex-col gap-6"
                >
                  <div class="flex flex-col gap-1">
                    <FormVueSelect
                      v-model:modelValue="filter.tahun"
                      class="input-select"
                      label="Periode Tahun"
                      :options="['2021', '2022', '2023']"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect
                      v-model:modelValue="filter.tipe_pendaftar"
                      class="input-select"
                      label="Tipe Pendaftar"
                      :options="['Mandiri', 'Usulan']"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect
                      v-model:modelValue="filter.tipe_pns"
                      class="input-select"
                      label="Tipe PNS"
                      :options="['Provinsi Jawa Barat', 'Kabupaten/Kota']"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect
                      v-model:modelValue="filter.kategori"
                      class="input-select"
                      label="Kategori"
                      :options="['Inovatif', 'Inspiratif', 'The Future Leader']"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <FormVueSelect
                      v-model:modelValue="filter.instansi"
                      class="input-select"
                      label="Instansi"
                      :options="['Dinas Pendidikan Kota Bandung']"
                    />
                  </div>
                  <div class="flex gap-4">
                    <button
                      @click="showFilter = false"
                      class="bg-white hover:bg-green-50 border border-green rounded-lg w-full py-2.5 text-sm text-green font-bold"
                    >
                      Batalkan
                    </button>
                    <button
                      @click="showFilter = false"
                      class="bg-green-700 hover:bg-green-800 rounded-lg w-full py-2.5 text-sm text-white font-bold"
                    >
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
        <div class="bg-white border border-gray-300 rounded-lg p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"
            class="rounded"
            style="width: 61px; height: 61px"
            alt="image pegawai"
          />
          <div style="margin-left: 80px; margin-top: -60px">
            <div v-for="(item, i) in pendaftar" :key="i">
              <p class="font-roboto font-bold text-lg">{{ item.nama }}</p>
              <p class="text-sm text-gray-700 mt-2">{{ item.jabatan }}</p>
            </div>
          </div>
          <hr class="border-gray-300 mt-5" />
          <div v-for="(item, i) in pendaftar" :key="i">
            <div class="grid grid-cols-3 gap-4 mt-3">
              <div>
                <h6 class="text-sm text-gray-600 font-bold">NIP</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.nip }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">
                  Jenis Kelamin
                </h6>
                <p class="text-gray-900 font-medium">
                  {{ item.jenis_kelamin }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">
                  Judul Karya
                </h6>
                <p class="text-gray-900 font-medium">
                  {{ item.judul_karya }}
                </p>
              </div>
              <div>
                <h6 class="text-sm text-gray-600 font-bold">Instansi</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.instansi }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">Kategori</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.kategori }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">Jabatan</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.jabatan }}
                </p>
              </div>
              <div>
                <h6 class="text-sm text-gray-600 font-bold">Tipe Pendaftar</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.tipe_pendaftar }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">Jenis PNS</h6>
                <p class="text-gray-900 font-medium">
                  {{ item.tipe_pns }}
                </p>
                <h6 class="text-sm text-gray-600 font-bold mt-4">
                  Perangkat Daerah
                </h6>
                <p class="text-gray-900 font-medium">
                  {{ item.perangkat_daerah }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <nav class="flex flex-col sm:flex-row">
            <button
              :class="[
                'text-gray-600 py-2 px-6 block hover:text-green-600 focus:outline-none font-bold',
                {
                  'text-green-600 border-b-2 border-green-600':
                    selectedComponent === 'penilaian',
                },
              ]"
              @click="
                showComponent('penilaian');
                resetNilai();
              "
            >
              Penilaian Visitasi Lapangan
            </button>
            <button
              :class="[
                'text-gray-600 py-4 px-6 block hover:text-green-600 focus:outline-none',
                {
                  'text-green-600 border-b-2 border-green-600':
                    selectedComponent === 'video',
                },
              ]"
              @click="
                showComponent('video');
                resetNilai();
              "
            >
              Video Peserta
            </button>
          </nav>
        </div>
        <div v-if="selectedComponent === 'penilaian'">
          <table class="w-full border-collapse">
            <thead
              class="text-sm text-white font-bold font-roboto capitalize bg-green"
            >
              <tr>
                <td class="border px-4 py-2 text-center" rowspan="2">No</td>
                <td class="border px-4 py-2 text-center" rowspan="2">
                  Pertanyaan
                </td>
                <td class="border px-2 py-2 text-center" rowspan="2">Bobot</td>
                <td class="border px-2 py-2 text-center" colspan="2">
                  Prof. Dr. Hj. Nunuy Nur Afiah, S.E.,Ak.,M.Si., C.A.
                </td>
                <td class="border px-2 py-2 text-center" colspan="2">
                  Dr. Kartib Bayu., Ir., M.Si
                </td>
                <td class="border px-2 py-2 text-center" colspan="2">
                  Dr. Ferry Hadiyanto, S.E, M.A.
                </td>
                <td class="border px-2 py-2 text-center" colspan="2">
                  Diding Sakri, ST., MA., Ph.D.
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2 text-center">Nilai</td>
                <td class="border px-4 py-2 text-center">Skor</td>
                <td class="border px-4 py-2 text-center">Nilai</td>
                <td class="border px-4 py-2 text-center">Skor</td>
                <td class="border px-4 py-2 text-center">Nilai</td>
                <td class="border px-4 py-2 text-center">Skor</td>
                <td class="border px-4 py-2 text-center">Nilai</td>
                <td class="border px-4 py-2 text-center">Skor</td>
              </tr>
            </thead>
            <tr v-for="(item, i) in pertanyaan" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-100'">
              <td class="border px-4 py-2 text-center">{{ i + 1 }}</td>
              <td class="border px-4 py-2">{{ item.pertanyaan }}</td>
              <td class="border px-4 py-2 text-center">{{ item.bobot }}</td>
              <td class="border px-4 py-2 text-center">
                {{ item.nilai_penilai1 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.skor_penilai1 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.nilai_penilai2 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.skor_penilai2 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.nilai_penilai3 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.skor_penilai3 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.nilai_penilai4 }}
              </td>
              <td class="border px-4 py-2 text-center">
                {{ item.skor_penilai4 }}
              </td>
            </tr>
            <tr class="border px-4 py-2 bg-gray-100">
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2 font-bold">Total Skor</td>
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2 text-center">8.5</td>
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2 text-center">9</td>
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2 text-center">9.3</td>
              <td class=" px-4 py-2"></td>
              <td class=" px-4 py-2 text-center">9</td>
            </tr>
          </table>
          <h3 class="text-xl text-gray-900 font-bold font-lora mt-4 mb-2">
            Catatan
          </h3>
          <div class="lg:w-1/2 mb-4">
            <AlertInfo>
              <p class="text-sm text-gray-900">
                Status:
                <span class="text-blue-600"
                  >Disetujui ketahap V Penilaian Tim TPK</span
                >
              </p>
            </AlertInfo>
          </div>
          <table
            class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
          >
            <thead
              class="text-sm text-white font-bold font-roboto capitalize bg-green"
            >
              <tr class="[&>*]:border-b">
                <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
                <th scope="col" class="px-2 py-2.5">Nama Penilai</th>
                <th scope="col" class="px-2 py-2.5">Catatan</th>
              </tr>
            </thead>
            <tbody class="[&>*:nth-child(even)]:bg-gray-50">
              <tr
                v-for="(item, i) in penilai"
                :key="i"
                class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg"
              >
                <td class="px-2 py-2.5">{{ i + 1 }}</td>
                <td class="px-2 py-2.5">{{ item.nama_penilai }}</td>
                <td class="px-2 py-2.5">{{ item.catatan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="selectedComponent === 'video'">
          <div class="" style="margin-left: 5px">
            <h6 class="text-sm text-gray-600 font-bold mb-2">
              Link video penjelasan singkat
            </h6>
            <div
              class="bg-blue-50 border border-dashed border-blue rounded-lg flex items-center justify-center"
              style="width: 400px; height: 250px"
            >
              <p class="text-blue font-medium">Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>