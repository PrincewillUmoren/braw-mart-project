import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

export default function LoginPage() {
  return (
    <Link href='/Login'>
    <div className="flex items-center space-x-4 justify-center pl-10">
        <div>
            <FaRegUser className="text-blue-950 font-semibold text-2xl"/>
        </div>
        <div className="flex flex-col justify-start text-lg">
            <p className="text-gray-500">Login</p>
            <p>Account</p>
        </div>
    </div>
    </Link>
  )
}