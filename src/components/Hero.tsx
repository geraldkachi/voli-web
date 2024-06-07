"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    const {scrollYProgress, } = useScroll({
        target:ref,
        offset: ["start end", "end end"]
    })
    const scale = useTransform(scrollYProgress, [0,1], [2,1])
    return (
        <section className={` w-full h-scre mx-auto`}>
            <div className="bg-[#FAFAFA] md:bg-transparent">
            <div
                className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
            >
                <div className="flex flex-col my-7 md:my-14">
                    <p className={`text-center mt-2 text-[#00000A] text-[36px] font-extrabold md:text-7xl leading-[48.96px] md:leading-[93.6px] tracking-[-4%] md:tracking-[-5%]`}>
                        All-in-one <span className="text-[#01C467] ">Platform</span> for <br className="hidden md:block" /> everything Finance
                    </p>
                    <p className={`text-center mt-4 text-[#55555C] font-normal text-base md:text-lg leading-[28.8px] md:leading-[32.4px]`}>Empowering Your Financial Success Unleashing <br />the Power of Numbers</p>
                </div>
            </div>
            </div>
            <div className='relative'></div>
     
            <div className='relative w-full flex justify-center h-max mx-auto z-10'>
                <motion.div ref={ref} className="flex items-center justify-center sticky top-0 -z-50">
                <img src="next1.svg" className="hidden md:block left-10 md:-left-5 top-2 md:top-96 absolute z-10 cursor-pointer" alt="" />
                <img src="next1.svg" className="hidden md:block right-5 md:-right-5 top-24 absolute z-10 cursor-pointer" alt="" />
                
                        <motion.div className="flex flex-col relative -z-50 w-full overflow-hidden"  style={{transition: scale}}>
                            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813079/folder2_q70rpn.svg" className="md:h-[672.8px] w-max animate-fli" alt="" />
                            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813073/folder_x998ky.svg" className="md:h-[672.8px] w-max  top-1 absolute animate-fli" alt="" />
                            {/* <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813079/folder2_q70rpn.svg" className="md:h-[672.8px] w-max transform transition- duration-1000 hover:-rotate-180 animate-fli" alt="" />
                            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813073/folder_x998ky.svg" className="md:h-[672.8px] w-max transform transition-transform duration-1000 hover:-rotate-180  top-1 absolute animate-fli" alt="" /> */}

                            
                            {/* <img src="folder.svg" className="md:h-[500px] w-max  top-1 absolute" alt="" />
                            <img src="folder2.svg" className="md:h-[500px] w-max" alt="" /> */}
                            {/* {imageParallax.map((item, i) => {
                                const targetScale = 1 - ( (imageParallax.length - i) * 0.05);
                                return (
                                    <motion.div className=""  style={{top:``, bottom: '0', animation: scale}} key={i}>

                                    <img src={item.image} className={` w-full md:h-[500px] flex items-center justify-center`} alt="" />
                                     </motion.div>
                                    // <img style={{top:`calc(.5vh + ${i * 25}px)`}} key={i} src={item.image} className={`${i == 0 && 'top-1 absolute'} w-full md:h-[500px] flex items-center justify-center`} alt="" />
                                )
                            }) } */}
                        </motion.div>
                </motion.div>
            </div>
            <div className="h-[30hv] overflow-hidden">
            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716813252/payment-img_wfs1tl.svg" alt="payment" className="h-[30hv] z-50 w-full sm:max-w-5xl max-h-md md:max-w-none mx-auto" />
            {/* <img src="payment-img.svg" alt="payment" className="h-[30hv] z-50 w-full sm:max-w-5xl max-h-md md:max-w-none mx-auto" /> */}
            </div>
        </section>
    );
};

export default Hero;
