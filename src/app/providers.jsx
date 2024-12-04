"use client"

import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
    const [cart, setCart] = useState(0)
  return (
    <SidebarContext.Provider value={{cart,setCart}}>
        {children}
    </SidebarContext.Provider>
  )
}
export {SidebarProviders, SidebarContext}