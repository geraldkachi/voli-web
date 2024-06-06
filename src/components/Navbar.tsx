"use client"
import { useState } from "react";
import Button from "./button/Button"
import { navVariants } from "../app/utils/motion";
import { motion } from "framer-motion";
import { ShiftingDropDown } from "./DropdownTab/DropdownTab";
import Image from "next/image";
import Link from "next/link";
import AccordionNav from "./AccordionNav";
import { useRouter } from 'next/navigation'

// import { navArr } from "./constants/faq-data";

const tiles = [
    {
        link: '/',
        title: 'Expense Management',
        subtitle: 'Manage your expenses in a smart way',
    },
    {
        link: '/account-payable',
        title: 'Account Payable',
        subtitle: 'Manage your expenses in a smart way',
    },
    {
        link: '/account-receivable',
        title: 'Account Receivable',
        subtitle: 'Manage your expenses in a smart way',
    },
    {
        link: '/about',
        title: 'About',
        // title: 'Corporate Cards',
        subtitle: 'Manage your expenses in a smart way',
    },
    {
        link: '/privacy-policy',
        title: 'Privacy Policy',
        subtitle: 'Come Join us and make Magic!',
    },
    {
        link: '/terms-of-use',
        title: 'Terms of Use',
        subtitle: 'Come Join us and make Magic!',
    },
    {
        link: '/blog',
        title: 'Blog',
        subtitle: 'The team, Core values, Our Vision.',
    },
    {
        link: '/customer-stories',
        title: 'Customer Stories',
        subtitle: 'Come Join us and make Magic!',
    },
    {
        link: '/help-center',
        title: 'Help Center',
        subtitle: 'The team, Core values, Our Vision..',
    },
]


export const navArr = [
    {
        header: 'Company',
        content: (
            <div className="flex items-start h-max">
                <div className="flex flex-col flex-1 gap-2">
                    {tiles.slice(0,6).map((tile, i) => <Link href={tile.link} key={i} className="flex gap-2 border border-[#55555C] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3">
                        <div className="p-3 rounded-[10px] bg-[#55555C] flex items-center justify-center  w-9">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div className="flex flex-col flex-1 whitespace-nowrap">
                            <span className="text-[#ffffff] font-bold text-sm">{tile.title}</span>
                            <span className="text-[#808084] font-bold text-xs">{tile.subtitle}</span>
                        </div>
                    </Link>)}
                </div>
            </div>
        )
    },
    {
        header: 'Products',
        content: (
            <div className="flex items-start h-max">
                <div className="flex flex-col flex-1 gap-2">
                    {/* {tiles.map((tile, i) => <Link href={tile.link} key={i} className="flex gap-2 border border-[#55555C] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3]"> */}
                        {tiles.slice(6,9).map((tile, i) => <Link href={tile.link} key={i} className="flex gap-2 border border-[#55555C] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3">
                        <div className="p-3 rounded-[10px] bg-[#55555C] flex items-center justify-center  w-9">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div className="flex flex-col flex-1 whitespace-nowrap">
                            <span className="text-[#ffffff] font-bold text-sm">{tile.title}</span>
                            <span className="text-[#808084] font-bold text-xs">{tile.subtitle}</span>
                        </div>
                    </Link>)}
                </div>
            </div>
        )
    },
]
const Navbar = () => {
    const router = useRouter()
    const [nav, setNav] = useState(false);
    return (
        <>
            <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`py-4 px-3 relative max-w-5xl mx-auto`}>
                {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
                <div className={`mx-auto flex justify-between gap-8`}>
                    <div  className="cursor-pointer"  onClick={() => router.push('/', { scroll: false })}>
                    <Link href="/">
                        <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain cursor-pointer" onClick={() => console.log('hi')} />
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6 lg:ml-36 text-[#55555C] border-r border-l border-[#CCFBE5] px-4">
                        <ShiftingDropDown />
                        <Link href="/pricing" className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors bg-transparent text-[#55555C] leading-[17.64px] tracking-[-2%]`}>
                            <span>Pricing</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center relative gap-x-2">
                        <Button variant="secondary" title="Sign In" />
                        <Button title="Book A Demo" />
                    </div>

                    <div className="md:hidden flex items-center justify-center gap-4">
                        <Button title="Book A Demo" />
                        <img src="/mobile-nav.svg" alt="menu" onClick={() => setNav(!nav)} className="w-[48px] h-[48px] object-contain cursor-pointer" width={20} height={20} />
                    </div>
                </div>
            </motion.nav>



            <ul className={nav ? 'fixed left-0 top-0 w-full h-svh z-20 border-r bg-black ease-in-out duration-500 shadow-lg' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className="flex flex-col justify-between h-full overflow-scroll">
                    <div>
                        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 flex items-center justify-between bg-[#2A2A33]'>
                            <a href="/" className="cursor-pointer" >
                                <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain" onClick={() => { }} />
                            </a>
                            <Image src="nav-cancel.svg" width={14} height={56} alt="navx" onClick={() => setNav(!nav)} className="w-[56px] h-[56px] object-contain" />
                        </h1>
                        <li className='text-white'>
                            {navArr.map((item, index) => (
                                <AccordionNav key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                                    <p className="pb- text-[#676767]">{item?.content}</p>
                                </AccordionNav>
                            ))}
                        </li>
                        <div className='p-4 text-white w-full h-max cursor-pointer' onClick={() => router.push('/pricing', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href="/pricing">Pricing</Link> </div>
                        <div className='p-4 text-white w-full h-max cursor-pointer' onClick={() => router.push('/faq', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href='/faq'>FAQs</Link> </div>
                        {/* <div className='p-4 text-white w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href="/">Resources</Link> </div> */}
                    </div>


                    <div className='w-full grid grid-cols-2  gap-6 bg-[#2A2A33] p-4'>
                        <Button title="Sign In" className="flex items-center justify-center !text-white !bg-transparent !border !border-white" />
                        <Button title="Book A Demo" className="flex items-center justify-center" />
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Navbar


// Ezekiel 28:11-19 
// 2 Corinthians 11:14