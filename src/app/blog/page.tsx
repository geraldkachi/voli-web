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
      <section className={` w-full h-scre mx-auto`}>
      <div className="bg-[#FAFAFA] md:bg-transparent">
      <NavBar />
        <div
          className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 object-cover w-full bg-no-repeat bg-contain bg-center bg-[url('/blog-bg.svg')] mb:pb-20`}
        >
          <div className="flex flex-col items-center my-7 md:my-14">
            <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">BLOG</span>

            <p className={`text-center mt-2 text-[#00000A] text-[36px] font-extrabold md:text-7xl leading-[48.96px] md:leading-[93.6px] tracking-[-4%] md:tracking-[-5%]`}>
              All-in-one <span className="text-[#01C467] ">Platform</span> for <br className="hidden md:block" /> everything Finance
            </p>
            <p className={`text-center mt-4 text-[#55555C] font-normal text-base md:text-lg leading-[28.8px] md:leading-[32.4px]`}>Empowering Your Financial Success Unleashing <br />the Power of Numbers</p>

            <div data-element="fields" data-stacked="false" className="flex flex-col md:flex-row items-center w-full max-w-md px-3 md:px-0 my-4">
              <div className=" w-full md:mr-3">
                <input id="member_email" className="bg-gray-50 border text-sm rounded-lg outline-none focus:ring-0  focus:border-none w-full p-2.5" name="email_address" aria-label="Email Address" placeholder="Your email address..." required type="email" />
              </div>
              <button data-element="submit" type='button' className="w-full sm:w-[unset] px-5 py-3 text-sm font-medium text-center text-white bg-[#01C467] rounded-lg cursor-pointer mt-3 sm:mt-0">Subscribe</button>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col md:items-center justify-center bg-[#F8FCFA] mx-3 overflow-x-scroll py-10 md:py-20">
          <ChipTabs tabs={[
            {
              title: 'All', content: (
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
            { title: 'Digital Marketing', content: 
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
             },
            { title: 'Budgeting', content: 
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
            },
            { title: 'Financial Forecasting', content: 
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
            },
            { title: 'Tax', content: 
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
            },
            { title: 'Financial Risk', content: 
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
            },
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