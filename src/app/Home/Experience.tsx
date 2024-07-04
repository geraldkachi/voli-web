import Image from "next/image";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  title: string
  subtitle: string
}

const Experience = ({ icon, title, subtitle }: Props) => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <Image width={53} src={icon} className="bg-[#2A2A33] p-2.5 w-[55px] h-[53px] rounded-[10px] mb-2" alt="icon" />
      <div>
        {/* <p className="text-[#022623] text-base mt-3 sm:text-lg font-medium text-wrap my-2 mb-3 leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{title}</p> */}
        {/* <p className="text-[#808080] text-xs sm:text-sm text-wrap font-normal leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{subtitle}</p> */}
        <p className="text-[#F2F2F3] text-base mt-3 sm:text-lg font-medium text-wrap my-2 mb-3 leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{title}</p>
        <p className="text-[#AAAAAD] text-xs sm:text-sm text-wrap font-normal leading-[25.2px] tracking-[-2%] md:tracking-[-1%]">{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default Experience