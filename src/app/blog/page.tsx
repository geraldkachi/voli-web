'use client'
import { NavBar, Tabs } from '@/components'
import { motion } from 'framer-motion';
import Seamless from '../pages/Home/Seamless';
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy';
import FooterTail from '../pages/Home/FooterTail';
import ChipTabs from '@/components/Tabs/TabsFramer';


const Blog = () => {
  return (
    <div>
      <NavBar />
      <section className={` w-full h-scre mx-auto`}>
        <div
          className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
        >
          <div className="flex flex-col items-center my-7 md:my-14">
            <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">BLOG</span>

            <p className={`text-center mt-2 text-[#00000A] text-5xl font-extrabold md:text-7xl`}>
              All-in-one <span className="text-[#01C467] leading-{93.6px]">Platform</span> for <br /> everything Finance
            </p>
            <p className={`text-center mt-2 text-[#55555C] font-normal md:text-lg leading-8`}>Empowering Your Financial Success Unleashing <br />the Power of Numbers</p>



            <div data-element="fields" data-stacked="false" className="flex flex-col md:flex-row items-center w-full max-w-md px-3 md:px-0 my-4">
              <div className=" w-full md:mr-3">
                <input id="member_email" className="bg-gray-50 border text-sm rounded-lg outline-none focus:ring-0  focus:border-none w-full p-2.5" name="email_address" aria-label="Email Address" placeholder="Your email address..." required type="email" />
              </div>
              <button data-element="submit" type='button' className="w-full sm:w-[unset] px-5 py-3 text-sm font-medium text-center text-white bg-[#01C467] rounded-lg cursor-pointer mt-3 sm:mt-0">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ChipTabs tabs={[
            {title: 'All',content:( 
              <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-5 items-center justify-center">

                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card2.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>

                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card2.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>

                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card2.svg" alt="recent-card" />
                </div>
                <div className="items-center justify-center flex">
                  <img src="recent-card1.svg" alt="recent-card" />
                </div>
              </div>
            </div>
            )},
            {title: 'Search',content: <>Gerald you&apos;re a warrior</>},
            {title: 'About',content: <>Life is hard with God</>},
            {title: 'FAQ',content: <>God is Good</>},
          ]} />

          {/* <Tabs
            className='flex items-center justify-center mt-10 overflow-x-scroll'
            data={[
              {
                label: `All`,
                content: (
                  <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-5 items-center justify-center">

                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card2.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>

                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card2.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>

                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card2.svg" alt="recent-card" />
                      </div>
                      <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: `Digital Marketing`,
                content: (
                  <div className="">

                  </div>
                )
              },
              {
                label: `Budgeting`,
                content: (
                  <div className="">

                  </div>
                )
              },
              {
                label: `Financial Forecasting`,
                content: (
                  <div className="">

                  </div>
                )
              },
              {
                label: `Tax`,
                content: (
                  <div className="">

                  </div>
                )
              },
              {
                label: `Financial Risk`,
                content: (
                  <div className="">

                  </div>
                )
              },
            ]} /> */}
        </div>
            <Seamless />
            {/* <RecentArticle /> */}
            <ReadyToEnjoy />
            <FooterTail />
      </section>



    </div>
  )
}

export default Blog