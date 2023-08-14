export const useProducts = async () => {
  // const { data, error } = await useFetch('/api/store/external-data')
  const { data, error } = await useFetch('/api/store/local-data')

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch products.`,
    })
  }

  return data
}
