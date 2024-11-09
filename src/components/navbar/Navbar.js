"use client"
import React, { useState } from 'react'
import ToggleDarkMode from '../ToggleDarkMood'
import Link from 'next/link'

export default function Navbar() {
    const [isToggle, setIsToggle] = useState(false)
  return (
    <nav className={ `fixed top-[-70px] left-[50%] translate-x-[-50%] opacity-0 z-[99999] transition-all duration-200  dark:bg-[#13131379] bg-[#e8e6e6a7] md:w-[80%] w-[90%] overflow-hidden  py-5 px-7 mx-auto rounded-2xl  backdrop-blur-lg dark:border-[#2f2f2f] border-[.5px] border-[#cecece] ${isToggle?"h-[270px]":"h-[75px]"}`}>
    <div className=" flex justify-between items-center">
      <Link href={""} className="nav-logo font-bold text-[24px] dark:text-white text-black w-[25%]">DriveElite</Link>
      <ul className=" items-center gap-6 hidden lg:flex w-[50%] justify-center  ">
        <li><Link href={""} className="dark:text-white text-black font-semibold text-[18px]">Home</Link></li>
        <li><Link href={""} className="dark:text-white text-black font-semibold text-[18px]">Cars</Link></li>
        <li><Link href={""} className="dark:text-white text-black font-semibold text-[18px]">Our Services</Link></li>
        <li><Link href={""} className="dark:text-white text-black font-semibold text-[18px]">Contact us</Link></li>
      </ul>
      
     <div className="btns-group flex 
      items-center gap-5 w-[25%] justify-end">
      <div className="dark-mode-toggle">
     <ToggleDarkMode/>
      </div>
      <button onClick={()=>setIsToggle(!isToggle)} className="block lg:hidden  dark:text-white text-black text-[24px]"><i className="fa-solid fa-bars"></i></button>
     </div>
    </div>
    <div className={`lg:hidden responsive-linkes flex justify-center absolute left-0 w-full px-[1.75rem] transition-all duration-1000  ${isToggle?" top-[53%] translate-y-[-40%] opacity-100":"hidden opacity-0"}`}>
        <ul className='flex flex-col justify-between  items-start w-full '>
            <li className='boreder border-b-[0.2px] border-[#3f3f3f] w-[100%] py-3 '><Link href={"#"} className='dark:text-white text-black font-medium text-[18px]'>Home</Link></li>
            <li className='boreder border-b-[0.2px] border-[#3f3f3f] w-[100%] py-3 '><Link href={"#"} className='dark:text-white text-black font-medium text-[18px]'>Cars</Link></li>
            <li className='boreder border-b-[0.2px] border-[#3f3f3f] w-[100%] py-3 '><Link href={"#"} className='dark:text-white text-black font-medium text-[18px]'>Our Services</Link></li>
            <li className=' w-[100%] py-3 '><Link href={"#"} className='dark:text-white text-black font-medium text-[18px]'>Contact us</Link></li>
        </ul>
    </div>
  </nav>
  )
}
