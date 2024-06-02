"use client"
import { Button } from "@/components"
import { motion } from 'framer-motion'
import StarsCanvas from "../../../components/StarCanvas/StarCanvas"
import { slideIn } from "@/app/utils/motion"

const ReadyToEnjoy = () => {
  return (
    <div className="relative z-0 bg-gradient-to-b from-[#23232B] from-10% via-black via-70% to-[#0A0A0B] 10% to-90%">
    <StarsCanvas />

    <div className=" text-center pt-20 text-white animate-text whitespace-nowrap">
        <div className="flex flex-col items-center mb-10">
            <motion.p variants={slideIn('right', 'tween', 0.2, 1)} className="text-2xl md:text-5xl font-bold py-10 leading-10 lg:leading-[63px]">Ready to <span className="text-[#01C467]">Enjoy</span> the Use <br /> of <span className="text-[#01C467]">Affordability</span> of Streamlined <br /> Business Payments</motion.p>
            <Button className="btn" title="Book a Demo"  />
        </div>


        <div className="-mt-24 md:-mt-48 lg:-mt-[350px] xl:-mt-[400px] mb-20 flex items-center justify-center">
            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716901176/dash-ready_msbuey.svg" className="skew- bg-center" alt="" />
            {/* <img src="dash-ready.svg" className="skew- bg-center" alt="" /> */}
        </div>
    </div>
    </div>
  )
}

export default ReadyToEnjoy