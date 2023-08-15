<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  title: string;
}>();

const inputRef = ref(null)

const emit = defineEmits(["close"]);

const closeModal = () => emit("close");
</script>

<template>
  <HeadlessTransitionRoot :show="isOpen" as="template">
    <HeadlessDialog as="div" :initialFocus="inputRef" @close="closeModal" class="relative z-30">
      <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      </HeadlessTransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <HeadlessDialogPanel class="w-full lg:w-[700px] max-w-6xl transform transition-all rounded-lg bg-white text-left align-middle shadow-lg">
              <HeadlessDialogTitle as="h1" class="flex justify-between items-center gap-4 text-lg font-medium leading-5 px-6 py-2">
                <span class="text-xl text-green-700 font-medium font-roboto">{{
                  title
                }}</span>
                <Icon name="heroicons:x-mark" class="flex-none cursor-pointer text-gray-700 hover:text-gray-500 transition" @click="closeModal" />
              </HeadlessDialogTitle>
              <div class="bg-white px-6 py-4" ref="inputRef">
                <slot />
              </div>
              <slot name="footer-button">
                <div class="flex justify-center p-2 bg-gray-50 rounded-bl-lg rounded-br-lg">
                </div>
              </slot>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
