const FinancialAccount = () => {
  return (
    <section className="bg-[#FAFAFA] md:pt-20 md:pb-10">
    <section className={` w-full h-scre bg-white max-w-5xl mx-auto rounded-[20px]`}>
            <div className={`flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col my-14">
                    <p className={`text-center mt-2 text-[#00000A] text-xl md:text-[32px] font-semibold leading-[51.2px]`}>Financial Accounting</p>
                    <p className={`text-center mt-2 text-[#808080] font-normal md:text-base leading-[27.2px]`}>Facilitate seamless transactions and manage funds <br /> efficiently using Virtual Accounts on Vollie.</p>
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