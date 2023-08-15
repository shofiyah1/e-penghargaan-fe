<template>
  <label v-if="label" class="block text-gray-800">{{ label }}</label>
  <v-select :class="class" :placeholder="placeholder || 'Pilih'" v-model="select" :label="labelSelect" :clearable="clearable" :options="options" :reduce="reduce" :searchable="searchable">
    <template #open-indicator="{ attributes }">
      <Icon name="ion:chevron-down" v-bind="attributes" class="w-5 h-5 text-green" />
    </template>
    <template #search="{ attributes, events }">
      <input class="vs__search" :required="required === undefined ? false : required" v-bind="attributes" v-on="events" />
    </template>
  </v-select>
</template>

<script setup lang="ts">
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const props = defineProps<{
  class: string;
  modelValue: string | number | boolean | null;
  errors?: Array<any>;
  label?: string;
  labelSelect?: string;
  placeholder?: string;
  options: Array<any>;
  reduce?: Function;
  clearable?: Boolean;
  searchable?: Boolean;
  required?: boolean
}>();
const emits = defineEmits(["update:modelValue"]);

const select = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
  },
});
</script>

<style>
:root {
  --vs-disabled-bg: #eeeeee;
  --vs-dropdown-option--active-bg: #f3f4f6;
  --vs-dropdown-option--active-color: #374151;
  --vs-search-input-placeholder-color: #9ca3af;
  --vs-font-size: 0.875rem;
}

.filter {
  width: 260px
}

.filter .vs__dropdown-toggle {
  min-height: 40px;
  @apply h-full bg-gray-50 border border-gray-500 rounded-lg;
}

.filter .vs__selected {
  @apply inline-block truncate pt-1 w-[190px]
}

.filter.vs--open .vs__search {
  @apply w-auto;
}

/* End Filter */

.input-select .vs__dropdown-toggle {
  @apply bg-gray-50 border border-gray-500 rounded-lg h-10;
}

.input-select.vs--disabled .vs__dropdown-toggle {
  @apply bg-gray-200;
}

/* Pagination */
.pagination {
  @apply w-max h-full
}

.pagination .vs__dropdown-toggle {
  @apply h-full border-0 bg-white rounded-none
}

.pagination .vs__selected-options {
  @apply flex-none
}

.pagination .vs__search {
  @apply p-0
}

.pagination .vs__selected {
  @apply text-sm text-gray-900 font-bold
}

.pagination.vs--open {
  @apply w-24
}

.pagination.vs--open .vs__actions {
  @apply ml-auto
}

.pagination.vs--open .vs__selected {
  @apply pt-2
}

/* End Pagination */

.vs__open-indicator {
  fill: #1976d2;
}

.vs__selected-options {
  @apply flex-nowrap
}

.vs__selected {
  @apply w-max;
}

.vs__dropdown-menu {
  @apply border border-gray-500 border-solid rounded-xl mt-1 p-[12px] pb-1 w-max;
}

.vs__dropdown-menu li {
  @apply rounded-lg font-medium py-2 px-4 mb-2;
}

.vs__dropdown-menu::-webkit-scrollbar-track {
  border-radius: 8px;
}

.vs--open .vs__dropdown-toggle {
  border-bottom-color: unset;
  @apply rounded-bl-lg rounded-br-lg;
}

.vs__actions {
  padding-right: 9px !important;
}
</style>
