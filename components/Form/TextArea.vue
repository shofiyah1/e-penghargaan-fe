<script setup>
const props = defineProps({
  modelValue: [String, null],
  label: String,
  id: String,
  placeholder: String,
  rows: {
    type: Number,
    default: 4
  },
  disabled: Boolean,
  required: Boolean
})

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <label v-if="label" class="text-gray-800" :for="id">{{ label }}</label>
  <textarea class="mt-2 w-full px-2 py-2.5 border border-gray-500 bg-gray-50 rounded-lg outline-none text-sm text-gray-800 disabled:bg-gray-200 placeholder-gray-600 resize-none" :placeholder="''" :id="id" :rows="rows" v-model="modelValue" :required="required" />
</template>

