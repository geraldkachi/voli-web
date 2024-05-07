"use client";
import { NavBar } from '../components'
import FooterTail from '../pages/Home/FooterTail'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import Seamless from '../pages/Home/Seamless'
import PriceCards from './priceCards'

const Pricing = () => {
    return (
        <div>
            <div className="bg-[#F8FEFB]">
                <NavBar />
                <PriceCards />
            </div>
            <Seamless />
            <ReadyToEnjoy />
            <FooterTail />
        </div>
    )
}

export default Pricing