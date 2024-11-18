import Link from "next/link";

export default function TopHeader() {
  return (
    <div>
        <ul className="text-lg flex md:flex-row flex-col text-white bg-blue-800 justify-between px-4 py-2">
            <li className="border-r-2 border-white pr-24">Free shipping on orders above 100,000</li>
            <li>Braw Mart is one of the largest brand. <Link href={'#'} className="font-bold">Show all products</Link></li>
            <li><Link href={'#'} className="font-bold">Privacy Policy</Link></li>
        </ul>
    </div>
  )
}