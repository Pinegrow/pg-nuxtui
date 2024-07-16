import type { Product, Products } from '~~/types/store'
import { productData } from './index'

const apiBaseUrl = 'https://fakestoreapi.com'

export default defineEventHandler(async (event): Promise<Product> => {
  const { id } = event.context.params

  let product: Maybe<Product>

  if (productData.products.length) {
    product = productData.products.find((product) => +product.id === +id)
  }

  if (!product) {
    product = await $fetch(`${apiBaseUrl}/products/${id}`)

    if (product) {
      product = {
        ...product,
        badge: '',
        shipping: '',
      }
    } else {
      throw createError({
        statusCode: 404,
        message: 'Product not fetched.',
      })
    }
  }

  return product
})
