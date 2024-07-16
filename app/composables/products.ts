export const useProducts = async () => {
  // const { data, error } = await useFetch('/api/store/external-data')
  const { data, error } = await useFetch('/api/store/local-data')

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('products', async () => {
  //   return await $fetch('/api/store/local-data')
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch products.`,
    })
  }

  const fetchCategory = (category?: string) => {
    // Optimize any image urls in the data contents
    const { optimizeImage } = useOptimizeImage()

    return data.value.products
      .filter((product) => !category || product.category === category)
      .map((product) =>
        product.image
          ? {
              ...product,
              imageOptimized: optimizeImage(product.image),
            }
          : product,
      )
  }

  return { ...data, fetchCategory }
}
