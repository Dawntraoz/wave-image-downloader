<script setup lang="ts">
defineProps<{
  withOptions?: boolean
}>()

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <header
    class="z-20 relative p-3 bg-white border-b border-grey-light rounded-t-xl flex items-center gap-2"
  >
    <AppLogo size="text-2xl" />
    <p class="font-bold text-black">
      WavE
    </p>
    <slot />
    <lucide:settings v-if="withOptions" class="ml-auto text-black" @click="openOptionsPage" />
  </header>
</template>
