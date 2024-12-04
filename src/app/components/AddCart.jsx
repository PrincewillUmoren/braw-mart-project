"use client"
import { useContext } from "react"
import { SidebarContext } from "../providers"

export default function AddCart() {
    const {setCart} = useContext(SidebarContext)

    function handleCart(){
        setCart(prev => prev + 1)
    }
  return (
    <button className="mb-3 text-2xl p-4 px-6 space-x-6 rounded-sm border-red-500 border-2 w-fit hover:bg-red-500 hover:text-white" 
    onClick={handleCart}>Add to Cart</button>
  )
}