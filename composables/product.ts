export const useProduct = async (productId: number) => {
  // const { data, error } = await useFetch(
  //   `/api/store/external-data/${productId}`)
  const { data: product, error } = await useFetch(
    `/api/store/local-data/${productId}`,
  )

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('product', async () => {
  //   return await $fetch(`/api/store/local-data/${productId}`)
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch product id ${productId}.`,
    })
  }

  const fetchProduct = () => {
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    // return product.value.image
    //   ? {
    //       ...product.value,
    //       imageOptimized: optimizeImage(product.value.image),
    //     }
    //   : product.value
    return product.value
  }

  return { product, fetchProduct }
}
