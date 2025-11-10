import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { HiUserAdd } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";






const Navbar = () => {
  return (
    <nav>
        <div className="main_div py-7">
            <div className="container">
                <div className="navbar_row flex justify-between items-center">
                    <div className="logo_col">
                        <Link href="#">
                            <Image
                            src="/main_logo.png"   // ✅ include file extension
                            width={185}
                            height={41}
                            alt="main_logo"
                            />

                        </Link>
                    </div>
                    
                    <div className="menu">
                        <ul className='flex gap-[75px] text-[#000000] font-medium text-lg font-primary'>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Shop</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="menu_btn">
                       <ul className="flex gap-12 items-center">
                            <li><Link href="#"><HiUserAdd className="w-[28px] h-[28px]" /></Link></li>
                            <li><Link href="#"><CiSearch className="w-[28px] h-[28px]" /></Link></li>
                            <li><Link href="#"><FaRegHeart className="w-[28px] h-[28px]" /></Link></li>
                            <li><Link href="#"><BsCartFill className="w-[28px] h-[28px]" /></Link></li>
                            </ul>

                    </div>
                </div>
            </div>
        </div>
    
      
    </nav>
  )
}

export default Navbar
