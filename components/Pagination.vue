<script setup lang="ts">
// import { debounce } from 'lodash';

const props = defineProps({
  perPage: {
    required: true,
    type: Number,
  },
  total: {
    required: true,
    type: Number,
  },
  currentPage: {
    required: true,
    type: Number,
  },
  lastPage: {
    required: true,
    type: Number,
  },
  pages: {
    type: Array<Number>,
    default: () => [10, 20, 30, 50, 100, 1000],
  },
})

const emits = defineEmits([
  'update:perPage',
  'update:currentPage',
  'change',
])

const changePerPage = (value: number) => {
  emits('update:currentPage', 1)
  emits('update:perPage', value)
  emits('change', {
    currentPage: 1,
    perPage: value,
  })
}

const prev = () => {
  if (props.currentPage == 1) {
    return false
  }

  emits('update:currentPage', props.currentPage - 1)
  emits('change', {
    currentPage: props.currentPage,
    perPage: props.perPage,
  })
}

const next = () => {
  if (props.currentPage >= props.lastPage) {
    return false
  }

  emits('update:currentPage', props.currentPage + 1)
  emits('change', {
    currentPage: props.currentPage,
    perPage: props.perPage,
  })
}

// const changePageManual = debounce((e) => {
//   const value = e.target?.value
  
//   if (!value || value < 1 || value > props.lastPage) {
//     return false
//   }

//   emits('update:currentPage', value)
//   emits('change', {
//     currentPage: value,
//     perPage: props.perPage,
//   })
// }, 1000)
</script>

<template>
  <div class="">
    <div class="flex justify-between bg-gray-50 border border-gray-300 rounded-lg h-12 px-4 w-max md:w-full">
      <div class="flex items-center">
        <p class="text-sm text-gray-800">Tampilkan</p>
        <FormVueSelect
          class="pagination mx-2"
          :clearable="false"
          :searchable="false"
          :options="pages"
          :modelValue="perPage"
          @update:modelValue="changePerPage"
        />
        <p class="text-sm text-gray-800">Item</p>
        <div class="w-px h-full bg-gray-200 mx-2"></div>
        <p class="text-sm text-gray-800 whitespace-nowrap">
          dari total
          <span class="font-bold">{{ total }}</span>
        </p>
        <div class="w-px h-full bg-gray-200 mx-2"></div>
      </div>
      <div class="flex items-center">
        <p class="text-sm text-gray-800">Halaman</p>
        <!-- @input="changePageManual" -->
        <input :value="currentPage"  class="text-sm text-gray-900 font-bold w-12 h-full pl-2 mx-2 outline-none" type="number" min="1" :max="lastPage" />
        <p class="text-sm text-gray-800">
          dari {{ lastPage }}
        </p>
        <div class="w-px h-full bg-gray-200 mx-2"></div>
        <Icon
          @click="prev"
          name="ion:chevron-left"
          class="w-5 h-5"
          :class="props.currentPage == 1 ? 'text-gray-400' : 'text-green cursor-pointer'"
        />
        <div class="w-px h-full bg-gray-200 mx-2"></div>
        <Icon
          @click="next"
          name="ion:chevron-right"
          class="w-5 h-5"
          :class="props.currentPage >= props.lastPage ? 'text-gray-400' : 'text-green cursor-pointer'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>