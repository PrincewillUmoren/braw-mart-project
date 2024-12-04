import { products } from "@/app/components/data"

export default function ProductDetailsPage({params}) {
    const productDesc = products.find(product => product.name.replaceAll(' ','-') == params.slug)
  return (
    <div>
        <h1>Product Description Details</h1>

        <section>
            <h2>{productDesc.name}</h2>
        </section>
    </div>
  )
}