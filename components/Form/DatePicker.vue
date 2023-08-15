<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
  label?: string,
  modelValue: string | Date
  required?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const date = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <label v-if="label" class="text-gray-800">{{ label }}</label>
  <Datepicker v-model="date" locale="id" auto-apply hide-offset-dates :day-names="[
    'Sen',
    'Sel',
    'Rab',
    'Kam',
    'Jum',
    'Sab',
    'Min',
  ]" :highlight-week-days="[0]" :enable-time-picker="false" :clearable="false" :month-change-on-scroll="false" month-name-format="long" placeholder="Pilih" :required="required">
    <template #input-icon>
      <img src="/images/svg/Kalender.svg" alt="" />
    </template>
  </Datepicker>
</template>

<style>
/* .dp__main {
  @apply w-max max-w-full;
} */

.dp__input {
  @apply h-10 bg-gray-50 border-gray-500 text-gray-800 rounded-lg pl-2;
}

.dp__input_icon {
  left: unset !important;
  right: 0 !important;
  @apply h-full pr-2 pt-2.5;
}

.modal .dp__menu {
  top: 80px !important;
  left: 180px !important;
  width: 80%;
}

.dp__menu {
  /* @apply w-full lg: w-3/5; */
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.dp__calendar {
  width: 100%;
  font-family: 'Lato';
  padding: 0 4px;
}

.dp__calendar_header {
  justify-content: space-around;
  width: 100%;
}

.dp__calendar_header_item {
  font-family: 'Roboto', sans-serif;
  @apply text-gray-800 font-medium;
}

.dp__calendar_header_separator {
  display: none;
}

.dp__month_year_row {
  margin: 12px 0;
}

.dp__month_year_select {
  font-family: 'Roboto';
  font-weight: 500;
}

.dp__today {
  border: 0;
  @apply text-gray-900 font-bold;
}

.dp__cell_inner {
  border-radius: 50%;
}

.dp__active_date {
  font-weight: 700;
  color: white !important;
}

.dp__action_row {
  font-family: 'Lato';
  border-radius: 6px;
}

.dp__select {
  @apply text-green;
}

.dp__cell_highlight {
  @apply bg-transparent text-red-700;
}

.dp__disabled {
  background-color: #eeeeee;
}

.modal .dp__arrow_bottom {
  bottom: unset;
  top: -13px;
  transform: translate(-50%, 50%) rotate(225deg);
}

.dp__theme_light {
  --dp-primary-color: #16A75C;
}
</style>