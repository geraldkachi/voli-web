'use client';
import Image from "next/image";
import { Button, NavBar } from "../../components";
import MakePayments from "./MakePayments";
import ScrollComponent from "./ScrollComponent/ScrollComponent";
import StepPayable from "./StepPayable";
import FooterTail from "../Home/FooterTail";
import ReadyToEnjoy from "../Home/ReadyToEnjoy";
import Seamless from "../Home/Seamless";

const AccountPayable = () => {
  return (
    <div>
      <div className="object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')]">
        <NavBar />
        <div className="bg-[#FAFAFA] md:bg-transparent">
        <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
          <div className="flex flex-col items-center my-7 md:my-14">
          <div className="bg-[#E7FDF3] text-[#01C467] text-sm font-medium leading-[180%] rounded-3xl px-4 py-2 mb-2 w-max tracking-[-12%]">PAYABLES</div>

            {/* <div className="bg-[#01C467] text-white text-sm font-bold leading-[22.4px] rounded-3xl px-4 py-2 mb-5 w-max tracking-[-1%]">PAYABLE</div> */}

            <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[56px] leading-[140%] md:leading-[120%] tracking-[-4%] md:tracking-[-6%]`}>
              Manage Vendors And Settle <br className="hidden md:block" /> Payments <span className="text-[#01C467]">4X Faster!</span> 
            </p>
            <p className={`text-center mt-4 text-[#55555C] font-normal text-base md:text-lg leading-[180%] md:leading-[140%] tracking-[-2%] md:tracking-[0%]`}>With Vollie, you can create timely invoices, get paid faster, make easy <br /> payments, and organise your finances— all in one place.</p>
            <div className="mt-5">
                <Button title="Book A Demo" className="!px-10" />
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Image src="https://res.cloudinary.com/dejquibd1/image/upload/v1716901030/payable-hero_ugnc6r.svg" className="hidden sm:block"  width={1000} height={500} alt="" />
        {/* <Image src="payable-hero.svg" width={1000} height={500} alt="" /> */}
      </div>
      <Image src="payable-md.svg" className="sm:hidden" width={1000} height={500} alt="" />


      <MakePayments />
      <StepPayable />
      <Seamless />
      <ReadyToEnjoy />
      <FooterTail />
    </div>
  )
}

export default AccountPayable