import AddCart from "@/app/components/AddCart"
import { products } from "@/app/components/data"
import { Rating } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function ProductDetailsPage({params}) {
    const productDesc = products.find(product => product.name.replaceAll(' ','-') == params.slug)

    const relatedProducts = products.filter(product => (product.category == productDesc.category && product.name !== productDesc.name)|| (product.brand == productDesc.brand && product.name !== productDesc.name))
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
        <section>

        <h2 className="text-center bg-blue-900 my-6 text-white py-6 text-4xl">Related Products</h2>
        <div className="grid grid-cols-3 gap-2">
          {relatedProducts.map(product => (
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

        </section>
    </div>
  )
}