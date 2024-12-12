"use client"
import Image from "next/image"
import { products } from "../components/data"
import AddCart from "../components/AddCart"
import Link from "next/link"
import { Rating } from "@mui/material"
import Navbar from "../components/Navbar"
import TopHeaderTwo from "../components/TopHeader-Two"
import TopHeader from "../components/TopHeader"
import { useContext } from "react"
import { SidebarContext } from "../providers"
import SearchError from "../components/SearchError"

export default function ShopPage() {
  const {search, setSearch} = useContext(SidebarContext)

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    const productDetails = filteredProducts.length == 0 ? (
      <SearchError />
    ) : 
    <div  className="grid grid-cols-3 gap-4 w-5/6 m-auto">
      {

        filteredProducts.map(product => (
        <section key={product.id} className="rounded-sm border-2 border-gray-500 flex flex-col space-y-4 items-center pb-4 text-center">
            <Link href={`/shop/${product.name.replaceAll(' ','-')}`}>
            <Image src={product.imageUrl} alt={product.name} width={300} height={450}  className="w-[400px] h-[400px]"/>
            <h2>{product.name}</h2>
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly/>
            <p>&#8358;{(product.price).toLocaleString()}</p>
            </Link>
            <AddCart title={product.name} id={product.id} image={product.imageUrl} price={product.price} />
        </section>
    ))
  }
    </div>
  return (
    <>
      {/* <TopHeader/> */}
      <TopHeaderTwo search = {search} handle = {(e) => handleSearch(e)}/>
      {/* <Navbar/> */}
    <div>
        {productDetails}
    </div>
    </>
  )
}