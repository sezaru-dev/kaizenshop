import {create} from 'zustand'

export interface ProductType {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating : {
    rate: number
    count: number
  }
}

interface FetchProductsState {
  products: ProductType[]
  filteredProducts: ProductType[]
  electronics: ProductType[]
  jewelry: ProductType[]
  mensClothing: ProductType[]
  womensClothing: ProductType[]
  getProducts: () => void
  getElectronics: (limit?:number) => void
  getJewelry: (limit?:number) => void
  getMensClothing: (limit?:number) => void
  getWomensClothing: (limit?:number) => void
  getProductsByCategory: (category:string) => void
}

export const useFetchProductsStore = create<FetchProductsState>((set) => ({
  products: [],
  filteredProducts: [],
  electronics: [],
  jewelry: [],
  mensClothing: [],
  womensClothing: [],

  /* fetch all products */
  getProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    set(() => ({ products: data }))
  },

  /* fetch electronic products */
  getElectronics: async (limit?:number) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/electronics${limit? `?limit=${limit}` : ''}`)
    const data = await response.json()
    set(() => ({ electronics: data }))
  },

  /* fetch Jewelry products */
  getJewelry: async (limit?:number) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/jewelery${limit? `?limit=${limit}` : ''}`)
    const data = await response.json()
    set(() => ({ jewelry: data }))
  },

  /* fetch men's clothing products */
  getMensClothing: async (limit?:number) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing${limit? `?limit=${limit}` : ''}`)
    const data = await response.json()
    set(() => ({ mensClothing: data }))
  },

  /* fetch women's clothing products */
  getWomensClothing: async (limit?:number) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing${limit? `?limit=${limit}` : ''}`)
    const data = await response.json()
    set(() => ({ womensClothing: data }))
  },

  getProductsByCategory: async (category:string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    set(() => ({ filteredProducts: data }))
  },

}))