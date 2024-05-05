"use client"
import { useState } from "react";
import Button from "./button/Button"
import { navVariants } from "../utils/motion";
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
                <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain" />


                <div className="hidden md:flex items-center gap-6 lg:ml-36 text-[#55555C]">
                    <ShiftingDropDown />
                    <Link href="/pricing" className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors bg-transparent text-[#55555C] `}>
                        <span>Pricing</span>
                    </Link>
                </div>

                <div onClick={() => setNav(prev => !prev)} className="hidden md:flex items-center relative gap-x-2">
                    <Button variant="secondary" title="SignIn" />
                    <Button title="Book A Demo" />
                </div>

                <div className="md:hidden flex items-center justify-center gap-4">
                    <Button title="Book A Demo" />
                    <img src="/mobile-nav.svg" alt="menu" className="w-[48px] h-[48px] object-contain cursor-pointer" width={20} height={20} />
                </div>

            </div>
        </motion.nav>
    )
}

export default Navbar
