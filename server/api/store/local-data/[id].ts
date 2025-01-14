import type { Product, Products } from '~~/types/store'
import productsRaw from './data'

const products: Product[] = productsRaw

export default defineEventHandler(async (event): Promise<Product> => {
  const { id } = event.context.params

  const product: Maybe<Product> = products.find(
    (product) => +product.id === +id,
  )
  if (!product) {
    throw createError({
      statusCode: 404,
      message: 'Product not found.',
    })
  }

  return product
})
