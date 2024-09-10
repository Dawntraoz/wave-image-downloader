<script setup lang="ts">
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-full px-4 py-5 text-center text-gray-700">
    <AppLogo />
    <div>Sidepanel</div>

    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
  </main>
</template>
