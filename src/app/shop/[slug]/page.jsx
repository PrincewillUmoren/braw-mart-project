import { products } from "@/app/components/data"
import { Rating } from "@mui/material"
import Image from "next/image"

export default function ProductDetailsPage({params}) {
    const productDesc = products.find(product => product.name.replaceAll(' ','-') == params.slug)
  return (
    <div>

        <section className="flex items-start space-x-4">
          <div>
          <Image src={productDesc.imageUrl} alt={productDesc.name} width={700} height={450}  
          className="md:w-[700px] md:h-[500px] w-[200px] h-[200px]"
          />
          </div>

          <div className="flex flex-col space-y-3 text-lg">
            <h2 className="text-3xl text-blue-900">{productDesc.name}</h2>
            <Rating name="half-rating-read" defaultValue={productDesc.rating} precision={0.1} readOnly/>

            <p className=" text-red-700">&#8358;{productDesc.price.toLocaleString()}</p>


            <ul className="py-8 border-t-4 border-gray-500">

            {
              productDesc.description.map((product,index) => (
                <li key={index} className="flex items-center justify-start space-x-2 py-3">
                  <Image src={productDesc.imageUrl} alt="icon" width={50} height={50} 
                  className="rounded-full w-[50px] h-[50px]"/>
                  <span>{product}</span>
                </li>
              ))
            }
            </ul>
          </div>
        </section>
        <h1>Product Description Details</h1>
    </div>
  )
}