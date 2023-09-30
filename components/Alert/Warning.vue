<template>
  <div class="border border-yellow-800 bg-yellow-50 p-4 rounded-lg text-sm text-gray-900 flex w-full gap-4">
    <Icon name="heroicons:exclamation-triangle-20-solid" class="w-5 h-5 text-yellow-800" />
    <span class="text-sm text-gray-900 w-full">
      <slot />
    </span>
  </div>
</template>
