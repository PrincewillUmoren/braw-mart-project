"use client"
import { useContext } from "react"
import { SidebarContext } from "../providers"

export default function AddCart({title, id, image, price}) {
    const {setCart, cartItems, setCartItems} = useContext(SidebarContext)

    function handleCart(){
        setCart(prev => prev + 1)
        setCartItems([...cartItems,{id:id, title:title, img: image, price:price}])
    }
  return (
    <button className="mb-3 text-2xl p-4 px-6 space-x-6 rounded-sm border-red-500 border-2 w-fit hover:bg-red-500 hover:text-white" 
    onClick={handleCart}>Add to Cart</button>
  )
}