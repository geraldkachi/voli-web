"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./button/Button";
// const imageParallax = [
//     {
//         image: 'folder2.svg',
//     },
//     {
//         image: 'folder.svg',
//     },
// ]
const Hero = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress, } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1])
    return (
        <section className={` w-full h-scre mx-auto`}>
            <div className="bg-[#FAFAFA] md:bg-transparent">
                <div
                    className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
                >
                    <div className="flex flex-col items-center my-7 md:my-16">
                        <div className="bg-[#E7FDF3] text-[#01C467] text-sm font-bold leading-[22.4px] rounded-3xl px-4 py-2 mb-2 w-max tracking-[-1%]">DITCH THE OVERWHELM</div>
                        <p className={`text-center text-[#00000A] text-[36px] font-extrabold md:text-7xl leading-[48.96px] md:leading-[93.6px] tracking-[-4%] md:tracking-[-5%]`}>
                            Take Control Of Your <br className="hidden md:block" /> Business <span className="text-[#01C467] ">Finances</span>
                        </p>
                        {/* <p className={`text-center text-[#00000A] text-[36px] font-extrabold md:text-7xl leading-[48.96px] md:leading-[93.6px] tracking-[-4%] md:tracking-[-5%]`}>
                        All-in-one <span className="text-[#01C467] ">Platform</span> for <br className="hidden md:block" /> everything Finance
                    </p> */}
                        <p className={`text-center mt-4 text-[#55555C] font-normal text-base md:text-lg leading-[28.8px] md:leading-[32.4px]`}>With Vollie, you can create timely invoices, get paid faster, make easy <br /> payments, and organise your finances— all in one place.</p>

                        <div className="mt-5">
                            <Button title="Book A Demo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full relative flex justify-center h-max mx-auto z-10 -mb-40 sm:-mb-80'>
                <motion.div ref={ref} className="flex items-center justify-center sticky top-0 -z-50">
                    <img src="next1.svg" className="hidden md:block left-10 md:-left-[25px] top-2 md:top-96 absolute z-10 cursor-pointer" alt="" />
                    <img src="next1.svg" className="hidden md:block right-5 md:-right-[25px] top-24 absolute z-10 cursor-pointer" alt="" />

                    <motion.div className="flex flex-col relative -z-50 w-full overflow-hidden" style={{ transition: scale }}>
                        <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1720068724/aaa_zg388a.svg" className="px-3 sm:px-0  md:h-[672.8px] w-max animate-fli" alt="" />
                        {/* <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813073/folder_x998ky.svg" className="md:h-[672.8px] w-max  top-1 absolute animate-fli" alt="" /> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
