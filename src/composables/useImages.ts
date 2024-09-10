import { ref } from 'vue'

export type Image = {
  src: string
  width: number
  height: number
  alt: string
  type: string[]
  isSelected: boolean
}

export function fetchImages() {
  const initialImages = ref<Image[]>([])

  const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)\w+$/gim

  initialImages.value = Array.from(document.images).map(
    image => ({
      src: image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
      alt: image.alt,
      type: image.currentSrc?.match(fileExtensionPattern) || [],
      isSelected: false,
    }),
  )

  return initialImages
}
