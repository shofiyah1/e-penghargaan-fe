<template>
  <main class="container mx-auto max-w-full">
    <NuxtLoadingIndicator color="#1e88e5" />
    <div class="min-h-screen">
      <Navbar />
      <Sidebar />
      <div class="flex flex-col mx-auto min-h-screen p-8 ml-[280px]">
        <slot />
      </div>
      <div class="ml-[280px]">
        <slot name="footer">
          <!-- <Footer /> -->
        </slot>
      </div>
    </div>
  </main>
</template>
  