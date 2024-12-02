import Button from "./Button";

export default function Products() {
  return (
    <div>
        <div className="flex items-center justify-between px-6 py-10">
            <h2 className="text-blue-800 font-bold text-3xl capitalize">Trending Products</h2>

            <Button title="View all" style="hover:text-white hover:bg-red-700 text-red-700 bg-white" shop='/shop'/>
        </div>
    </div>
  )
}