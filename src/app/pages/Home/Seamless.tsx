import { motion } from 'framer-motion'
import { navVariants, planetVariants, staggerContainer } from '../../utils/motion'
import Image from 'next/image'
import StackedCard from './StackedCard'
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
    return (
        <div className='max-w-5xl mx-auto'>

            <div className='grid md:grid-cols-7 gap- overflow-hidden'>
                <div className='md:col-span-3 bg-white py-20 px-3 lg:px-0'>
                    <motion.span variants={planetVariants('bottom')} className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">TESTIMONIALS</motion.span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl lg:text-[30px] font-semibold leading-9 md:leading-[60px] mt-6'>
                        Facilitating seamless and <br /> into just three simple and <br /> straightforward steps
                    </motion.p>
                    <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl items-center w-max my-10">
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />

                        <p className='font-extrabold text-[28px] md:text-[32px] pl-4'>+ 12</p>
                    </div>
                </div>

                <div className='flex overflow-hidden items-center justify-center md:col-span-4'>
                    {/* <div className="flex relative gap-4">
                        {cards.map((item, i) => <StackedCard key={i} {...item} num={i} />)}
                    </div> */}


                    <div className="bg-white overflow-x-scroll md:!overflow-visible no-scrollbar">
                        <div className="flex md:justify-center">
                                <div className="md:hidden flex items-start justify-s gap-4 py-4 mb-10  text-[#909090] cursor-grab active:cursor-grabbing">
                                    {cardshiver.map((card, i) => (
                                        <div key={i} className="w-72 bg-white shadow-md transform transition-all rounded-lg mx-3 ">
                                            <div className="block max-w-sm py-6 px-3">
                                                <div className='font-semibold text-[20px] mt-10 text-[#00000A]'>{card.title}</div>
                                                <div className='mb-5'>{card.subtitle}</div>

                                                <div>
                                                    <p className="font-normal text-gray-700">{card.description}</p>
                                                    <p className="font-normal text-gray-700 mt-4">{card.desription1}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            <div className="hidden md:flex  flex-col justify-center relative py-20 pr-80 h-full">
                                <div className="w-72 h-96 bg-white shadow-md transform transition-all absolute hover:-left-28  rounded-lg">
                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div>
                                <div className="w-72 h-96 bg-white shadow-md transform transition-all absolute md:left-8 hover:-left-20  rounded-lg">
                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div>
                                <div className="w-72 h-96 bg-white shadow-md transform transition-all absolute md:left-16 hover:-left-10  rounded-lg">
                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div>
                                <div className="w-72 h-96 bg-white shadow-md transform transition-all absolute md:left-24 hover:-left-10  rounded-lg">
                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div>
                                <div className="w-72 h-96 bg-white shadow-md transform transition-all absolute md:left-[130px] hover:-left-10 rounded-lg">
                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
                                </div>
                                <div className="w-72 h-96 bg-white shadow-md flex justify-center items-center transform transition-all absolute md:left-[162px] hover:-left-10 rounded-lg">


                                    <div className="block max-w-sm p-6  mt-10">
                                        <div className='font-semibold text-[20px]'>John Brandson</div>
                                        <div>CEO | Upworks</div>

                                        <p className="font-normal text-gray-700">Our company&apos;s financial management transformed with Vollie Pay. </p>
                                        <p className="font-normal text-gray-700 mt-4">Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. </p>
                                    </div>
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