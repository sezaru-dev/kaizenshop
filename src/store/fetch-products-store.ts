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
  getProducts: () => void
  getElectronics: (limit?:number) => void

  getProductsByCategory: (category:string) => void
}

export const useFetchProductsStore = create<FetchProductsState>((set) => ({
  products: [],
  filteredProducts: [],
  electronics: [],

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

  getProductsByCategory: async (category:string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    set(() => ({ filteredProducts: data }))
    console.log(data);
  },

}))