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
};
const breadcrumb = ref([
  {
    name: "Beranda",
    to: "/",
  },
  {
    name: "Penilaian Tahap V",
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
    pertanyaan: "Sistematika penyampaian jawaban pertanyaan",
    bobot: "15",
  },
  {
    pertanyaan: "Penguasaan terhadap substansi materi",
    bobot: "20",
  },
  {
    pertanyaan: "Ketepatan menjawab pertanyaan dan argumentasi",
    bobot: "20",
  },
  {
    pertanyaan: "Performa dan penampilan",
    bobot: "15",
  },
  {
    pertanyaan:
      "Dampak / manfaat inovasi, inspiratif, dan kepemimpinan terhadap tantangan publik (pelayanan publik)",
    bobot: "30",
  },
]);

const penilai = reactive<IPenilai[]>([
  {
    nama_penilai: "Belum ada penilaian",
    catatan: "",
  },
]);

const selectedComponent = ref("pertimbangan");

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
    <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
      <Breadcrumb :items="breadcrumb" />
      <div class="flex justify-between mt-7">
        <div class="flex flex-col gap-4 pt-1">
          <h1 class="text-3xl text-gray-900 font-bold font-lora">
            Penilaian Tahap V
          </h1>
          <p class="text-gray-700 font-roboto w-2/3">
            Data penilaian tahap V aparatur sipil negara Pemerintah Provinsi
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
              <h6 class="text-sm text-gray-600 font-bold mt-4">Judul Karya</h6>
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
                  selectedComponent === 'pertimbangan',
              },
            ]"
            @click="
              showComponent('pertimbangan');
              resetNilai();
            "
          >
            Penilaian Tim Pertimbangan
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
          <button
            :class="[
              'text-gray-600 py-4 px-6 block hover:text-green-600 focus:outline-none',
              {
                'text-green-600 border-b-2 border-green-600':
                  selectedComponent === 'sesama',
              },
            ]"
            @click="
              showComponent('sesama');
              resetNilai();
            "
          >
            Penilaian Sesama
          </button>
        </nav>
      </div>
      <div v-if="selectedComponent === 'pertimbangan'">
        <table
          class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
          style="table-layout: auto"
        >
          <colgroup>
            <col style="width: 1%" />
            <col style="width: 70%" />
            <col style="width: 3%" />
          </colgroup>
          <thead
            class="text-sm text-white font-bold font-roboto capitalize bg-green"
          >
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
              <th scope="col" class="px-2 py-2.5">Pertanyaan</th>
              <th scope="col" class="px-2 py-2.5">Bobot</th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-50">
            <tr
              v-for="(item, i) in pertanyaan"
              :key="i"
              class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg"
            >
              <td class="px-2 py-2.5">{{ i + 1 }}</td>
              <td class="px-2 py-2.5">{{ item.pertanyaan }}</td>
              <td class="px-2 py-2.5">{{ item.bobot }}</td>
            </tr>
            <tr class="border px-4 py-2 bg-gray-100">
              <td class="px-2 py-2.5"></td>
              <td class="px-2 py-2 font-bold">Total Skor</td>
              <td class="px-2 py-2.5">100</td>
            </tr>
          </tbody>
        </table>
        <h3 class="text-xl text-gray-900 font-bold font-lora mt-4 mb-2">
          Catatan
        </h3>
        <table
          class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
          style="table-layout: auto"
        >
          <colgroup>
            <col style="width: 1%" />
            <col style="width: 40%" />
            <col style="width: 40%" />
          </colgroup>
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
              <td class="px-2 py-2.5"></td>
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
      <div v-if="selectedComponent === 'sesama'">
        <table
          class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
          style="table-layout: auto"
        >
          <colgroup>
            <col style="width: 1%" />
            <col style="width: 70%" />
            <col style="width: 3%" />
          </colgroup>
          <thead
            class="text-sm text-white font-bold font-roboto capitalize bg-green"
          >
            <tr class="[&>*]:border-b">
              <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
              <th scope="col" class="px-2 py-2.5">Pertanyaan</th>
              <th scope="col" class="px-2 py-2.5">Bobot</th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-50">
            <tr
              v-for="(item, i) in pertanyaan"
              :key="i"
              class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg"
            >
              <td class="px-2 py-2.5">{{ i + 1 }}</td>
              <td class="px-2 py-2.5">{{ item.pertanyaan }}</td>
              <td class="px-2 py-2.5">{{ item.bobot }}</td>
            </tr>
            <tr class="border px-4 py-2 bg-gray-100">
              <td class="px-2 py-2.5"></td>
              <td class="px-2 py-2 font-bold">Total Skor</td>
              <td class="px-2 py-2.5">100</td>
            </tr>
          </tbody>
        </table>
        <h3 class="text-xl text-gray-900 font-bold font-lora mt-4 mb-2">
          Catatan
        </h3>
        <table
          class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0"
          style="table-layout: auto"
        >
          <colgroup>
            <col style="width: 1%" />
            <col style="width: 40%" />
            <col style="width: 40%" />
          </colgroup>
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
              <td class="px-2 py-2.5"></td>
              <td class="px-2 py-2.5">{{ item.nama_penilai }}</td>
              <td class="px-2 py-2.5">{{ item.catatan }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
