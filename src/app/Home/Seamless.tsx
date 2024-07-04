import { navVariants, planetVariants, staggerContainer } from '../utils/motion'
import Image from 'next/image'
import { motion } from 'framer-motion';
import CardStack from './CardStack';

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
        <div className="relative bg-[#F8FCFA] object-cover h-full bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')] py-10 md:py-20 bg-opacity-100">

            <div className="absolute bg-[#F8FCFA] object-cover h-full w-full top-0 bg-opacity-10" />
            <div className='max-w-6xl mx-auto h-full'>

                <div className='grid md:grid-cols-7 gap- overflow-hidden h-full'>
            
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

                    <CardStack />
                </div>

            </div>

        </div>
    )
}

export default Seamless