import StarsCanvas from "@/components/StarCanvas/StarCanvas"
import Image from "next/image"

const MakePayments = () => {
    return (

            <div className="object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')] bg-inherit">
        <div className="bg-[#24242C bsg-[#09090B] py-10 px-3 md:p-20 relative z-0  bg-gradient-to-b from-[#24242C] from-10% via-black via-70% to-[#09090B] 10% to-90%">
            <div className="mx-auto max-w-5xl">

                {/* <StarsCanvas /> */}
                {/* <div className='text-[28px] md:text-[48px] font-bold leading-[44.8px] md:leading-[74.4px] my-6 text-white tracking-[-3%] md:tracking-[-4%]'>Make <span className="text-[#01C467]">Payments</span> <br className="block md:hidden" /> anyway <br className="hidden md:block" /> you want.</div> */}
                <div className='text-[28px] md:text-[48px] font-bold leading-[44.8px] md:leading-[74.4px] my-6 text-white tracking-[-3%] md:tracking-[-4%]'>Settle Multiple Payments<br className="hidden md:block" /> in a Few Clicks</div>

                <div className="flex flex-col sm:flex-row items-start gap-10">
                    {/* batch one */}
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col justify-between relative !bg-[#222229] p-8 rounded-2xl h-[370px] sm:h-[450px] max-w">
                            <div>
                                <p className="text-white font-semibold text-[22.35px] md:text-[32px] leading-[35.76px] md:leading-[51.2px] tracking-[-3%]">Pay multiple Bills all at once</p>
                                <p className="text-[#AAAAAD] text-sm md:text-base leading-[23.8px] md:leading-[27.2px] tracking-[-1%]">Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay</p>
                            </div>

                            <div className="absolute bottom-0 self-end right-0">
                                <Image src="pay-mutiple.svg" className="hidden md:block rounded-br-2xl" width={300} height={300} alt="Pay" />
                            </div>

                            <div className="absolute bottom-0 self-center -mt-16">
                                <Image src="pay-mutiple2.svg" className="md:hidden" width={300} height={300} alt="Pay" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between relative !bg-[#222229] p-8 rounded-2xl h-[500px] sm:h-[572px] max-w">
                            <div>
                                <p className="text-white font-semibold text-[22.35px] md:text-[32px] leading-[35.76px] md:leading-[51.2px] tracking-[-3%]">Create & Manage Payment Approvals</p>
                                <p className="text-[#AAAAAD] text-sm md:text-base">Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay</p>
                            </div>

                            <div className="absolute bottom-0 self-end right-0 flex items-end gap-5 w-max">
                                <Image src="c&m-pic.svg" className="" width={95} height={110} alt="Pay" />
                                <Image src="c&m.svg" className="rounded-br-2xl" width={229} height={20} alt="Pay" />
                            </div>
                        </div>
                    </div>

                    {/* batch two  */}
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col justify-between relative !bg-[#222229] p-8 rounded-2xl h-[450px] sm:h-[550px] max-w">
                            <div>
                                <p className="text-white font-semibold text-[22.35px] md:text-[32px] leading-[35.76px] md:leading-[51.2px] tracking-[-3%]">Make Payment Across Borders</p>
                                <p className="text-[#AAAAAD] text-sm md:text-base">Facilitate seamless transactions and manage funds efficiently using Virtual Accounts on Vollie.</p>
                            </div>

                            <div className="absolute bottom-0 self-start left-0 w-full">
                                <Image src="world-pay.svg" className="hidden sm:block rounded-b-2xl" width={400} height={300} alt="Pay" />
                            </div>

                            <div className="absolute bottom-0 self-start left-0">
                                <Image src="world-pay2.svg" className="sm:hidden rounded-b-2xl" width={300} height={300} alt="Pay" />
                            </div>
                        </div>

                        <div className="flex flex-col relative !bg-[#222229] p-8 rounded-2xl h-80 sm:h-[473px] max-w">
                            <div>
                                <p className="text-white font-semibold text-[22.35px] md:text-[32px] leading-[35.76px] md:leading-[51.2px] tracking-[-3%]">Automated Payment Structure</p>
                                <p className="text-[#AAAAAD] text-sm md:text-base">Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MakePayments
