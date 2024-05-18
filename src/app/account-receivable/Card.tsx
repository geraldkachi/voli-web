import { motion } from "framer-motion"
import { fadeIn, planetVariants, textVariant } from "@/app/utils/motion"
import Image from "next/image"

interface Props {
    icon: string
    title: string
    subtitle: string
    keyidx: number
}
const CardReceivable = ({icon, title, subtitle, keyidx}: Props) => {
    const variants = fadeIn("right", "spring", 0.5, 0.75)

  return (
    <motion.div  className="p-8 rounded-[20px] bg-[#F8F8F8]">
      <motion.div variants={variants}>
        <motion.p className="text-[#00000A] text-lg sm:text-[28px] font-semibold text-wrap my-2 mb-5">{title}</motion.p>
        <motion.p variants={planetVariants('left')} className="text-[#808080] text-sm sm:text-base text-wrap">{subtitle}</motion.p>
      </motion.div>
     
        <img src={icon} alt="payable" className={`mt-4 ${keyidx == 0  && '-mt-20'}  ${keyidx == 3 && '-mt-20'}`} />
    </motion.div>
  )
}

export default CardReceivable