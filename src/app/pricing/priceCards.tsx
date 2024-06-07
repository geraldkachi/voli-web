import Image from "next/image"
import { Button } from "../../components"

const PriceCards = () => {
    return (
        <div className="px-3 md:px-0 bg-white">
            <div
                className="mt-1 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3 md:p-3 bg-[#FCFCFD]">
                {/* Card One */}
                <div className="bg-white rounded-lg shadow-sm flex flex-col">
                    <div className="p-6">
                        <p className="mt-8">
                            <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">$0.00</span>
                            <div className=" bg-[#F2F2F3] p-3 my-2 text-base rounded-lg text-[#808080] font-bold w-max tracking-[-2%] leading-[27.2px]">Free Plan</div>
                            {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                        </p>
                    </div>
                    <hr className="mx-6" />
                    <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">

                        <ul role="list" className="mt-4 space-y-3">
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">1 landing page included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">1,000 visits/mo</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">Access to all UI blocks</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">50 conversion actions included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">5% payment commission</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">Real-time analytics</span>
                            </li>
                        </ul>

                        <Button title="Subscribe Now~" className="!bg-[#F2F2F3] !text-[#2B2B33] !text-sm leading-[18px] !tracking-[-4%] w-full flex items-center justify-center" />
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-sm bg-gradient-to-b from-[#19392E] from-30% via-[#1B2522] via-90% to-[#1B2522] 10% to-90% flex flex-col">
                    <div className="p-6">
                        <p className="mt-8">
                            <span className="text-4xl md:text-[56px] font-bold text-white tracking-[-6%] leading-[89.6px]">$32.00</span>
                            <div className=" bg-[#F2F2F31F] p-3 my-2 text-base rounded-lg text-white font-bold w-max tracking-[-2%] leading-[27.2px]">Pro Plan</div>
                            {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                        </p>
                    </div>
                    <hr className="mx-6" />

                    <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">
                        <ul role="list" className="mt-4 space-y-3">
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#AAAAAD]">All Free features</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#AAAAAD]">5 landing pages included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#AAAAAD]">50,000 visits/mo</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#AAAAAD]">1,000 conversion actions included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#AAAAAD]">1% payment commission</span>
                            </li>
                        </ul>

                        <Button title="Get Started" className="!text-sm leading-[18px] !traitems-center justify-centerms-center justify-center" />                        </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm flex flex-col">
                    <div className="p-6">
                        <p className="mt-8">
                            <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">$128.00</span>

                            {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                            <div className=" bg-[#E7FDF3] p-3 my-2 text-base rounded-lg text-[#01C467] font-bold w-max tracking-[-2%] leading-[27.2px]">Enterprise Plan</div>
                        </p>
                    </div>
                    <hr className="mx-6" />
                    <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">
                        <ul role="list" className="mt-4 space-y-3">
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">1 landing page included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">1,000 visits/mo</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">Access to all UI blocks</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">50 conversion actions included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">5% payment commission</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                <span className="leading-[26.6px] font-normal tracking-[-3%] text-sm text-[#666666]">Real-time analytics</span>
                            </li>
                        </ul>
                        <Button title="Get Started" className="!bg-[#F2F2F3] !text-[#2B2B33] !text-sm leading-[18px] !tracking-[-4%] w-full flex items-center justify-center" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PriceCards