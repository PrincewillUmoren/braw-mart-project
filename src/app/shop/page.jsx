"use client"
import Image from "next/image"
import { products } from "../components/data"
import AddCart from "../components/AddCart"
import Link from "next/link"
import { Rating } from "@mui/material"

export default function ShopPage() {
    const productDetails =  products.map(product => (
        <section key={product.id} className="rounded-sm border-2 border-gray-500 flex flex-col space-y-4 items-center pb-4 text-center">
            <Link href={`/shop/${product.name.replaceAll(' ','-')}`}>
            <Image src={'/kayano.jpg'} alt={product.name} width={300} height={450} />
            <h2>{product.name}</h2>
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly/>
            <p>&#8358;{(product.price).toLocaleString()}</p>
            </Link>
            <AddCart/>
        </section>
    ))
  return (
    <div  className="grid grid-cols-3 gap-4 w-5/6 m-auto">
        {productDetails}
    </div>
  )
}