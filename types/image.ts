import { ImageSizes } from '@nuxt/image'

export type ImageOptimized = {
  imageSizes?: ImageSizes
  imageSrc?: string
  imageLazySrc?: string
  bgStyles?: string
}
