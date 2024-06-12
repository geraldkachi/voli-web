import Image from "next/image"
interface Props {
    num: number
    title: string
    subtitle: string
}
const StackedCard = ({title, subtitle, num}:Props) => {
    console.log(num)
    return (
            <div className={`top-0 max-w-sm bg-white border border-gray-200 transform transition-all  rounded-lg shadow absolute`}>
                <a href="#">
                    {/* <Image width={10} height={10} className="rounded-t-lg" src="next.svg" alt="" /> */}
                </a>
                <div className="p-5 w-[500px]">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
    )
}

export default StackedCard