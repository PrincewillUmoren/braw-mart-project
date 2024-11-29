import { FaCartShopping } from "react-icons/fa6";

export default function Cart() {
  return (
    <div className="flex items-center justify-center space-x-3 capitalize text-2xl">
        <FaCartShopping/>
        <p className="text-gray-500">your cart</p>
    </div>
  )
}