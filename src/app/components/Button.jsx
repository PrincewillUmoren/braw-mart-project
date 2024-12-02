import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Button({title, style, shop}) {
  return (
    <div>
        <Link href={shop}>
        <button className={`flex items-center text-2xl p-4 px-6 space-x-6 rounded-sm border-red-500 border-2 w-fit ${style}`}>
                <span>{title}</span>
                <FaArrowRight/>
            </button>
        </Link>
    </div>
  )
}