
import { createContext, useState } from 'react'
import { productsData } from '../data'

export const ShopeContext = createContext()

export function ShopeContextProvider({ children }) {
  const [products, setProducts] = useState(productsData)

  return (
    <ShopeContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ShopeContext.Provider>
  )
}

export default ShopeContextProvider
