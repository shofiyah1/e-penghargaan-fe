<script setup lang="ts">
interface IProps {
  items: Array<{
    to: string;
    name: string;
  }>;
}
defineProps<IProps>();
</script>

<template>
  <div class="flex items-center gap-x-3">
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink :to="item.to" class="text-sm font-bold" :class="item.to
        ? 'text-blue underline underline-offset-2'
        : 'text-gray-800 font-roboto'
        ">
        {{ item.name }}
      </NuxtLink>
      <Icon name="material-symbols:chevron-right-rounded" class="text-gray-300" v-if="index + 1 !== items.length" />
    </template>
  </div>
</template>
