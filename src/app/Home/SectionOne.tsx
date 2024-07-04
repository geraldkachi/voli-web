import Eyes from '/public/eyes.svg'
import Level from '/public/levels.svg'
import Employee from '/public/employee.svg'
import Transactions from '/public/transactions.svg'
import Comprehensive from '/public/comprehensive.svg'
import Experience from './Experience'
import { motion } from "framer-motion";
import { navVariants, planetVariants } from "../utils/motion";
import Payrolls from './Payrolls'
import { Button } from '@/components'


const payroll = [
    {
        icon:  'payableImg.svg',
        title: 'Account Payable',
        subtitle: 'Save yourself the stress of data entry. Automate bill creation, make fast approvals, and pay yourself, your employees, and anyone else around the world within seconds.',
    },
    {
        icon:'recievable.svg',
        title: 'Accounts Receivable',
        subtitle: "Create automated invoices, simplify your payment process, and make it easy for people to pay you as soon as it’s due",
    },
]

const technologies = [
    {
        title: "Complete Cashflow Visibility",
        subtitle: "Attain total Cashflow clarity and insights in your Business.",
        icon: Eyes,
    },
    {
        title: "Multi-Level Finance Approvals",
        subtitle: "Streamline finance decisions with Multi-Level Approvals.",
        icon: Level,
    },
    {
        title: "Employee Reimbursements",
        subtitle: "Simplify expense  and reimbursement for workers.",
        icon: Employee,
    },
    {
        title: "Transactions Reconciliation",
        subtitle: "Effortlessly reconcile financial transactions with ease",
        icon: Transactions,
    },
    {
        title: "Comprehensive Financial Reporting",
        subtitle: "Generate insightful reports for better decisions",
        icon: Comprehensive,
    },
];

const SectionOne = () => {
    return (
        <>
        <div className="bg-black pt-40 sm:pt-80">
            <div className="object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/bg-lining.sv')]">
                <div className='max-w-5xl mx-auto bg-whit py-20 px-3 xl:px-0'>

                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm leading-[22.4px] tracking-[-1%] sm:hidden">PRODUCTS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-center text-white font-semibold  text-[32px] md:text-[40px] !leading-[160%] tracking-[-4%]'>Your Business Bookkeeping,
                        <br className='hidden md:block' /> Made Easier Than Ever.
                    </motion.p>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-10 py-10'>
                        {technologies.map((item) =>
                            <Experience key={item.title} {...item} />
                        )}
                    </div>
                </div>
            </div>
        </div>

            <div className='bg-[rgb(248,252,250)] md:bg-[#FAFAFA]'>
                <div className='max-w-5xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] pt-20 px-3 md:px-0'>
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm tracking-[-1%] leading-[160%]">PRODUCTS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-[38.4px] md:leading-[57.6px] mt-6 font-medium md:font-semibold'>
                    Manage Your Financial Inflows, Outflows,<br className='hidden md:block' />  And Paperworks, All In One Place
                    </motion.p>

                    <div className='grid md:grid-cols-2 justify-center gap-10 py-10'>
                        {payroll.map((item, i) =>
                            <Payrolls key={i} {...item} index={i} />
                        )}
                    </div>
                </div>
            </div>


                
            <div className='px-3 md:px-0 bg-[#FCFCFD] md:bg-[#FCFCFD] md:pb-20'>
            <div className="hidden sm:grid md:grid-cols-5 gap-4 px-3 md:px-0 pl-5 rounded- bg-[#FAFAFA] md:bg-[#FFFFFF] md:pt-20 rounded-[20px] max-w-5xl mx-auto">
                <div className='col-span-2 md:pl-10'>
                    <p className='font-semibold text-xl md:text-[32px] leading-[38.4px] md:leading-[51.2px] tracking-[-3%] mb-3'>Charts of Accounts</p>
                    <p className='text-[#808080] text-sm md:text-lg leading-[23.8px] tracking-[-1%]'>See what’s going on in your finances at a glance, organize your cash flow, and face tax season confidently, like the boss that you are.</p>

                    <Button title="Learn More" className="!bg-[#F2F2F3] !text-[#00000A] mt-5" />
                </div>
                <div className='col-span-3 bg-[#F4F4F4] pt-4 pl-4'>
                    <img src="chart-account.svg" alt="h-[630px]" />
                </div>
            </div>

            <motion.div className={`block sm:hidden bg-[#FAFAFA] rounded-[20px] overflow-hidden border`}>
                <motion.div variants={navVariants} className="p-4 sm:p-8">
                    <motion.p className="text-[#00000A] text-lg sm:text-[28px] font-semibold leading-[38.4px] md:leading-[51.2px] text-wrap my-2 mb-3 tracking-[-3%]">Charts of Accounts</motion.p>
                    <motion.p variants={planetVariants('left')} className="text-[#808080] text-sm sm:text-base text-wrap">See what’s going on in your finances at a glance, organize your cash flow, and face tax season confidently, like the boss that you are.</motion.p>
                </motion.div>
                
                <img src='chart-account.svg' alt="payable" className={`pt-4`} />
            </motion.div>
            </div>
        </>
    )
}

export default SectionOne