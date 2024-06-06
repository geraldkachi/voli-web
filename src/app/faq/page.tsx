"use client";
import { Metadata } from "next";
import { Accordion, NavBar, Tabs } from "../../components"
import FooterTail from "../pages/Home/FooterTail";
import ReadyToEnjoy from "../pages/Home/ReadyToEnjoy";
import Seamless from "../pages/Home/Seamless";
import SubFooter from "../pages/Home/SubFooter";
import { faqArr } from "@/components/constants/faq-data";

// export const metadata: Metadata = {
//   title: 'Faq'
// }

const Faq = () => {
  return (
    <div>

      <div className="bg-[#F8FEFB]">
        <NavBar />
        <div className={`max-w-5xl mx-auto flex flex-col items-center justify-center`}>
          <div className="flex flex-col items-center my-7 md:my-14">
            <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">FAQ</div>
            <p className={`text-center mt-2 text-[#011311] text-2xl leading-[38.08px] md:leading-[89.6px] font-extrabold md:text-[64px]`}>
              We answered <span className="text-[#01C467] leading-[38.08px] md:leading-[89.6px]">your questions</span> so <br className='hidden md:block'  /> you don&apos;t have to ask again.
            </p>
          </div>

          <div className="flex items-center gap-4 overflow-x-scroll px-3 md:px-0">
            <div>
            <img src="faq-q.svg" alt="" />
            </div>

            <div>
            <img src="faq-q-mark.svg" alt="" />
            </div>
            <div>
            <img src="faq-q.svg" alt="" />
            </div>
          </div>
        </div>



        <div className="py-20">
          <div className="flex flex-col items-center justify-center">
            <Tabs
              data={[
                {
                  label: `All`,
                  content: (
                    <div className="">
                      {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                          <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                      ))}
                    </div>
                  )
                },
                {
                  label: 'Payables',
                  content: (
                    <div className="">
                      {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                          <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                      ))}
                    </div>
                  )
                },
                {
                  label: 'Recievables',
                  content: (
                    <div className="">
                      {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                          <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                      ))}
                    </div>
                  )
                },
                {
                  label: 'Financial Accounting',
                  content: (
                    <div className="">
                      {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                          <p className="pb-4 text-[#676767]">{item?.content}</p>
                        </Accordion>
                      ))}
                    </div>
                  )
                },
              ]}
            />
          </div>
        </div>

      </div>

      <Seamless />
      <ReadyToEnjoy />

      <FooterTail />
    </div>
  )
}

export default Faq