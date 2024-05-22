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

            <div className='grid md:grid-cols-2 gap- overflow-hidden'>
                <div className=' bg-white py-20 px-3'>
                    <motion.span variants={planetVariants('bottom')} className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">TESTIMONIALS</motion.span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl lg:text-[40px] font-semibold leading-9 md:leading-[60px] mt-6'>
                        Facilitating seamless and <br /> into just three simple and <br /> straightforward steps
                    </motion.p>
                    <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl items-center w-max my-10">
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />

                        <p className='font-extrabold text-[28px] md:text-[32px] pl-4'>+ 12</p>
                    </div>
                    {/* <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl">
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                        </div>
                         */}
                </div>

                <div className='flex overflow-hidden items-center justify-center'>
                    <div className="flex relative gap-4  overflow-scroll">
                        {cards.map((item, i) => <StackedCard key={i} {...item} num={i} />)}
                    </div>


                    <div className="bg-white">
                        <div className="flex justify-center items-center">
                            {/* <div className="flex relative flex-col justify-center py-20 pr-20">
                                <div className="w-72 h-72 bg-green-400 transform transition-all  bottom-0 hover:-left-10 absolute rounded-lg">

                                </div>
                                <div className="w-72 h-72 bg-yellow-400 transform transition-all hover:-left-10 absolute -bottom-0 -left-4 rounded-lg">

                                </div>
                                <div className="w-72 h-72 bg-red-400 transform transition-all hover:-left-10 absolute -bottom-0 -left-8 rounded-lg">

                                </div>
                                <div className="w-72 h-72 bg-black transform transition-all hover:-left-10 absolute -bottom-0 -left-12 rounded-lg">

                                </div>
                                <div className="w-72 h-72 bg-purple-400 transform transition-all hover:-left-10 absolute -bottom-0 -left-16 rounded-lg">
                                </div>
                                <div className="w-72 h-72 bg-white flex justify-center items-center border-2 border-black transform transition-all hover:-lef absolute -bottom-0 -left-20 rounded-lg">
                                    God is Awesome
                                </div>
                            </div> */}

                            <div className="">
                                <div className="md:hidden flex items-center justify- gap-4 py-4 mb-10  text-[#909090]">
                                    {cardshiver.map(card => (
                                        <div key={card.title} className="w-72 bg-white shadow-md transform transition-all rounded-lg mx-3">
                                            <div className="block max-w-sm p-6">
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
                            </div>

                            <div className="hidden md:flex  flex-col justify-center relative py-20 pr-80">
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