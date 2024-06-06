import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

interface Props {
    icon: string;
    title: string
    subtitle: string
}

const Experience = ({icon, title, subtitle}: Props) => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <Image width={43} src={icon} className="bg-[#E7FDF3] p-2 rounded-[10px] my-2" alt="icon" />
        <p className="text-[#022623] text-base sm:text-lg font-medium text-wrap my-2 mb-3 leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{title}</p>
        <p className="text-[#808080] text-xs sm:text-sm text-wrap leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{subtitle}</p>
    </motion.div>
  )
}

export default Experience