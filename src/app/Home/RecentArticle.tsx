import { motion } from "framer-motion";
import { faqArr1 } from '@/components/constants/faq-data'
import { navVariants } from "../utils/motion";
import { Accordion, Button } from "@/components";

const RecentArticle = () => {
    return (
        <>
       
        <div className="bg-[#F8FCFA]">
            <div className="max-w-5xl mx-auto">
                <div className='py-10 md:py-20 px-3'>
                    <p className='text-center text-[#808084] font-semibold text-lg leading-[22.5px] mb-10 tracking-[18%]'>Recently Published Articles</p>

                    <div className="grid sm:grid-cols-3 gap-5 items-center justify-center">
                        <div className="items-center justify-center flex">
                            <img src="recent-card1.svg" alt="recent-card" />
                        </div>
                        <div className="items-center justify-center flex">
                            <img src="recent-card2.svg" alt="recent-card" />
                        </div>
                        <div className="items-center justify-center flex">
                            <img src="recent-card1.svg" alt="recent-card" />
                        </div>
                    </div>

                </div>
            </div>
            </div>


            <div className="max-w-3xl mx-auto my-20 px-3 lg:px-0">
                <div className="flex flex-col items-center justify-center">
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-xs md:text-sm font-bold leading-[19.2px] md:leading-[22.4px] tracking-[-1%]">FAQs</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-[32px] md:text-[48px] text-center font-semibold md:font-bold tracking-[-4%] md:tracking-[-5%] leading-[135%] mt-6'>
                    We - your questions so you don&apos;t <br className='hidden md:block' />  have to ask again.
                    </motion.p>
                </div>


                <div className="my-10">
                    {faqArr1.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                            <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center">

                <Button title='View More Questions'
                    className="!bg-[#F2F2F3] !text-black !text- base"
                    suffixIcon={
                        <>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 15L8.5 8L1.5 1" stroke="#00000A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </>
                    } />
                    </div>
            </div>
       
        </>
    )
}

export default RecentArticle