import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import styles from './header.module.css'
import LoginPage from "./Login";


export default function TopHeaderTwo() {
  return (
    <div className="px-6 py-8 flex items-center justify-start space-x-6">
      <div className="flex items-center text-2xl text-blue-900 space-x-4 font-bold">
        <Image src={'/header.png'} alt="logo" width={'50'} height={'50'}/>
        <p>Braw Mart Commerce</p>
      </div>

        <div className="flex items-center justify-evenly">
          <input type="text" name="search" id="search" className={`${styles.header} border-2 md:w-[500px] outline-none py-[24px] px-4`} placeholder="What are you looking for?"/>
          <div className="rounded-e-lg">
          <FaSearch className=""/>
          </div>
         
        </div>

        <div>
          <LoginPage/>
        </div>
    </div>
  )
}