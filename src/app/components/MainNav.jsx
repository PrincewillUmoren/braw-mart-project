import Link from "next/link";

export default function MainNav() {
  return (
    <ul className="flex items-center justify-center gap-x-6 text-lg border-x-2 border-x-gray-500 capitalize md:px-16">
        <li><Link href={'/'}>home</Link></li>
        <li><Link href={'/about'}>about us</Link></li>
        <li><Link href={'/shop'}>shop</Link></li>
        <li><Link href={'/blog'}>blog</Link></li>
        <li><Link href={'/contact'}>contact</Link></li>
    </ul>
  )
}