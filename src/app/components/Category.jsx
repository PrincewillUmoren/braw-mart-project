import Link from "next/link"
import { TbCategory } from "react-icons/tb";

export default function Category() {
  return (
    <ul>
    <li className="cursor-pointer flex items-center space-x-4 uppercase text-blue-500 px-6 ">
            <TbCategory className="text-3xl"/>
            <span className="text-lg">Browse all categories</span>
    </li>
</ul>
  )
}