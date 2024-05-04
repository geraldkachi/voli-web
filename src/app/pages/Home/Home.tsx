'use client'
import { Hero, NavBar } from "../../components"
import StarsCanvas from "../StarCanvas"
import FinancialAccount from "./FinancialAccount"
import ReadyToEnjoy from "./ReadyToEnjoy"
import Seamless from "./Seamless"
import SectionOne from "./SectionOne"
import SubFooter from "./SubFooter"
import Tailored from "./Tailored"
import { createClient, CreateClientParams } from "contentful"

import { motion, useViewportScroll, useTransform } from 'framer-motion';
// var client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// })
const HomeStart = () => {

    // console.log(props, 'props title')

  // Sample logo data
  const logosLeft = ['tailored2.svg', 'tailored3.svg', 'tailored2.svg']; // Array of logos for left side
  const logosRight = ['tailored2.svg', 'tailored3.svg', 'tailored2.svg']; // Array of logos for right side

  // Logic for animation
  const { scrollXProgress } = useViewportScroll();
  const leftOffset = useTransform(scrollXProgress, [0, 1], [0, 500]);
  const rightOffset = useTransform(scrollXProgress, [0, 1], [0, -500]);

  return (
    <div className="h- z-0">
        <div className="bg-[#F8FEFB]">
            <NavBar />
            <Hero />
            <SectionOne />
            <FinancialAccount />
        </div>
            <Tailored />
            <Seamless />
            <div className="relative z-0">
            <ReadyToEnjoy />
            <StarsCanvas />
            </div>
            <SubFooter />


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


// export async function getStaticProps () {
//     const data: any = await client.getEntry(process.env.ENTRY_ID)
//     return {
//         props: {
//             title: data.fields.title || "",
//             description: data.fields.description || "",
//         }
//     }
// }