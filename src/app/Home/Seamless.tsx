// import { motion } from 'framer-motion'
import { navVariants, planetVariants, staggerContainer } from '../utils/motion'
import Image from 'next/image'
import StackedCard from './StackedCard'
import { useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const cards = [
    {
        title: 'Noteworthy technology acquisitions 2021',
        subtitle: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        subtitle: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        subtitle: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        subtitle: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
]

const cardshiver = [
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        description: 'Our company&apos;s financial management transformed with Vollie Pay.',
        desription1: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier.'

    },
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        description: 'Our company&apos;s financial management transformed with Vollie Pay.',
        desription1: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier.'

    },
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        description: 'Our company&apos;s financial management transformed with Vollie Pay.',
        desription1: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier.'

    },
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        description: 'Our company&apos;s financial management transformed with Vollie Pay.',
        desription1: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier.'

    },
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        description: 'Our company&apos;s financial management transformed with Vollie Pay.',
        desription1: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier.'

    },
]
const Seamless = () => {
    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);
    const [isHoveredFour, setIsHoveredFour] = useState(false);

    const controls = useAnimation();

    const handleHover = () => {
      controls.start({
        x: '-100%', // Adjust the value to control the distance of the animation
        transition: { duration: 0.3 }, // Adjust the duration of the animation
      });
    };

    const handleHoverEnd = () => {
        controls.start({ x: 0, transition: { duration: 0.3 } });
      };
    

    return (
        <div className="relative bg-[#F8FCFA] object-cover h-full bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')] py-10 md:py-20 bg-opacity-100">


            <div className="absolute bg-[#F8FCFA] object-cover h-full w-full top-0 bg-opacity-10" />
            <div className='max-w-6xl mx-auto h-full'>




                <div className='grid md:grid-cols-7 gap- overflow-hidden h-full'>
                  {/* <div className='md:col-span-3'>
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverEnd}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Card />
      </motion.div>
      <AnimatePresence>
        {[1, 2, 3,4,5,6].map((index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={controls}
            exit={{ x: 0 }}
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <Card />
          </motion.div>
        ))}
      </AnimatePresence>
    </div> */}
                    <div className='md:col-span-3 bg- md:py-20 px-3 lg:px-0 pt-5 !z-50'>
                        <motion.span variants={planetVariants('bottom')} className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white font-bold text-xs md:text-sm leading-[22.4px] tracking-[-1%]">TESTIMONIALS</motion.span>
                        <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl lg:text-[40px] font-semibold leading-9 md:leading-[55px] mt-6'>
                            Facilitating seamless and into just three simple and straightforward steps
                        </motion.p>
                        <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl items-center w-max my-10">
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="circle01.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="circle02.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="circle03.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="circle01.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="circle02.svg" alt="" />

                            <p className='font-extrabold text-[28px] md:text-[32px] pl-4'>+ 12</p>
                        </div>
                    </div>

                    <div className='flex overflow-hidden md:overflow-visible items-center justify-center md:col-span-4'>
                        {/* <div className="flex relative gap-4">
                        {cards.map((item, i) => <StackedCard key={i} {...item} num={i} />)}
                    </div> */}


                        <div className="overflow-x-scroll md:!overflow-visible no-scrollbar -z-5">
                            <div className="flex md:justify-center">
                                <div className="md:hidden flex items-start justify-s gap-4 py-4 mb-10  text-[#909090] cursor-grab active:cursor-grabbing">
                                    {cardshiver.map((card, i) => (
                                        <div key={i} className="w-72 bg-white shadow-md transform transition-all rounded-lg mx-3 ">
                                            <div className="block max-w-sm py-6 px-3">
                                                <div className='font-bold md:font-bold text-[20px] mt-20 text-[#00000A] tracking-[-1%] leading-[28px]'>{card.title}</div>
                                                <div className='mb-5 text-[#AAAAAD] font-medium tracking-[-1%] text-sm leading-[19.6px]'>{card.subtitle}</div>

                                                <div className='text-[#AAAAAD] font-medium tracking-[-1%] text-sm leading-[19.6px]'>
                                                    <p className="">{card.description}</p>
                                                    <p className=" mt-4">{card.desription1}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden md:flex  flex-col justify-center relative py-20 pr-80 h-full !z-50">
                                    <div onMouseEnter={() => {
                                        setIsHoveredOne(true)
                                    }
                                    }
                                        onMouseLeave={() => {
                                            setIsHoveredOne(false)
                                            // setIsHoveredTwo(false)
                                        }} className={`${isHoveredOne && 'transform transition-all duration-75 hover:-right-60'} w-72 pb-3 bg-white shadow-md absolute md:-left-36 hover:-lef-60 rounded-lg drop-shadow-[0_122.96px_307.39px_rgba(233,233,233,0.1)]`}>
                                        <div className="block max-w-sm p-6  mt-40">
                                            <div>
                                                <div className='text-[#00000A] text-[20px] font-bold leading-[28px] tracking-[-1%]'>Emily Roberts</div>
                                                <div className='text-[#AAAAAD] font-medium text-sm leading-[19.6px] tracking-[-1%]'> CTO | InnovateNow Corp</div>
                                            </div>

                                            <div className="mt-4 text-[#808080] font-normal text-sm leading-[25.2px] tracking-[-1%]">
                                                <p className="">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                                <p className="mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onMouseEnter={() => {
                                        setIsHoveredOne(true)
                                    }
                                    }
                                        onMouseLeave={() => {
                                            setIsHoveredOne(false)
                                            // setIsHoveredTwo(false)
                                        }} className={`${isHoveredTwo && 'transform transition-all duration-75 hover:-right-96'} w-72 pb-3 bg-white shadow-md absolute md:-left-8 rounded-lg dr3p-shadow-2xl backdrop-blur-sm`}>
                                        <div className="block max-w-sm p-6  mt-40">
                                            <div>
                                                <div className='text-[#00000A] text-[20px] font-bold leading-[28px] tracking-[-1%]'>Emily Roberts</div>
                                                <div className='text-[#AAAAAD] font-medium text-sm leading-[19.6px] tracking-[-1%]'> CTO | InnovateNow Corp</div>
                                            </div>

                                            <div className="mt-4 text-[#808080] font-normal text-sm leading-[25.2px] tracking-[-1%]">
                                                <p className="">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                                <p className="mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onMouseEnter={() => {
                                        setIsHoveredOne(true)
                                    }
                                    }
                                        onMouseLeave={() => {
                                            setIsHoveredOne(false)
                                            // setIsHoveredTwo(false)
                                        }} className={`${isHoveredThree && 'transform transition-all duration-75 hover:left-28'} w-72 pb-3 bg-white shadow-md absolute md:left-20 hover:-lef-32  rounded-lg drop-shadow-[0_122.96px_307.39px_rgba(233,233,233,0.1)]`}>
                                        <div className="block max-w-sm p-6  mt-40">
                                            <div>
                                                <div className='text-[#00000A] text-[20px] font-bold leading-[28px] tracking-[-1%]'>John Brandson</div>
                                                <div className='text-[#AAAAAD] font-medium text-sm leading-[19.6px] tracking-[-1%]'> HR Manage |  GlobalTech Solutions</div>
                                            </div>

                                            <div className="mt-4 text-[#808080] font-normal text-sm leading-[25.2px] tracking-[-1%]">
                                                <p className="">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                                <p className="mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div onMouseEnter={() => {
                                        setIsHoveredOne(true)
                                    }
                                    }
                                        onMouseLeave={() => {
                                            setIsHoveredOne(false)
                                            // setIsHoveredTwo(false)
                                        }} className={`${isHoveredFour && 'transform transition-all duration-75 hover:left-60'} w-72 pb-3 bg-white shadow-md absolute md:left-48 hover:-lef- rounded-lg drop-shadow-[0_122.96px_307.39px_rgba(233,233,233,0.1)]`}>
                                        <div className="block max-w-sm p-6  mt-40">
                                            <div>
                                                <div className='text-[#00000A] text-[20px] font-bold leading-[28px] tracking-[-1%]'>John Brandson</div>
                                                <div className='text-[#AAAAAD] font-medium text-sm leading-[19.6px] tracking-[-1%]'> CEO | Upworks</div>
                                            </div>

                                            <div className="mt-4 text-[#808080] font-normal text-sm leading-[25.2px] tracking-[-1%]">
                                                <p className="">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                                <p className="mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="w-72 h-96 bg-white text-[20px] font-bold leading-[28px] tracking-[-1%] shadow-md flex justify-center items-center transform transition-all absolute md:left-[262px] hover:-left-10 rounded-lg">
                                    <div className="block max-w-sm p-6  mt-28">
                                    <div className='text-[20px] font-bold leading-[28px] tracking-[-1%]'>John Brandson</div>
                                    <div>CEO | Upworks</div>
                                    
                                    <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                    <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Seamless

const Card = () => {
    return <div style={{ width: 200, height: 300, backgroundColor: 'gray' }} />;
  };