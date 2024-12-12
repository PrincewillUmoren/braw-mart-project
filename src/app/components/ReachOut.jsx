import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function ReachOut() {
  return (
    <ul className="flex items-center space-x-6 text-lg px-10">
        <li>
            <Link href="tel:+2348149068280" className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-400 font-bold"/>
            <span>Call: +2348149068280</span>
            
        </Link>
        </li>
        <li>
            <Link href="mailto:info@brawmart.com" className="flex items-center space-x-2">
            <MdEmail/>
            <span>Email: info@brawmart.com</span>
        </Link>
        </li>
    </ul>
  )
}