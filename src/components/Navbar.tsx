"use client"
import { useState } from "react";
import Button from "./button/Button"
import { navVariants } from "../app/utils/motion";
import { motion } from "framer-motion";
import { ShiftingDropDown } from "./DropdownTab/DropdownTab";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    console.log(nav)
    return (
        <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`py-4 px-3 relative max-w-6xl mx-auto`}>
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className={`mx-auto flex justify-between gap-8`}>
                <a href="/" className="cursor-pointer" >
                    <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain" onClick={() => { }} />
                </a>


                <div className="hidden md:flex items-center gap-6 lg:ml-36 text-[#55555C]">
                    <ShiftingDropDown />
                    <Link href="/pricing" className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors bg-transparent text-[#55555C] `}>
                        <span>Pricing</span>
                    </Link>
                </div>

                <div onClick={() => setNav(prev => !prev)} className="hidden md:flex items-center relative gap-x-2">
                    <Button variant="secondary" title="Sign In" />
                    <Button title="Book A Demo" />
                </div>

                <div className="md:hidden flex items-center justify-center gap-4">
                    <Button title="Book A Demo" />
                    <img src="/mobile-nav.svg" alt="menu" onClick={() => setNav(!nav)} className="w-[48px] h-[48px] object-contain cursor-pointer" width={20} height={20} />
                </div>


                <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full z-20 border-r bg-black ease-in-out duration-500 shadow-lg' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                   <div className="flex flex-col justify-between h-full">
                    <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 flex items-center justify-between bg-[#2A2A33]'>
                            <a href="/" className="cursor-pointer" >
                                <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain" onClick={() => { }} />
                            </a>
                            <Image src="nav-cancel.svg" width={14} height={56} alt="navx" onClick={() => setNav(!nav)} className="w-[56px] h-[56px] object-contain" />
                        </h1>
                        <li className='p-4 text-white '><Link href="/" >Company</Link></li>
                        <li className='p-4 text-white ' onClick={() => setNav(!nav)}>Products</li>
                        <li className='p-4 text-white '>Pricing</li>
                        <li className='p-4 text-white '>FAQs</li>
                        <li className='p-4 text-white '>Resources</li>
                    </div>


                   <div className='w-full grid grid-cols-2  gap-6 bg-[#2A2A33] p-4'>
                        <Button title="Sign In" className="flex items-center justify-center !text-white !bg-transparent !border !border-white" />
                        <Button title="Book A Demo" className="flex items-center justify-center" />
                    </div> 
                   </div>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar
