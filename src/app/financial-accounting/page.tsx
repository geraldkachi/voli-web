'use client'
import Eyes from '/public/eyes.svg'
import Level from '/public/levels.svg'
import Employee from '/public/employee.svg'
import Transactions from '/public/transactions.svg'
import Comprehensive from '/public/comprehensive.svg'
import { motion } from "framer-motion";
import { Accordion, Button, NavBar } from "@/components"
import Image from "next/image";
import { navVariants } from "../utils/motion";
import SectionOne from "./SectionOne";
import Experience from './Experince'
import { faqArr } from '@/components/constants/faq-data'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import FooterTail from '../pages/Home/FooterTail'


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


const FinancialAccounting = () => {
  return (
    <div>
      <NavBar />
      <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
        <div className="flex flex-col items-center my-7 md:my-14 px-3 sm:px-0">
          <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">ACCOUNTING</div>

          <motion.p variants={navVariants} className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[56px] lg:leading-[86.4px]`}>
            Transform finance with our <br className='hidden md:block' /> innovative  <span className="text-[#01C467]">Accounting</span> platform
          </motion.p>
          <p className={`text-center mt-4 text-[#55555C] font-normal md:text-lg leading-8`}>Revolutionize your financial management with our cutting-edge accounting software. Seamlessly <br className='hidden md:block' /> record journal entries, manage ledgers, and master charts of accounts effortlessly.</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Image src="https://res.cloudinary.com/dejquibd1/image/upload/v1716900712/accounting-hero_nrgwgz.svg" className="hidden sm:block" width={1000} height={500} alt="" />
        <Image src="https://res.cloudinary.com/dejquibd1/image/upload/v1716900806/account-hero1_c75cc3.svg" className="sm:hidden" width={1000} height={500} alt="" />
        {/* <Image src="accounting-hero.svg" className="hidden sm:block" width={1000} height={500} alt="" />
        <Image src="account-hero1.svg" className="sm:hidden" width={1000} height={500} alt="" /> */}
      </div>

      <SectionOne />
      <div className='bg-white'>
        <div className='max-w-5xl mx-auto bg-white py-20 px-3 md:px-0'>
          {/* <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">PRODUCTS</span> */}
          <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-[38.4px] md:leading-[57.6px] mt-6 font-medium md:font-semibold tracking-[-4%]'>Experience the convenience of streamlining your expense
            <br className='hidden md:block' /> management, payrolls, multi-level approvals, and more,
            <br className='hidden md:block' /> making your financial tasks a breeze!</motion.p>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-10 py-10'>
            {technologies.map((item) =>
              <Experience key={item.title} {...item} />
            )}
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto my-20 px-3 sm:px-0">
        <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">FAQs</span>
        <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-4xl leading-10 mt-6'>
          We answered your questions so <br className='hidden md:block' /> you don&apos;t have to ask again.
        </motion.p>


        <div className="my-10">
          {faqArr.map((item, index) => (
            <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
              <p className="pb-4 text-[#676767]">{item?.content}</p>
            </Accordion>
          ))}
        </div>

        <Button title='View More Questions' 
                className="!bg-[#F2F2F3] !text-black !text- base"
                suffixIcon={
                    <>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 15L8.5 8L1.5 1" stroke="#00000A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </>
                } />
      </div>

      <ReadyToEnjoy />
      <FooterTail />
    </div>
  )
}

export default FinancialAccounting