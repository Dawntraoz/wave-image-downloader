import { ref } from 'vue'
import JSZip from 'jszip'

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

export async function downloadImages(images: Image[]) {
  // Get blobs from selected images
  const promises = images.map(async (image) => {
    const res = await fetch(image.src)
    const blob = await res.blob()
    return blob
  })
  const promiseResponse = await Promise.all(promises)

  // Create zip
  const zip = new JSZip()
  promiseResponse.forEach((blob, index) => {
    zip.file(`image-${index}.${blob.type.replace('image/', '')}`, blob)
  })
  const zipFileToDownload = await zip.generateAsync({ type: 'blob' })

  // Download images.zip file
  const tempLink = document.createElement('a')
  tempLink.download = 'images.zip'
  const zipUrl = URL.createObjectURL(zipFileToDownload)
  tempLink.href = zipUrl
  tempLink.style.display = 'none'
  document.body.appendChild(tempLink)
  tempLink.click()
  tempLink.remove()
  URL.revokeObjectURL(zipUrl)
}
