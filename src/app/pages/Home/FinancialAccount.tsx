import { Button } from "@/components"

const FinancialAccount = () => {
  return (
    <section className="bg-[#FAFAFA] md:pt-20 md:pb-10">
      <section className={` w-full h-scre bg-white max-w-6xl px-3 md:mx-auto rounded-[20px]`}>
        <div className={`flex flex-row items-center justify-center gap-5`}>
          <div className="flex flex-col my-14">
            <p className={`md:text-center mt-2 text-[#00000A] text-2xl md:text-[32px] font-semibold leading-[38.4px] md:leading-[51.2px]`}>Financial Accounting</p>
            <p className={`md:text-center mt-2 text-[#808080] font-normal md:text-base leading-[27.2px] tracking-[-1%]`}>Facilitate seamless transactions and manage funds <br className="hidden md:block" /> efficiently using Virtual Accounts on Vollie.</p>
            <Button title="Learn More" className="!bg-white border border-[#E5E5E6] !text-[#000024] mt-5 w-max  sm:hidden" suffixIcon={<><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13.6619L7 7.66187L1 1.66187" stroke="#55555C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </>} />
          </div>
        </div>



        <div className="flex  -z-20 mx-auto">
          <img src="financial_account.svg" className="md:h-[500px] w-full  top-1 " alt="" />
        </div>
      </section>
    </section>
  )
}

export default FinancialAccount