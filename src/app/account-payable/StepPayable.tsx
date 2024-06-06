import Image from "next/image"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { faqArr } from "@/components/constants/faq-data"
import { Accordion, Button } from "@/components"
const StepPayable = () => {
    return (
        <>
            <div className="mx-3 md:mx-[unset] pl-3  max-sm:pl-3 max-lg:pl-10 lg:ml-40">
                <div className="my-10 text-2xl md:text-[40px] leading-[36px] md:leading-[64px] tracking-[-3%] pt-20 md:font-medium font-bold">
                    Facilitating seamless and <span className="md:text-[#01C467]">hassle-free payment</span> <br className="hidden lg:block" /> processes by breaking them down into just three <br className="hidden lg:block" /> simple and straightforward steps
                </div>
                <div className="grid md:grid-cols-2 gap-4 py-5">
                    <ol className="relative border-s border-gray-200 ">
                        <li className="mb-20 ms-6">
                            <span className="absolute flex items-center justify-center w-8 md:w-14 h-8 md:h-14 bg-[#01C467] text-white border-2 border-[#01C467]  rounded-full -start-[16px] md:-start-[28px]">
                                1
                            </span>
                            <div className="p-4 rounded-lg shadow-sm">
                                <div className="items-center justify-between mb-3 sm:flex">
                                    <div className="text-[20px] md:text-[32px] font-semibold leading-[32px] md:leading-[51.2px] tracking-[-2%] md:tracking-[-3%]">Add Vendors you would want to <br className="hidden lg:block" /> pay into your Business Account</div>
                                </div>
                                <div className="text-base md:text-lg font-normal text-[#AAAAAA] leading-[30.4px] md:leading-[34.2px] md:tracking-[-1%]">Enhance financial visibility and efficiency by effortlessly synchronizing bank accounts with our fintech B2B product&apos;s Bank Account Synchronization feature.</div>
                            </div>
                        </li>
                        <li className="mb-20 ms-6">
                            <span className="absolute flex items-center justify-center w-8 md:w-14 h-8 md:h-14 bg-[#FAFAFA] tex-[#AAAAAA text-[#CCCCCE] border border-[#E5E5E6]  rounded-full -start-[16px] md:-start-[28px]">
                                2
                            </span>
                            <div className="p-4 rounded-lg shadow-sm">
                                <div className="items-center justify-between mb-3 sm:flex">
                                    <div className="text-[20px] md:text-[32px] font-semibold leading-[32px] md:leading-[51.2px] tracking-[-2%] md:tracking-[-3%]">Create a Bill to be paid and <br className="hidden lg:block" /> assign in to a vendor</div>
                                </div>
                                <div className="text-base md:text-lg font-normal text-[#AAAAAA] leading-[30.4px] md:leading-[34.2px] md:tracking-[-1%]">Enhance financial visibility and efficiency by effortlessly synchronizing bank accounts with our fintech B2B product&apos;s Bank Account Synchronization feature.</div>
                            </div>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-8 md:w-14 h-8 md:h-14 bg-[#FAFAFA] tex-[#AAAAAA text-[#CCCCCE] border border-[#E5E5E6]  rounded-full -start-[16px] md:-start-[28px]">
                                3
                            </span>
                            <div className="p-4 rounded-lg shadow-sm">
                                <div className="items-center justify-between mb-3 sm:flex">
                                    <div className="text-[20px] md:text-[32px] font-semibold leading-[32px] md:leading-[51.2px] tracking-[-2%] md:tracking-[-3%]">Bills get paid automatically <br className="hidden lg:block" /> given it passes approval tiers</div>
                                </div>
                                <div className="text-base md:text-lg font-normal text-[#AAAAAA] leading-[30.4px] md:leading-[34.2px] md:tracking-[-1%]">Enhance financial visibility and efficiency by effortlessly synchronizing bank accounts with our fintech B2B product&apos;s Bank Account Synchronization feature.</div>
                            </div>
                        </li>
                    </ol>

                    <div className="rounded-lg bg-[#F7F7F7] w-full h-[750px] overflow-hidden hidden sm:block">
                        <img src="step-img-payable.svg" className="mt-20 ml-" width={650} height={700} alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto my-20 px-3">
                <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">FAQs</span>
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

        </>
    )
}

export default StepPayable