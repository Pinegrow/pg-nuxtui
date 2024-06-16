import type { Store, Products } from '~~/types/store'

export let products: Products
let categories: string[] = []

const apiBaseUrl = 'https://fakestoreapi.com'

const badges = [
  'Low Stock',
  'Selling Fast!',
  'New!',
  'Presale',
  'Clearance',
  'Get 10% OFF^',
]

const idsOfFractionOfTheProductsArray = (products, fraction) => {
  return products
    .map((product) => ({
      id: product.id,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ id }) => id)
    .slice(0, Math.floor(products.length * fraction))
}

const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

export default defineEventHandler(async (/*event*/): Promise<Store> => {
  // If products exists, don't refetch them
  // Remove this if we want to always fetch refresh data from the source
  if (products) {
    return { products, categories, badges }
  }

  // Fakestoreapi doesn't include badges & free shipping fields, so we randomly add those fields to the rawProducts and enrich it
  // apply the badges to quarter of the total products randomly
  // apply free shipping to quarter of the total products randomly

  const rawProducts: Maybe<Products> = await $fetch(`${apiBaseUrl}/products`)

  if (!rawProducts) {
    throw createError({
      statusCode: 404,
      message: 'Products not fetched.',
    })
  }

  const productIdsForBadges = idsOfFractionOfTheProductsArray(rawProducts, 0.25)
  const productIdsForFreeShipping = idsOfFractionOfTheProductsArray(
    rawProducts,
    0.25,
  )

  products = rawProducts.map((product) => ({
    ...product,
    price: (+product.price).toFixed(2),
    badge: productIdsForBadges.includes(product.id)
      ? getRandomItem(badges)
      : '',
    shipping: productIdsForFreeShipping.includes(product.id)
      ? 'Free Shipping'
      : '',
  }))

  categories = await $fetch(`${apiBaseUrl}/products/categories`)

  return {
    products,
    categories,
    badges,
  }
})
