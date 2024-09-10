<script setup lang="ts">
import { sendMessage } from 'webext-bridge/popup'
import { type Image, downloadImages } from '~/composables/useImages'
import { userName } from '~/logic/storage'

const images = ref<Image[]>([])
const imagesSelected = ref<Image[]>([])

async function sendMessageToContentScript() {
  try {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
    // Check if the tab is valid
    if (tab && tab.id !== undefined) {
      // Sending a message to the content script in the active tab
      const response = await sendMessage(
        'get-images',
        {},
        `content-script@${tab.id}`,
      )
      images.value = response as Image[]
      // eslint-disable-next-line no-console
      console.log('Received response from content script:', response)
    }
    else {
      console.error('No active tab found')
    }
  }
  catch (error) {
    console.error('Error sending message to content script:', error)
  }
}

function handleImageSelection() {
  imagesSelected.value = images.value.filter(image => image.isSelected)
}

(async () => await sendMessageToContentScript())()
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
        >
        <h1 class="text-lg font-serif">
          Hi, {{ userName }} 👋
        </h1>
        <p class="col-start-2">
          Here you have your list of images!
        </p>
      </header>
      <section class="rounded-md border border-grey-light bg-white w-full p-3 overflow-y-auto flex-1">
        <div class="gap-2 columns-2">
          <label v-for="image in images" :key="`image-${image.src}`" class="relative block">
            <template v-if="image.height > 0">
              <img
                :src="image.src"
                :width="image.width"
                :height="image.height"
                :alt="image.alt"
                class="rounded-md border border-grey-lighter w-full object-cover mb-2"
                :class="image.isSelected && 'border-primary'"
              >
              <input
                v-if="image.height > 0"
                v-model="image.isSelected"
                type="checkbox"
                name="images"
                class="absolute top-2 left-2"
                @change="handleImageSelection"
              >
              <span
                v-if="image.height > 0 && image.type[0]"
                class="absolute top-2 right-2 uppercase bg-grey-lighter text-xs text-black px-1.5 py-px rounded-md"
              >
                {{ image.type[0].replace(".", "") }}
              </span>
            </template>
          </label>
        </div>
      </section>
    </div>
    <AppFooter>
      <button :disabled="imagesSelected.length <= 0" @click="downloadImages(imagesSelected)">
        Download
      </button>
    </AppFooter>
  </main>
</template>
