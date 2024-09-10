<script setup lang="ts">
import { userName } from '~/logic/storage'
</script>

<template>
  <main class="main-wrapper flex flex-col">
    <AppHeader with-options />
    <div class="p-4 relative z-10 min-h-[340px] flex flex-col items-center justify-center gap-4 overflow-y-auto overflow-x-hidden flex-1">
      <lucide:audioWaveform
        class="absolute -top-1/4 left-1/2 -translate-x-1/2 -z-1 text-primary text-[340px] opacity-5 rotate-20 pointer-events-none"
      />
      <header
        class="grid grid-cols-[60px_minmax(0,1fr)] grid-rows-[30px_30px] gap-x-3"
      >
        <img
          src="https://i.pravatar.cc/60"
          class="rounded-full border border-grey-lighter"
        />
        <h1 class="text-lg font-serif">Hi, {{ userName }} 👋</h1>
        <p class="col-start-2">Here you have your list of images!</p>
      </header>
      <section class="rounded-md border border-grey-light bg-white w-full p-3 overflow-y-auto flex-1" />
    </div>
    <AppFooter />
  </main>
</template>
