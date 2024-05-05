import { Button } from "@/app/components"
import StarsCanvas from "../StarCanvas"

const ReadyToEnjoy = () => {
  return (
    <div className="relative z-0 bg-gradient-to-b from-[#23232B] from-10% via-black via-70% to-[#0A0A0B] 10% to-90%">
    <StarsCanvas />

    <div className=" text-center pt-20 text-white animate-text whitespace-nowrap">
        <div className="flex flex-col items-center mb-10">
            <p className="text-2xl md:text-5xl font-bold py-10">Ready to <span className="text-[#01C467]">Enjoy</span> the Use <br /> of <span className="text-[#01C467]">Affordability</span> of Streamlined <br /> Business Payments</p>
            <Button className="btn" title="Book a Demo"  />
        </div>


        <div className="-mt-24 md:-mt-48 lg:-mt-[350px] xl:-mt-[400px] mb-20 flex items-center justify-center">
            <img src="dash-ready.svg" className="skew- bg-center" alt="" />
        </div>
    </div>
    </div>
  )
}

export default ReadyToEnjoy