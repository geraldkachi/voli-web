'use client'
import { NavBar } from "@/components"

const HelpCenter = () => {
  return (
    <div>
        <NavBar />


        <div
        className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 px-3`}
      >
        <div className="flex flex-col items-center my-7 md:my-14">
          <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">HELP CENTER</div>

          <p className={`text-center mt-2 text-[#00000A] text-[28px] font-extrabold md:text-[64px] leading-9 xl:leading-[80px]`}>
            Help-Center <span className="text-[#01C467]">Coming</span> Soon <br className='hidden xl:block' /> <br className='hidden xl:block' /> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter