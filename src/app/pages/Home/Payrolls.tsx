import { motion } from "framer-motion"
import { Button } from "../../components"
import { fadeIn, planetVariants, textVariant } from "@/app/utils/motion"
import Image from "next/image"

interface Props {
    icon: string
    title: string
    subtitle: string
}
const Payrolls = ({icon, title, subtitle}: Props) => {
    const variants = fadeIn("right", "spring", 0.5, 0.75)

  return (
    <motion.div  className="p-8 rounded-[20px] bg-white">
      <motion.div variants={variants}>
        <motion.p className="text-[#00000A] text-lg sm:text-[32px] font-semibold text-wrap my-2 mb-5">{title}</motion.p>
        <motion.p variants={planetVariants('left')} className="text-[#808080] text-sm sm:text-base text-wrap">{subtitle}</motion.p>
      </motion.div>

        <Button title="Get Started" className="!bg-[#F2F2F3] !text-[#00000A] mt-5" />


        <img src={icon} alt="payable" className="mt-4" />
    </motion.div>
  )
}

export default Payrolls