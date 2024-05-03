import { motion } from 'framer-motion'
import { navVariants } from '../../utils/motion'
import Image from 'next/image'

const Seamless = () => {
    return (
        <div className='max-w-5xl mx-auto px-3'>

            <div className='grid md:grid-cols-2 gap-'>
                <div className=' bg-white py-20 px-3 md:px-0'>
                    <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">TESTIMONIALS</span>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-2xl md:text-[40px] font-semibold leading-9 md:leading-[60px] mt-6'>
                        Facilitating seamless and <br /> into just three simple and <br /> straightforward steps
                    </motion.p>
                    <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl items-center w-max my-10">
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                        <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />

                        <p className='font-extrabold text-[28px] md:text-[32px] pl-4'>+ 12</p>
                    </div>
                    {/* <div className="flex -space-x-4 rtl:space-x-reverse bg-[#F2F2F3] p-3 rounded-xl">
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <Image className="w-10 h-10 border-2 border-white rounded-full" width={10} height={10} src="next.svg" alt="" />
                            <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                        </div>
                         */}
                </div>

                <div className='grid-card justify-center items-center gap-10 py-10'>
                    {/* {technologies.map((item) =>
                            <Experience key={item.title} {...item} />
                        )} */} 



                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Seamless