import Image from "next/image";
import Button from "./Button";



export default function MainHeader() {
  return (
    <div className="bg-blue-900 text-white text-4xl flex md:flex-row flex-col items-center justify-around px-8 h-[90vh]">
        <div className="flex flex-col md:space-y-8">
            <p className="text-orange-400">New Arrival</p>
            <h2 className="text-7xl">Atmos X Asics Gel Kayano 14</h2>

            <p className="text-orange-400">&#8358;{(100000).toLocaleString()}</p>

            <Button title="Buy Now" style="text-white bg-red-700 hover:text-red-700 hover:bg-white" shop='/shop/Atmos-X-Asics-Gel-Kayano-14'/>
        </div>
        <div>
            <Image src={'/kayano.jpg'} alt="kayano footwear" width={500} height={500} 
            className="rounded-full"/>
        </div>
    </div>
  )
}