import Link from "next/link";
import FooterDetails from "./FooterDetails";

export default function Footer() {
  return (
    <footer>
        <FooterDetails/>
        <div className="text-center py-8 border-2 border-gray-400 text-lg text-blue-300">
            <p>Copyright &copy; {new Date().getFullYear()} Braw Mart | Developed by <Link href={'mailto:info@brawmart.com'} className="hover:text-gray-800">Princewill Umoren</Link></p>
        </div>
    </footer>
  )
}