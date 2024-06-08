import React from 'react'
import CardAccounting from './Card'
import { Button } from '@/components'
import { motion } from "framer-motion"
import { navVariants, planetVariants } from '../utils/motion'

const payroll = [
    {
        icon: 'account-card.svg',
        title: 'Journals',
        subtitle: 'Empower your team with the ability to track transactions, maintain accuracy within books, provide audit trails, and assist in decision-making.',
    },
    {
        icon: 'account-card1.svg',
        title: 'Financial Reports',
        subtitle: "Vollie provides enhances accuracy and ensures compliance with regulatory requirements, optimising financial management processes efficiently.",
    },
    // {
    //     icon: 'account-card.svg',
    //     title: 'Give your Customers Flexibility to Choose Payment Method',
    //     subtitle: 'Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay',
    // },
    // {
    //     icon: 'account-card1.svg',
    //     title: 'Easily Import your Invoices In bulk to recieve payments',
    //     subtitle: "Facilitate seamless transactions and manage funds efficiently using Virtual Accounts on Vollie.",
    // },
]
const SectionOne = () => {
    return (
        <div>

            <div className="bg-[#FCFCFD] md:p-20 rounded-lg">

                <div className='bg-[#F8FCFA] md:bg-[#FCFCFD]'>
                    <div className='max-w-5xl mx-auto bg-[#F8FCFA] md:bg-[#FCFCFD] pt-20 md:py-20 px-3 md:px-0'>

                        <div className='grid sm:grid-cols-2 justify-center gap-5 pb-6 md:py-10'>
                            {payroll.map((item, key) =>
                                <CardAccounting key={item.title} {...item} index={key} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-3 md:px-0 bg-[#FCFCFD] md:bg-[#FCFCFD] md:pb-20'>
            <div className="hidden sm:grid md:grid-cols-5 gap-4 px-3 md:px-0 pl-5 rounded- bg-[#FCFCFD] md:bg-[#E7FDF3] md:pt-20 rounded-[20px] max-w-5xl mx-auto">
                <div className='col-span-2 md:pl-10'>
                    <p className='font-semibold text-xl md:text-[32px] leading-[38.4px] md:leading-[51.2px] tracking-[-3%] mb-3'>Charts of Accounts</p>
                    <p className='text-[#808080] text-sm md:text-lg leading-[23.8px] tracking-[-1%]'>Vollie helps to organise assets, liabilities, and other financial categories, streamlining reporting, analysis, and for good audit trails.</p>

                    <Button title="Learn More" className="!bg-[#F2F2F3] !text-[#00000A] mt-5 block sm:hidden" />
                </div>
                <div className='col-span-3'>
                    <img src="chart-account.svg" alt="h-[630px]" />
                </div>
            </div>

            <motion.div className={`block sm:hidden bg-[#FCFCFD] rounded-[20px] overflow-hidden border`}>
                <motion.div variants={navVariants} className="p-4 sm:p-8">
                    <motion.p className="text-[#00000A] text-lg sm:text-[28px] font-semibold leading-[38.4px] md:leading-[51.2px] text-wrap my-2 mb-3 tracking-[-3%]">Charts of Accounts</motion.p>
                    <motion.p variants={planetVariants('left')} className="text-[#808080] text-sm sm:text-base text-wrap">Vollie helps to organise assets, liabilities, and other financial categories, streamlining reporting, analysis, and for good audit trails.</motion.p>
                </motion.div>
                
                <img src='chart-account.svg' alt="payable" className={`pt-4`} />
            </motion.div>
            </div>

        </div>
    )
}

export default SectionOne