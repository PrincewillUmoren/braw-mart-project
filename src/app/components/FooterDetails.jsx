import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



export default function FooterDetails() {
  return (
    <div className="grid grid-cols-[3fr_1fr_1fr_2fr] gap-x-5 text-[26px] px-8 py-10 bg-gray-100">
        <div className="text-gray-500 text-[24px] leading-9 px-4">
            <h2 className="text-2xl text-blue-900 capitalize py-4">Braw Mart</h2>
            <p>Braw Mart is a one-stop solution for all your shopping needs, offering a wide range of products including clothing, fashion items, home accessories, laptops, and more. When you think of Braw Mart, you think of quality, convenience, and the perfect blend of style and functionality.</p>

            <ul className="flex items-center space-x-4">
                <li className="rounded-full border-2 border-gray-400 p-4">
                    <FaFacebookSquare/>
                </li>
                <li className="rounded-full border-2 border-gray-400 p-4">
                    <FaInstagramSquare/>
                </li>
                <li className="rounded-full border-2 border-gray-400 p-4">
                    <FaXTwitter />
                </li>
                <li className="rounded-full border-2 border-gray-400 p-4">
                    <MdEmail/>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-blue-900 capitalize py-4">useful links</h2>
            <ul className="capitalize text-lg">
                <li><Link href='/about'>about</Link></li>
                <li><Link href='/contact'>contact</Link></li>
                <li><Link href='/shop'>shop</Link></li>
            </ul>
        </div>
        <div>
        <h2 className="text-2xl text-blue-900 capitalize py-4">quick links</h2>
            <ul className="capitalize text-lg">
                <li><Link href='/faq'><abbr title="Frequently Asked questions">FAQs</abbr></Link></li>
                <li><Link href='/log-in'>log-in</Link></li>
                <li><Link href='/license'>licensing</Link></li>
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-blue-900 capitalize py-4">contact details</h2>
            <address>Harmony Estate Lagos Nigeria</address>
            <aside>
                <h3 className="text-2xl text-blue-900 capitalize py-4">contact addresses</h3>
                <p><Link href="tel:+2348149068280">+2348149068280</Link></p>
                <p><Link href="mailto:info@brawmart.com">Braw Mart</Link></p>
            </aside>
        </div>
    </div>
  )
}