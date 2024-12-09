"use client"

import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
    const [cart, setCart] = useState(0)
    const [search, setSearch] = useState('braw')
  return (
    <SidebarContext.Provider value={{cart,setCart, search, setSearch }}>
        {children}
    </SidebarContext.Provider>
  )
}
export {SidebarProviders, SidebarContext}