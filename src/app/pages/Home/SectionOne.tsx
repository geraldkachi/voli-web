import Eyes from '/public/eyes.svg'
import Level from '/public/levels.svg'
import Employee from '/public/employee.svg'
import Transactions from '/public/transactions.svg'
import Comprehensive from '/public/comprehensive.svg'
import Experience from './Experience'
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import Payrolls from './Payrolls'


const payroll = [
    {
        icon:  'payableImg.svg',
        title: 'Payables',
        subtitle: 'Effortlessly control and optimize your business expenses with our integrated Expense.',
    },
    {
        icon:'recievable.svg',
        title: 'Recievables',
        subtitle: "Seamlessly secure approvals at multiple levels with our fintech B2B product's Multi-Level Approval feature.",
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
            <div className='bg-white'>
                <div className='max-w-5xl mx-auto bg-white py-20 px-3 md:px-0'>
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">PRODUCTS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-10 mt-6'>Experience the convenience of streamlining your expense
                        <br /> management, payrolls, multi-level approvals, and more,
                        <br /> making your financial tasks a breeze!</motion.p>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-10 py-10'>
                        {technologies.map((item) =>
                            <Experience key={item.title} {...item} />
                        )}
                    </div>
                </div>
            </div>

            <div className='bg-[#F8FCFA] md:bg-[#FAFAFA]'>
                <div className='max-w-5xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] py-20 px-3 md:px-0'>
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">PRODUCTS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-10 mt-6'>
                        Experience the convenience of streamlining <br /> your expense management, payrolls,
                    </motion.p>

                    <div className='grid md:grid-cols-2 justify-center gap-10 py-10'>
                        {payroll.map((item) =>
                            <Payrolls key={item.title} {...item} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne