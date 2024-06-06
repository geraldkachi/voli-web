import { motion } from "framer-motion"
import { Button } from "../../../components"
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
        <motion.p className="text-[#00000A] text-lg sm:text-[32px] font-semibold text-wrap my-2 mb-5">{title}</motion.p>
        <motion.p variants={planetVariants('left')} className="text-[#808080]  text-sm sm:text-base text-wrap">{subtitle}</motion.p>
        <Button title="Get Started" className={`${selectedOption == index && '!bg-black !text-white'} !bg-[#F2F2F3] !text-[#00000A] mt-5`} />
      </motion.div>

    {/* <div>{index} key</div> */}

        <img src={icon} alt="payable" className="mt-0 bg-contain" />
    </motion.div>
  )
}

export default Payrolls