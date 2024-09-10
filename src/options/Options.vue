<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-8 text-center text-grey-darker text-sm flex flex-col items-center gap-4 min-h-screen">
    <AppLogo />
    <h1 class="text-xl">
      Options
    </h1>

    <form class="flex flex-col items-start w-full max-w-xl gap-4 flex-1">
      <div class="w-full flex flex-col items-start gap-3 pb-2">
        <label class="font-medium text-sm text-black">Storage demo</label>
        <input id="storage-demo" v-model="storageDemo" type="text">
      </div>
    </form>

    <AppFooter />
  </main>
</template>
