<script setup lang="ts">
// @ts-ignore
import { Category2 as Category2Icon, Flag as FlagIcon, Cup as CupIcon, Import as ImportIcon, Crown as CrownIcon, LikeDislike as LikeDislikeIcon, MedalStar as MedalStarIcon, FavoriteChart as FavoriteChartIcon, Setting4 as Setting4Icon } from 'vue-iconsax'

type Menu = Array<{
  text: string,
  icon: any,
  route: string
}>

const listMenu = shallowRef<Menu>([
  {
    text: 'Dashboard',
    icon: Category2Icon,
    route: '/dashboard'
  },
  {
    text: 'Nasional dan Internasional',
    icon: FlagIcon,
    route: '/pegawai'
  },
  {
    text: 'PNS Berprestasi',
    icon: CupIcon,
    route: '/'
  },
  {
    text: 'Download Sertifikat',
    icon: ImportIcon,
    route: '/'
  },
  {
    text: 'Dedikasi',
    icon: CrownIcon,
    route: '/'
  },
  {
    text: 'Loyalitas',
    icon: LikeDislikeIcon,
    route: '/'
  },
  {
    text: 'Tanda Kehormatan',
    icon: MedalStarIcon,
    route: '/'
  },
  {
    text: 'Kenaikan Pangkat Luar Biasa',
    icon: FavoriteChartIcon,
    route: '/'
  },
  {
    text: 'Pengaturan',
    icon: Setting4Icon,
    route: '/'
  },
])
</script>

<template>
  <div class="fixed top-0 z-20 p-4 bg-white w-[280px] border-r border-gray-300 h-screen">
    <NuxtLink to="/statistik">
      <img src="/images/logo.png" alt="">
    </NuxtLink>
    <ul class="flex flex-col gap-2 mt-10">
      <li v-for="(menu, i) in listMenu" :key="i">
        <NuxtLink :to="menu.route" class="flex items-center gap-2 p-4 rounded-lg hover:bg-green group">
          <component :is="menu.icon" :size="20" class="text-gray-900 group-hover:text-white" type="bulk" />
          <p class="text-sm text-gray-900 font-medium group-hover:text-white">{{ menu.text }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-blue
}

.router-link-active>* {
  @apply text-white
}
</style>
