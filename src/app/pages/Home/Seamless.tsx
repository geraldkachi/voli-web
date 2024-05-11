import { motion } from 'framer-motion'
import { navVariants } from '../../utils/motion'
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
const Seamless = () => {
    return (
        <div className='max-w-5xl mx-auto'>

            <div className='grid md:grid-cols-2 gap- overflow-hidden'>
                <div className=' bg-white py-20 px-3 md:px-0'>
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">TESTIMONIALS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-[40px] font-semibold leading-9 md:leading-[60px] mt-6'>
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


                    {/* <div className="bg-white">
                        <div className="flex justify-center items-center">
                            <div className="flex relative">
                                <div className="w-72 h-96 bg-green-400 transform transition-all absolute rounded-lg hover:-left-10">
                                    
                                </div>
                                <div className="w-72 h-96 bg-yellow-400 transform transition-all absolute md:-left-8 hover:-left-10  rounded-lg">
                                    

                                </div>
                                <div className="w-72 h-96 bg-red-400 transform transition-all absolute md:-left-12 hover:-left-10  rounded-lg">
                                    

                                </div>
                                <div className="w-72 h-96 bg-black transform transition-all absolute md:-left-16 hover:-left-10  rounded-lg">
                                    

                                </div>
                                <div className="w-72 h-96 bg-purple-400 transform transition-all absolute md:-left-20 hover:-left-10 rounded-lg">
                                    
                                </div>
                                <div className="w-72 h-96 bg-white flex justify-center items-center border-2 border-black transform transition-all absolute md:-left-40 hover:-left-10  rounded-lg">                     
                                    Gerald you&apos;re a warrior
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    )
}

export default Seamless