import Image from "next/image";
import { navVariants } from "../../utils/motion";
import { motion } from "framer-motion";

interface Props {
    icon: string;
    title: string
    subtitle: string
}

const Experience = ({icon, title, subtitle}: Props) => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <Image src={icon} width={55} className="bg-[#E7FDF3] p-4 rounded-[10px] my-2" alt="icon" />
        <p className="text-[#022623] text-base sm:text-lg font-medium text-wrap my-2 mb-3">{title}</p>
        <p className="text-[#808080] text-xs sm:text-sm text-wrap">{subtitle}</p>
    </motion.div>
  )
}

export default Experience