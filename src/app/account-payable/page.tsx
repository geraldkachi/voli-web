'use client';
import Image from "next/image";
import { NavBar } from "../../components";
import MakePayments from "./MakePayments";
import ScrollComponent from "./ScrollComponent/ScrollComponent";
import StepPayable from "./StepPayable";
import FooterTail from "../pages/Home/FooterTail";
import ReadyToEnjoy from "../pages/Home/ReadyToEnjoy";
import Seamless from "../pages/Home/Seamless";

const AccountPayable = () => {
  return (
    <div>
      <NavBar />
      <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
        <div className="flex flex-col items-center my-7 md:my-14">
          <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">PAYABLE</div>

          <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[56px] lg:leading-[81.2px]`}>
            Simplify Payments and <br /> <span className="text-[#01C467]">Manage</span> Vendor  Effortlessly.
          </p>
          {/* <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-7xl lg:leading-[86.4px]`}>
                    Just the right price to <br /> suit any Business
                    </p> */}
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
      <Image src="payable-hero.svg" width={1000} height={500} alt="" />
      </div>

      <MakePayments />
      <StepPayable />
      <Seamless />
      <ReadyToEnjoy />
      <FooterTail />
    </div>
  )
}

export default AccountPayable