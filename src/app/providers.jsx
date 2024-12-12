"use client"

import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
    const [cart, setCart] = useState(0)
    const [search, setSearch] = useState('')
    const [cartList, setCartList] = useState(false)
    const [cartItems, setCartItems] = useState([])
  return (
    <SidebarContext.Provider value={{cart,setCart, search, setSearch, cartItems, setCartItems, cartList, setCartList }}>
        {children}
    </SidebarContext.Provider>
  )
}
export {SidebarProviders, SidebarContext}