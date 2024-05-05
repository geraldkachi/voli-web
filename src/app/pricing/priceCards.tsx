import Image from "next/image"
import { Button } from "../components"

const PriceCards = () => {
    return (
        <div className="px-3">
                  <div
                className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
            >
                <div className="flex flex-col items-center my-14">
                <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">PRICING</div>

                    <p className={`text-center mt-2 text-[#00000A] text-5xl font-extrabold md:text-7xl`}>
                    Just the right price to <br /> suit any Business
                    </p>
                </div>
            </div>

                <div
                    className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
                    {/* Card One */}
                    <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                        <div className="p-6">
                            <p className="mt-8">
                                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-tighter">$0</span>

                                {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between gap-y-10 pt-6 pb-8 px-6">
                            <ul role="list" className="mt-4 space-y-3">
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">1 landing page included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">1,000 visits/mo</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">Access to all UI blocks</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">50 conversion actions included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">5% payment commission</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">Real-time analytics</span>
                                </li>
                            </ul>

                            <Button title="Subscribe Now~" className="bg-[#F2F2F3] text-[#2B2B33] w-full flex items-center justify-center" />
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 bg-gradient-to-b from-[#19392E] from-30% via-[#1B2522] via-90% to-[#1B2522] 10% to-90%">
                        <div className="p-6">
                            <p className="mt-8">
                                <span className="text-4xl md:text-[56px] font-bold text-white tracking-tighter">$8</span>

                                {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between gap-y-10 pt-6 pb-8 px-6">
                            {/* <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What&apos;s included</h3> */}
                            <ul role="list" className="mt-4 space-y-3">
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">All Free features</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">5 landing pages included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">50,000 visits/mo</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">1,000 conversion actions included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check-dark.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">1% payment commission</span>
                                </li>
                            </ul>
                            <Button title="Get Started" className="w-full flex items-center justify-center" />
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                        <div className="p-6">
                            <p className="mt-8">
                                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-tighter">$15</span>

                                {/* <span className="text-base font-medium text-slate-500">/mo</span> */}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between gap-y-10 pt-6 pb-8 px-6">
                            <ul role="list" className="mt-4 space-y-3">
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">All Standard features</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">20 landing pages included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">200,000 visits/mo</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">5,000 conversion actions included</span>
                                </li>
                                <li className="flex space-x-3">
                                    <Image width={26} height={26} src="price-check.svg" alt="price-check" />

                                    <span className="text-sm text-[#666666]">No payment commission</span>
                                </li>
                            </ul>
                            <Button title="Get Started" className="bg-[#F2F2F3] text-[#2B2B33] w-full flex items-center justify-center" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PriceCards