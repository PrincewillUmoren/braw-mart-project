import Link from "next/link";
import Category from "./Category";
import MainNav from "./MainNav";
import ReachOut from "./REachOut";

export default function Navbar() {
  return (
    <div className="border-2 border-t-gray-400 p-4 mt-5">
        <nav className="flex items-center  space-x-2 text-blue-600">
            <Category/>
            <MainNav/>
            <ReachOut/>
        </nav>
    </div>
  )
}