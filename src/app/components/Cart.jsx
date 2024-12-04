"use client"
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { SidebarContext } from "../providers";

export default function Cart() {
  const {cart} = useContext(SidebarContext)
  
  return (
    <div className="flex items-center justify-center space-x-3 capitalize text-2xl">
        <div className="flex">
        <FaCartShopping/>
        <sup className="bg-red-600 text-white py-3 px-2 rounded-full">{cart}</sup>
        </div>
        <p className="text-gray-500">your cart</p>
    </div>
  )
}