import Image from "next/image"
import { products } from "./data"
import AddCart from "./AddCart"
import Button from "./Button"
import Link from "next/link"
import { Rating } from "@mui/material"

export default function MartDetails() {

    const productDetails =  products.sort((a,b) => b.price - a.price).map(product => (
        <section key={product.id} className="rounded-sm border-2 border-gray-500 flex flex-col space-y-4 items-center pb-4 text-center">
            <Link href={`/shop/${product.name.replaceAll(' ','-')}`}>
            <Image src={product.imageUrl} alt={product.name} width={300} height={450} className="w-[400px] h-[400px]"/>
            <h2>{product.name}</h2>
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />
            <p>&#8358;{(product.price).toLocaleString()}</p>
            </Link>
            <AddCart/>
        </section>
    )).slice(0,8)
  return (
    <>
    <div className="grid grid-cols-4 gap-4 w-5/6 m-auto">
        {productDetails}
    </div>
    <div className="flex items-center justify-center py-6">
        <Button title='View all products' shop ='/shop' style = "text-white bg-red-700 hover:text-red-700 hover:bg-white"/>
    </div>
    </>
  )
}