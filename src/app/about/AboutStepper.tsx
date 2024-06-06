
const AboutStepper = () => {
    return (
        <div className="bg-[#FAFAFA] py-20">

            <div className="max-w-5xl mx-auto px-3 flex items-start">
                    <img src="abt-stick.svg" className="hidden sm:block" alt="" />
                    <img src="abt-stick2.svg" className="sm:hidden" alt="" />

                <ol className="">
                    {/* <!--First item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            {/* <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div> */}
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 1</h4> */}
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                    <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">ABOUT US</div>
                           
                            <p className="mb-4 mt-2 text-[22px] md:text-[36px] tracking-[-4%] leading-[35.2px] md:leading-[57.6px] font-semibold text-[#00000A]">
                                Welcome to Vollie, the leading fintech B2B solution provider at the forefront of revolutionizing the financial landscape.
                            </p>

                        </div>
                    </li>
                    {/* <!--Second item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            {/* <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div> */}
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 2</h4> */}
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                            <p className="mb-4 mt-2 text-[22px] md:text-[36px] tracking-[-4%] leading-[35.2px] md:leading-[57.6px] font-semibold text-[#808084]">
                                With our industry expertise, we empower businesses through advanced financial technology, boosting efficiency, security, and growth.
                            </p>

                        </div>
                    </li>
                    {/* <!--Third item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            {/* <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div> */}
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 3</h4> */} 
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                            <p className="mb-4 mt-2 text-[22px] md:text-[36px] tracking-[-4%] leading-[35.2px] md:leading-[57.6px] font-semibold text-[#CCCCCE]">
                                Our dedicated team is committed to delivering innovative solutions that redefine the way businesses navigate and thrive in the digital economy.
                            </p>

                        </div>
                    </li>
                </ol>
                <img src="abt-stick1.svg" className="hidden md:block" alt="" />
            </div>
        </div>
    )
}

export default AboutStepper