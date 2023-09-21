import { ImageSizes } from '@nuxt/image'

type BgStyle = {
  'background-image': string
}

export type ImageOptimized = {
  imageSizes?: ImageSizes
  imageSrc?: string
  imageLazySrc?: string
  bgStyles?: BgStyle[]
}
