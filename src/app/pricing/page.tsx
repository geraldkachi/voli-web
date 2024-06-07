"use client";
import { faqArr } from '@/components/constants/faq-data';
import { Accordion, Button, NavBar } from '../../components'
import FooterTail from '../pages/Home/FooterTail'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import Seamless from '../pages/Home/Seamless'
import { navVariants } from '../utils/motion';
import PriceCards from './priceCards'
import { motion } from "framer-motion"


const Pricing = () => {
    return (
        <div>
            <div className="bg-[#F8FEFB] object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')]">
                <NavBar />
                <div
                className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
            >
                <div className="flex flex-col items-center my-7 md:my-14">
                <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">PRICING</div>

                    <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-7xl md:leading-[86.4px]`}>
                    Just the right price to <br /> suit any Business
                    </p>
                </div>
            </div>
            </div>
            <PriceCards />
            <div className="max-w-5xl mx-auto my-20 px-3">
                <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-xs md:text-sm font-bold leading-[19.2px] md:leading-[22.4px] tracking-[-1%]">FAQs</span>
                <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-[48px] leading-[67.2px] tracking-[-3%] mt-6 font-bold'>
                    We answered your questions so <br className="hidden lg:block" /> you don&apos;t have to ask again.
                </motion.p>


                <div className="my-10">
                      {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                          <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                      ))}
                </div>
                <Button title='View More Questions' 
                className="!bg-[#F2F2F3] !text-black !text- base"
                suffixIcon={
                    <>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 15L8.5 8L1.5 1" stroke="#00000A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </>
                } />
            </div>
            <Seamless />
            <ReadyToEnjoy />
            <FooterTail />
        </div>
    )
}

export default Pricing