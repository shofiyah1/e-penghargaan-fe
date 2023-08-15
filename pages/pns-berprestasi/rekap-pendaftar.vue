<script setup lang="ts">
type IPendaftar = {
  nama: string,
  nip: string,
  jenis_kelamin: string,
  tipe_pendaftar: string,
  tipe_pns: string,
  kategori: string,
  instansi: string,
  tgl_daftar: string,
  keputusan: string,
}

type DataPegawai = {
  current_page: number,
  per_page: number,
  total: number,
  last_page: number,
}

const breadcrumb = ref([
  {
    name: "Beranda",
    to: "/",
  },
  {
    name: "Rekap Pendaftar",
    to: "",
  },
]);

const showFilter = ref(false)
const filter = ref({
  tahun: '',
  tipe_pendaftar: '',
  tipe_pns: '',
  kategori: '',
  instansi: ''
})

const pendaftar = reactive<IPendaftar[]>([
  {
    nama: 'Maman Nugroho ST, MA',
    nip: '1995478953365',
    jenis_kelamin: 'Laki-Laki',
    tipe_pendaftar: 'Mandiri',
    tipe_pns: 'Provinsi Jawa Barat',
    kategori: 'Inspiratif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: 'Rekomendasi'
  },
  {
    nama: 'Kamila Anggraeni S.Psi',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'The Future Leader',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Dayat Junaedi S.Sos',
    nip: '1995478953365',
    jenis_kelamin: 'Laki-Laki',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'Inovatif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: 'Rekomendasi'
  },
  {
    nama: 'Amira Natasya  S.Pd',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Mandiri',
    tipe_pns: 'Provinsi Jawa Barat',
    kategori: 'Inovatif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: 'Rekomendasi'
  },
  {
    nama: 'Karina Oktarani M.Si',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Mandiri',
    tipe_pns: 'Provinsi Jawa Barat',
    kategori: 'Inspiratif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Randi Oktovian S.Pd',
    nip: '1995478953365',
    jenis_kelamin: 'Laki-Laki',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'Inspiratif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Rani Dwi Septiani S.Sos',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'The Future Leader',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Indriyani Nurjannah SP.d',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Mandiri',
    tipe_pns: 'Provinsi Jawa Barat',
    kategori: 'The Future Leader',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Fajar Budi Pratama S.Kom',
    nip: '1995478953365',
    jenis_kelamin: 'Laki-Laki',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'The Future Leader',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: '-'
  },
  {
    nama: 'Amina Eva Putri S.Psi',
    nip: '1995478953365',
    jenis_kelamin: 'Perempuan',
    tipe_pendaftar: 'Usulan',
    tipe_pns: 'Kabupaten/Kota',
    kategori: 'Inovatif',
    instansi: 'Dinas Pendidikan Kota Bandung / Kota Bandung',
    tgl_daftar: '10 Mei 2023',
    keputusan: 'Rekomendasi'
  },
])

const dataPegawai = ref<DataPegawai>({
  current_page: 1,
  per_page: 20,
  total: 100,
  last_page: 10,
})


</script>

<template>
  <section>
    <div class="bg-[#F6FBFF] border-b border-gray-300 -mt-8 -mx-8 pt-8 px-8">
      <Breadcrumb :items="breadcrumb" />
      <div class="flex justify-between mt-7">
        <div class="flex flex-col gap-4 pt-1">
          <h1 class="text-3xl text-gray-900 font-bold font-lora">Rekap Pendaftar</h1>
          <p class="text-gray-700 font-roboto w-2/3">Data rekap pendaftar aparatur sipil negara Pemerintah Provinsi Jawa barat</p>
          <div class="flex gap-4">
            <div class="relative border border-gray-500 rounded-lg w-[260px] lg:w-max">
              <input class="rounded-lg outline-none pl-3 h-10 w-60 text-sm placeholder-gray-600" type="text" placeholder="Cari nama, nip..." />
              <button class="bg-green-700 hover:bg-green-600 rounded-lg p-2 h-10 absolute top-0 right-0">
                <img src="/images/svg/Cari.svg" alt="">
              </button>
            </div>
            <div class="w-px bg-gray-300 my-0.5"></div>
            <div class="relative flex">
              <button @click="showFilter = !showFilter" class="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center gap-2">
                <p class="text-sm text-gray-900 font-bold">Filter</p>
                <img src="/images/svg/Filter.svg" alt="">
              </button>
              <div v-if="showFilter" class="w-96 absolute top-14 bg-white rounded-xl p-4 shadow-md flex flex-col gap-6">
                <div class="flex flex-col gap-1">
                  <FormVueSelect v-model:modelValue="filter.tahun" class="input-select" label="Periode Tahun" :options="['2021', '2022', '2023']" />
                </div>
                <div class="flex flex-col gap-1">
                  <FormVueSelect v-model:modelValue="filter.tipe_pendaftar" class="input-select" label="Tipe Pendaftar" :options="['Mandiri', 'Usulan']" />
                </div>
                <div class="flex flex-col gap-1">
                  <FormVueSelect v-model:modelValue="filter.tipe_pns" class="input-select" label="Tipe PNS" :options="['Provinsi Jawa Barat', 'Kabupaten/Kota']" />
                </div>
                <div class="flex flex-col gap-1">
                  <FormVueSelect v-model:modelValue="filter.kategori" class="input-select" label="Kategori" :options="['Inovatif', 'Inspiratif', 'The Future Leader']" />
                </div>
                <div class="flex flex-col gap-1">
                  <FormVueSelect v-model:modelValue="filter.instansi" class="input-select" label="Instansi" :options="['Dinas Pendidikan Kota Bandung']" />
                </div>
                <div class="flex gap-4">
                  <button @click="showFilter = false" class="bg-white hover:bg-green-50 border border-green rounded-lg w-full py-2.5 text-sm text-green font-bold">Batalkan</button>
                  <button @click="showFilter = false" class="bg-green-700 hover:bg-green-800 rounded-lg w-full py-2.5 text-sm text-white font-bold">Terapkan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/illustrasi.png" alt="illustrasi">
      </div>
    </div>
    <div class="mt-8 flex flex-col gap-4">
      <button class="bg-green hover:bg-green-700 py-2.5 px-4 rounded-lg text-sm text-white font-bold w-max ml-auto">Export ke Excel</button>
      <table class="w-full text-sm text-left text-gray-800 border rounded-lg border-separate border-spacing-0">
        <thead class="text-sm text-white font-bold font-roboto capitalize bg-green">
          <tr class="[&>*]:border-b">
            <th scope="col" class="px-2 py-2.5 rounded-tl-lg">No</th>
            <th scope="col" class="px-2 py-2.5">Nama</th>
            <th scope="col" class="px-2 py-2.5">NIP</th>
            <th scope="col" class="px-2 py-2.5 whitespace-nowrap">Jenis Kelamin</th>
            <th scope="col" class="px-2 py-2.5 whitespace-nowrap">Tipe Pendaftar</th>
            <th scope="col" class="px-2 py-2.5">Tipe PNS</th>
            <th scope="col" class="px-2 py-2.5">Kategori</th>
            <th scope="col" class="px-2 py-2.5">Instansi/PD</th>
            <th scope="col" class="px-2 py-2.5 whitespace-nowrap">Tanggal Daftar</th>
            <th scope="col" class="px-2 py-2.5 rounded-tr-lg">Keputusan</th>
          </tr>
        </thead>
        <tbody class="[&>*:nth-child(even)]:bg-gray-50">
          <tr v-for="(item, i) in pendaftar" :key="i" class="[&:not(:last-child)>*]:border-b [&:last-child>*:first-child]:rounded-bl-lg [&:last-child>*:last-child]:rounded-br-lg">
            <td class="px-2 py-2.5">{{ i + 1 }}</td>
            <td class="px-2 py-2.5">{{ item.nama }}</td>
            <td class="px-2 py-2.5">{{ item.nip }}</td>
            <td class="px-2 py-2.5">{{ item.jenis_kelamin }}</td>
            <td class="px-2 py-2.5">{{ item.tipe_pendaftar }}</td>
            <td class="px-2 py-2.5">{{ item.tipe_pns }}</td>
            <td class="px-2 py-2.5">{{ item.kategori }}</td>
            <td class="px-2 py-2.5">{{ item.instansi }}</td>
            <td class="px-2 py-2.5">{{ item.tgl_daftar }}</td>
            <td class="px-2 py-2.5">{{ item.keputusan }}</td>
          </tr>
        </tbody>
      </table>
      <Pagination :per-page="dataPegawai.per_page" :total="dataPegawai.total" :current-page="dataPegawai.current_page" :last-page="dataPegawai.last_page" @update:per-page="(val: any) => dataPegawai.per_page = val" @update:current-page="(val: any) => dataPegawai.current_page = val" />
    </div>
  </section>
</template>