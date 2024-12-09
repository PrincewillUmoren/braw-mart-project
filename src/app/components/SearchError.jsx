import Image from "next/image";

export default function SearchError() {
  return (
    <div className="flex  items-center justify-between font-semibold w-4/5 m-auto border-8 border-blue-800">
        <Image src='/error.avif' width={500} height={500} alt="Product not found"/>
        <p className=" text-7xl text-center h-32">Sorry the product cannot be found</p>
    </div>
  )
}