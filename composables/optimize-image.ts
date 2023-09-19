export const useOptimizeImage = () => {
  const img = useImage()

  const optimizeImage = (imageUrl, preset = '' /*, height = 800*/) => {
    return {
      imageSizes: img.getSizes(imageUrl, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
          // height,
        },
        preset,
      }),
      imageSrc: img(imageUrl, {
        // height,
        quality: 70,
      }),
      imageLazySrc: img(imageUrl, {
        // width: height / 4,
        quality: 70,
      }),
    }
  }

  const optimizeImages = (imageUrls, height) => {
    return imageUrls.map((imageUrl) => {
      return optimizeImage(imageUrl, height)
    })
  }

  return {
    optimizeImage,
    optimizeImages,
  }
}
