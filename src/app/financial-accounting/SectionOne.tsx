import React from 'react'
import CardAccounting from './Card'
import { Button } from '@/components'
const payroll = [
    {
        icon: 'account-card.svg',
        title: 'Give your Customers Flexibility to Choose Payment Method',
        subtitle: 'Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay',
    },
    {
        icon: 'account-card1.svg',
        title: 'Easily Import your Invoices In bulk to recieve payments',
        subtitle: "Facilitate seamless transactions and manage funds efficiently using Virtual Accounts on Vollie.",
    },
]
const SectionOne = () => {
    return (
        <div>

            <div className="bg-[#FAFAFA] md:p-20 rounded-lg">

                <div className='bg-[#F8FCFA] md:bg-[#FAFAFA]'>
                    <div className='max-w-6xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] py-20 px-3 md:px-0'>

                        <div className='grid md:grid-cols-2 justify-center gap-10 py-10'>
                            {payroll.map((item, key) =>
                                <CardAccounting key={item.title}  {...item} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#FAFAFA] p-4 rounded-[20px] md:p-20'>
            <div className="grid md:grid-cols-2 gap-4 px-3 rounded-lg">
                <div>
                    <p className='font-semibold text-2xl md:text-[32px] md:leading-[57px] mb-3'>Charts <br className='hidden md:block' /> of Accounts</p>
                    <p className='text-[#808080]'>Vollie helps to organise assets, liabilities, and other financial categories, streamlining reporting, analysis, and for good audit trails.</p>

                    <Button title="Learn More" className="!bg-[#F2F2F3] !text-[#00000A] mt-5 hidden sm:block" />
                </div>
                <div>
                    <img src="chart-account.svg" alt="" />
                </div>
            </div>
            </div>

        </div>
    )
}

export default SectionOne