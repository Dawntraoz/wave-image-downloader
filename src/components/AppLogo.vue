<script setup lang="ts">
export interface Props {
  size?: string
}
withDefaults(defineProps<Props>(), {
  size: 'text-3xl',
})
</script>

<template>
  <a class="text-primary" :class="size" rel="noreferrer" href="https://github.com/Dawntraoz/wave-image-downloader" target="_blank" title="WavE Image Downloader GitHub's repository">
    <lucide:audio-waveform />
  </a>
</template>
