import { motion } from "framer-motion"
import { Button } from "../../components"
import { fadeIn, planetVariants, textVariant } from "@/app/utils/motion"
import Image from "next/image"
import { useState } from "react"

interface Props {
    icon: string
    title: string
    subtitle: string
    index: number
}
const Payrolls = ({icon, title, subtitle, index}: Props) => {
    const [selectedOption, setSelectedOption] = useState(0);
    const variants = fadeIn("right", "spring", 0.5, 0.75)

  return (
    <motion.div  className="flex flex-col justify-between  rounded-[20px] bg-white overflow-hidden" onMouseEnter={() => setSelectedOption(index)} onMouseLeave={() => setSelectedOption(9)}>
      <motion.div variants={variants} className="p-4 md:p-8">
        <motion.p className="text-wrap mt-2 text-[#00000A] text-2xl md:text-[32px] font-semibold leading-[38.4px] md:leading-[51.2px] tracking-[-3%] md:tracking-[-4%]">{title}</motion.p>
        <motion.p variants={planetVariants('left')} className="text-[#808080] font-normal text-sm sm:text-base text-wrap md:tracking-[-1%] leading-[170%] md:leading-[200%]">{subtitle}</motion.p>
        <Button title="Learn More" className={`${selectedOption == index && '!bg-black !text-white'} hidden sm:block !bg-[#F2F2F3] !text-[#00000A] mt-5`} />
        <Button title="Learn More"  className="!bg-white border border-[#E5E5E6] !text-[#000024] mt-5 w-max  sm:hidden" 
        suffixIcon={<>
          <svg className="ml-5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1 15L15 1M15 1H5.66667M15 1V10.3333" stroke="#2B2B33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            </>} />
      </motion.div>

      <img src={icon} alt="payable" className="mt-0 bg-contain" />
    </motion.div>
  )
}

export default Payrolls