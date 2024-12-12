"use client"
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { SidebarContext } from "../providers";

export default function Cart() {
  const {cart,cartList, setCartList} = useContext(SidebarContext)

  function handleCartList(){
    setCartList(!cartList)
  }
  
  return (
    <div className="flex items-center justify-center space-x-3 capitalize text-2xl cursor-pointer" onClick={handleCartList}>
        <div className="flex  h-[50px]">
        <FaCartShopping className="self-center"/>
        <span className="self-start bg-red-600 text-white px-2 rounded-full">{cart}</span>
        </div>
        <p className="text-gray-500 text-lg">your cart</p>
    </div>
  )
}