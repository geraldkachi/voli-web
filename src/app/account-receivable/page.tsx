'use client';
import { motion } from "framer-motion";
import { NavBar } from "../../components"
import Image from "next/image";
import { navVariants } from "../utils/motion";
import ReadyToEnjoy from "../pages/Home/ReadyToEnjoy";
import FooterTail from "../pages/Home/FooterTail";
import SecondSection from "./SecondSection";
import StepPayable from "../account-payable/StepPayable";
import Seamless from "../pages/Home/Seamless";

const AccountRecievable = () => {
    return (
        <div>
            <NavBar />
            <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col items-center my-7 md:my-14">
                    <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max"> RECEIVABLE</div>

                    <motion.p variants={navVariants}  className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:font-bold md:text-[56px] leading-[39.2px] lg:leading-[70px] tracking-[-6%]`}>
                        Get Paid and Manage Payments <br className='hidden md:block'  /> from Customers
                    </motion.p>
                    <p className={`text-center mt-2 text-[#808084] font-normal text-sm md:text-lg md:leading-[29.7px] leading-[25.2px] md:`}>Empowering Your Financial Success Unleashing <br />the Power of Numbers</p>   
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
            {/* <Image src="recievable-hero.svg" className="hidden sm:block" width={1000} height={500} alt="" /> */}
            </div>
            <Image src="recievable-hero1.svg" className="sm:hidden" width={1000} height={500} alt="" />

            <SecondSection />
            <StepPayable />
            <Seamless />
            <ReadyToEnjoy />
            <FooterTail />
        </div>
    )
}

export default AccountRecievable