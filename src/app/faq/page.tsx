"use client";
import { Accordion, NavBar, Tabs } from "../components"
const faqArr = [
  {
    header: 'What is the Expense Management feature on the B2B Fintech platform?',
    content: `The Expense Management feature is a powerful tool within our B2B Fintech platform that helps businesses efficiently track, manage, and control their expenses in a streamlined manner.`
  },
  {
    header: 'What sets Dembally Limited apart from other real estate developers?',
    content: `Our unique selling proposition lies in our commitment to providing properties with notable ROI for investors and comfortable homes for first-time buyers. We also prioritize energy efficiency, security, clean water, and a child-friendly environment, along with a transparent and comprehensive after-build property management system.`
  },
  {
    header: 'Do your properties come with land approval from the government?',
    content: `Yes, all our properties come with the necessary government land approvals to ensure seamless ownership transitions and avoid any complications for our clients.`
  },
  {
    header: 'What flexible payment options do you offer?',
    content: `At Dembally Limited, we understand that each client has unique financial needs. We offer convenient payment options, tailored to suit various budgets, ensuring that our luxury properties remain accessible and affordable.`
  },
  {
    header: 'Do you provide after-build property management services??',
    content: `Yes, we take pride in our transparent and comprehensive after-build property management system, which allows our clients to enjoy a stress-free experience and maintain the value of their investment.`
  },
  {
    header: 'What measures do you take to ensure energy efficiency in your properties?',
    content: `We incorporate state-of-the-art energy-saving technologies and design practices in our properties, resulting in reduced utility costs and a minimal carbon footprint.`
  },
]
const Faq = () => {
  return (
    <div>

    <div className="bg-[#F8FEFB]">
      <NavBar />
      <div className={`max-w-6xl mx-auto flex flex-row items-center justify-center`}>
        <div className="flex flex-col items-center my-10 md:my-14">
          <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl p-3 mb-5 w-max">FAQ</div>
          <p className={`text-center mt-2 text-[#011311] text-2xl leading-[38.08px] md:leading-[89.6px] font-extrabold md:text-[64px]`}>
            We answered <span className="text-[#01C467] leading-[38.08px] md:leading-[89.6px]">your questions</span> so <br /> you don&apos;t have to ask again.
          </p>
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
                      <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-base text-[#01C467]">{item.header}</h1>}>
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
                      <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-base text-[#01C467]">{item.header}</h1>}>
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
                      <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-base text-[#01C467]">{item.header}</h1>}>
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
                      <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-base text-[#01C467]">{item.header}</h1>}>
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
            </div>
  )
}

export default Faq