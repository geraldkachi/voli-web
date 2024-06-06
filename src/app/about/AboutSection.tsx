import Image from 'next/image'
import AboutStepper from './AboutStepper'
import { motion } from "framer-motion";
import { navVariants } from '../utils/motion';

const AboutSection = () => {
  return (
    <div>
      <div
        className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 px-3`}
      >
        <div className="flex flex-col items-center my-7 md:my-14">
          <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">ABOUT US</div>

          <p className={`text-center mt-2 text-[#00000A] text-[28px] font-extrabold md:text-[64px] leading-9 md:leading-[80px]`}>
            Empowering <span className="text-[#01C467]">businesses</span> with <br className='hidden xl:block' /> cutting-edge fintech solutions <br className='hidden xl:block' /> and expertise
          </p>
        </div>
      </div>
      <div className='hidden sm:flex items-center gap-4 overflow-x-scroll my-10 no-scrollbar min-w-48'>
        <img src="abt-hero.svg" alt="" />
        <img src="abt-hero1.svg" alt="" />
        <img src="abt-hero3.svg" alt="" />
        <img src="abt-hero2.svg" alt="" />
      </div>
      <div className='sm:hidden flex items-center gap-4 overflow-x-scroll my-10 no-scrollbar min-w-48 bg-contain w-full'>
        <img src="abt-sub.svg" className=' w-full' alt="" />
      </div>

      <AboutStepper />
      <div className='bg-[#F8FCFA] md:bg-[#FAFAFA]'>
        <div className='max-w-5xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] pt-20 px-3 md:px-0'>
          <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">PARTNERS</span>
          <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-10 mt-6'>
            Experience the convenience of streamlining <br /> your expense management, payrolls,
          </motion.p>
        </div>

        <div className='md:max-w-5xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] sm:px-3 md:px-0'>
          <div className='flex items-center md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-1 md:gap-10 py-10'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) =>
              <div className="p-6 text-[#FAFAFA] w-40 border rounded-2xl bg-[#FAFAFA]" key={i}>{_}</div>
            )}
          </div>
        </div>
      </div>

      <div className="">
        <Image src="about-bg-play.svg" className='cursor-pointer' width={1440} height={360} objectFit='cover' alt="" />
      </div>
    </div>
  )
}

export default AboutSection