"use client"
import { Button } from "@/components"
import { motion } from 'framer-motion'
import StarsCanvas from "../../../components/StarCanvas/StarCanvas"
import { slideIn } from "@/app/utils/motion"

const ReadyToEnjoy = () => {
  return (
    <div className="relative z-0 bg-gradient-to-b from-[#23232B] from-10% via-black via-70% to-[#0A0A0B] 10% to-90%">
    <StarsCanvas />

    <div className=" text-center pt-20 text-white animate-text whitespace-nowrap mx-3 md:mx-0">
        <div className="flex flex-col items-center mb-10">
            <motion.p variants={slideIn('right', 'tween', 0.2, 1)} className="text-2xl md:text-5xl font-bold py-10 leading-10 lg:leading-[63px]">Ready to <span className="text-[#01C467]">Enjoy</span> the Use <br /> of <span className="text-[#01C467]">Affordability</span> of Streamlined <br /> Business Payments</motion.p>
            <Button className="btn" title="Book a Demo"  />
        </div>


        <div className="-mt-24 md:-mt-48 lg:-mt-[350px] xl:-mt-[400px] mb-20 flex items-center justify-center">
            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1716901176/dash-ready_msbuey.svg" className="hidden sm:block skew- bg-center" alt="" />
            <img src="https://res.cloudinary.com/dejquibd1/image/upload/v1717748181/dash-ready1_drg2pu.svg" className="sm:hidden block skew- bg-center" alt="" />
            {/* <img src="dash-ready1.svg" className="sm:hidden block skew- bg-center" alt="" /> */}
            {/* <img src="dash-ready.svg" className="skew- bg-center" alt="" /> */}
        </div>
    </div>





    {/* <div className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl" 
    style="width: 350px; height: 350px; margin-right: 20px; background-image: url(&quot;/imgs/computer/lights.png&quot;); background-position: center center; background-size: cover;"
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
      <span className="text-xs font-semibold uppercase text-violet-300">Lights</span><p className="my-2 text-3xl font-bold">It's lit</p>
      <p className="text-lg text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</p>
      </div>
      </div> */}

    </div>
  )
}

export default ReadyToEnjoy