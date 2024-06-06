import { motion } from "framer-motion"
import { fadeIn, planetVariants, textVariant } from "@/app/utils/motion"
import Image from "next/image"

interface Props {
    icon: string
    title: string
    subtitle: string
    index: number
}
const CardAccounting = ({icon, title, subtitle, index}: Props) => {
    const variants = fadeIn("right", "spring", 0.5, 0.75)

  return (
    <motion.div className={`flex flex-col justify-between rounded-[20px] overflow-hidden ${index == 0 && 'md:bg-[#F8F5FF] border md:border-[#E2D4FF]'} ${index == 1 && 'md:bg-[#FFF8E5] border md:border-[#FFF8BB]'}`}>
      <motion.div variants={variants} className="p-4 md:p-8">
        <motion.p className="text-[#00000A] text-lg sm:text-[28px] font-semibold leading-[38.4px] sm:leading-[51.2px] text-wrap my-2 mb-3 tracking-[-3%]">{title}</motion.p>
        <motion.p variants={planetVariants('left')} className="text-[#808080] text-sm sm:text-base text-wrap">{subtitle}</motion.p>
      </motion.div>
     
        <img src={icon} alt="payable" className={`${index ==  0 && 'md:pl-6'} ${index == 1 && 'md:pr-6' }`} />
    </motion.div>
  )
}

export default CardAccounting