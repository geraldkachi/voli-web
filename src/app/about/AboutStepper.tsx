
const AboutStepper = () => {
    return (
        <div className="bg-[#FAFAFA] py-20">

            <div className="max-w-6xl mx-auto px-3">

                <ol className="border-l-2 border-primary dark:border-primary-500">
                    {/* <!--First item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div>
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 1</h4> */}
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                           
                            <p className="mb-4 mt-2 text-xl md:text-2xl">
                                Welcome to Vollie, the leading fintech B2B solution provider at the forefront of revolutionizing the financial landscape.
                            </p>

                        </div>
                    </li>
                    {/* <!--Second item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div>
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 2</h4> */}
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                            <p className="mb-4 mt-2 text-xl md:text-2xl">
                                With our industry expertise, we empower businesses through advanced financial technology, boosting efficiency, security, and growth.
                            </p>

                        </div>
                    </li>
                    {/* <!--Third item--> */}
                    <li>
                        <div className="flex-start flex items-center">
                            <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#01C467]"></div>
                            {/* <h4 className="-mt-2 text-xl font-semibold">Title of section 3</h4> */} 
                        </div>
                        <div className="mb-6 ml-6 pb-6">
                            <p className="mb-4 mt-2 text-xl md:text-2xl">
                                Our dedicated team is committed to delivering innovative solutions that redefine the way businesses navigate and thrive in the digital economy.
                            </p>

                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default AboutStepper