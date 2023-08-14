type Rating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  price: string
  description: string
  category: string
  image: string
  rating: Rating
  badge: string
  shipping: string
}

export type Products = Product[]

export type Store = {
  products: Products
  categories: string[]
}
