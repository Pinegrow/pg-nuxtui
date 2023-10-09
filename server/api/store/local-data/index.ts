import { Store, Products } from '@/types/store'
import products from './data'

products as Products

export default defineEventHandler(async (/*event*/): Promise<Store> => {
  const categories = [...new Set(products.map((product) => product.category))]

  const badges = [
    ...new Set(
      products
        .filter((product) => product.badge)
        .map((product) => product.badge),
    ),
  ]

  return {
    products,
    categories,
    badges,
  }
})
