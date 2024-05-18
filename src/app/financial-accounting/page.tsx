'use client'
import { motion } from "framer-motion";
import { NavBar } from "@/components"
import Image from "next/image";
import { navVariants } from "../utils/motion";
import SectionOne from "./SectionOne";

const FinancialAccounting = () => {
  return (
    <div>
        <NavBar />
        <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col items-center my-7 md:my-14">
                    <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">ACCOUNTING</div>

                    <motion.p variants={navVariants}  className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[56px] lg:leading-[86.4px]`}>
                    Transform finance with our <br /> innovative  <span className="text-[#01C467]">Accounting</span> platform
                    </motion.p>
                    <p className={`text-center mt-4 text-[#55555C] font-normal md:text-lg leading-8`}>Revolutionize your financial management with our cutting-edge accounting software. Seamlessly <br /> record journal entries, manage ledgers, and master charts of accounts effortlessly.</p>   
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <Image src="accounting-hero.svg" className="hidden sm:block" width={1000} height={500} alt="" />
            </div>

            <SectionOne />
    </div>
  )
}

export default FinancialAccounting