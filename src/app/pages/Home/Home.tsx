import { Hero, NavBar } from "../../components"
import FinancialAccount from "./FinancialAccount"
import Seamless from "./Seamless"
import SectionOne from "./SectionOne"
import Tailored from "./Tailored"

import { motion, useViewportScroll, useTransform } from 'framer-motion';

const HomeStart = () => {

  // Sample logo data
  const logosLeft = ['tailored2.svg', 'tailored3.svg', 'tailored2.svg']; // Array of logos for left side
  const logosRight = ['tailored2.svg', 'tailored3.svg', 'tailored2.svg']; // Array of logos for right side

  // Logic for animation
  const { scrollXProgress } = useViewportScroll();
  const leftOffset = useTransform(scrollXProgress, [0, 1], [0, 500]);
  const rightOffset = useTransform(scrollXProgress, [0, 1], [0, -500]);

  return (
    <div className="h-screen">
        <div className="bg-[#F8FEFB]">
            <NavBar />
            <Hero />
            <SectionOne />
            <FinancialAccount />
        </div>
            <Tailored />
            <Seamless />

            {/* <div className="flex justify-between w-full h-max">
            <motion.div className="flex items-center" style={{ x: leftOffset }}>
                {logosLeft.map((logo, index) => (
                    <motion.img key={index} src={logo} width={100} alt={`Logo ${index}`} />
                ))}
            </motion.div>
            <motion.div className="flex items-center" style={{ x: rightOffset }}>
                {logosRight.map((logo, index) => (
                    <motion.img key={index} src={logo} width={100} alt={`Logo ${index}`} />
                ))}
            </motion.div>
        </div> */}
    </div>
  )
}

export default HomeStart