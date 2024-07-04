import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";

const gridarr = [
  {
    title: "Save Countless hours of work ",
    subtitle: "Settle financial transactions in one click and go about your business as usual. No time wasted. ",
    color: "#FAFAFA",
  },
  {
    title: "Organise Your Finances All Year Round ",
    subtitle: "Run your business confidently, knowing that no matter how busy it gets, your financial books will never again be a mess.",
    color: "#FFF8E5",
  },
  {
    title: "Be Rest Assured of Security",
    subtitle: "Our platform is 100% safe from hackers and online scammers. We are PCI DSS Level 1, NDPR, and ISOs27001/2000&22301 certified.",
    color: "#F8F5FF",
  },
  {
    title: "Get Instant Support When Needed ",
    subtitle: "Need help or support at any point?  Reach us via email, help center or phone, and we&apos;ll be available to help you immediately. ",
    color: "#E3FDF1",
  },
]

const FinancialAccount = () => {
  return (
    <section className="bg-[#FFFFFF] pt-0 md:pt-5 md:pb-10 mx-3 md:mx-0">
      {/* <section className={` w-full h-scre bg-white max-w-5xl md:mx-auto rounded-[20px]`}>
        <div className="l">

        <div className={`flex flex-row items-center justify-center gap-5 px-3`}>
          <div className="flex flex-col mb-4 mt-10 md:my-14">
            <p className={`md:text-center mt-2 text-[#00000A] text-2xl md:text-[32px] font-semibold leading-[38.4px] md:leading-[51.2px] tracking-[-3%] md:tracking-[-4%]`}>Financial Accounting</p>
            <p className={`md:text-center md:mt-2 text-[#808080] font-normal md:text-base leading-[27.2px] tracking-[-1%]`}>Facilitate seamless transactions and manage funds <br className="hidden md:block" /> efficiently using Virtual Accounts on Vollie.</p>
            <Button title="Learn More" className="!bg-white border border-[#E5E5E6] !text-[#000024] mt-5 w-max  sm:hidden" suffixIcon={<><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13.6619L7 7.66187L1 1.66187" stroke="#55555C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </>} />
          </div>
        </div>



        <div className="flex  -z-20 mx-auto">
          <img src="financial_account.svg" className="md:h-[500px] w-full  top-1 " alt="" />
        </div>
        </div>
      </section> */}

      <div className=" w-full h-full items-start bg-inherit grid md:grid-cols-3 gap-4 pb-5">

        <div className="mx-[unset] max-[0px]:pl-0 max-sm:pl-3 max-lg:pl-10 lg:ml-40 mt-14 col-span-2">
          <span className="rounded-full bg-[#00000A] px-4 py-3 max-w capitalize text-white text-sm tracking-[-1%] leading-[160%]">WHY CHOOSE US</span>
          <div className="mt-5 text-2xl md:text-[40px] leading-[36px] md:leading-[64px] tracking-[-3%] md:font-medium font-bold">
            Money-Tracking Headaches, <br />
            Finally Off Your Plate
          </div>
          
          <div className="">
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 h-max">
              <motion.div variants={navVariants} initial="hidden" whileInView="show" className={`p-4 md:p-8 bg-[#FAFAFA]`}>
                <div>
                  <p className="text-[#00000A] mt-3 text-2xl font-medium md:font-semibold text-wrap my-2 mb-3 leading-[135%] md:tracking-[-4%]">Save Countless hours of work </p>
                  <p className="text-[#808084] text-base text-wrap font-normal leading-[180%] tracking-[-2%] md:tracking-[-1%]">Settle financial transactions in one click and go about your business as usual. No time wasted. </p>
                </div>
              </motion.div>
              <motion.div variants={navVariants} initial="hidden" whileInView="show" className={`p-4 md:p-8 bg-[#FFF8E5]`}>
                <div>
                  <p className="text-[#00000A] mt-3 text-2xl font-medium md:font-semibold text-wrap my-2 mb-3 leading-[135%] md:tracking-[-4%]">Organise Your Finances All Year Round </p>
                  <p className="text-[#808084] text-base text-wrap font-normal leading-[180%] tracking-[-2%] md:tracking-[-1%]">Run your business confidently, knowing that no matter how busy it gets, your financial books will never again be a mess.</p>
                </div>
              </motion.div>
              <motion.div variants={navVariants} initial="hidden" whileInView="show" className={`p-4 md:p-8 bg-[#F8F5FF]`}>
                <div>
                  <p className="text-[#00000A] mt-3 text-2xl font-medium md:font-semibold text-wrap my-2 mb-3 leading-[135%] md:tracking-[-4%]">Be Rest Assured of Security</p>
                  <p className="text-[#808084] text-base text-wrap font-normal leading-[180%] tracking-[-2%] md:tracking-[-1%]">Our platform is 100% safe from hackers and online scammers. We are PCI DSS Level 1, NDPR, and ISOs27001/2000&22301 certified.</p>
                </div>
              </motion.div>
              <motion.div variants={navVariants} initial="hidden" whileInView="show" className={`p-4 md:p-8 bg-[#E3FDF1]`}>
                <div>
                  <p className="text-[#00000A] mt-3 text-2xl font-medium md:font-semibold text-wrap my-2 mb-3 leading-[135%] md:tracking-[-4%]">Get Instant Support When Needed</p>
                  <p className="text-[#808084] text-base text-wrap font-normal leading-[180%] tracking-[-2%] md:tracking-[-1%]">Need help or support at any point?  Reach us via email, help center or phone, and we&apos;ll be available to help you immediately.</p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

            <div className="col-span-1 w-max overflow-hidden hidden sm:flex justify-end items-end">

              <img src="track-h.svg" className="hidden mt- lg:block z-50" alt="wall" />
            </div>
      </div>
    </section>
  )
}

export default FinancialAccount