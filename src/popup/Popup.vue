<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
</script>

<template>
  <main class="main-wrapper flex flex-col">
    <AppHeader with-options />
    <div class="p-4 relative z-10 min-h-[340px] flex flex-col items-center justify-center gap-4 overflow-y-auto overflow-x-hidden flex-1">
      <lucide:audioWaveform
        class="absolute -top-1/4 left-1/2 -translate-x-1/2 -z-1 text-primary text-[340px] opacity-5 rotate-20 pointer-events-none"
      />
      <p>Storage: {{ storageDemo }}</p>
      <section class="rounded-md border border-grey-light bg-white w-full p-3 overflow-y-auto flex-1" />
    </div>
    <AppFooter />
  </main>
</template>
