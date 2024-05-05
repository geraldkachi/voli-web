import SubFooter from "./SubFooter"

const FooterTail = () => {
  return (
    <div>


<footer className="bg-white">
    <SubFooter />
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-2 gap-8 px-3 md:px-0 py-6 lg:py-8 md:grid-cols-5">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">PRODUCTS</h2>
            <ul className="text-[#666666] font-normal text-sm md:text-base">
                <li className="mb-2">
                    <a href="#" className=" hover:underline">Accounts Payable</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Accounts Receivable</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Inventory Management</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Financial Accounting</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">FEATURES</h2>
            <ul className="text-[#666666] font-normal text-sm md:text-base">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Financial Reports</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Virtual Accounts</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Approvals</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Audit Trails</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">invoicing</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">COMPANY</h2>
            <ul className="text-[#666666] font-normal text-sm md:text-base">
                <li className="mb-2">
                    <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-2">
                    <a href="/faq" className="hover:underline">FAQs</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">RESOURCES</h2>
            <ul className="text-[#666666] font-normal text-sm md:text-base">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Terms of Use</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">SUPPORT</h2>
            <ul className="text-[#666666] font-normal text-sm md:text-base">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Pricing</a>
                </li>
            </ul>
        </div>
    </div>

    <div className="max-auto max-w-5xl text-center text-sm md:text-lg leading-[36px text-[#808080] bg-[#FAFAFA] rounded-xl px-5 md:py-10">
        To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank.
    </div>

    <div className="px-3 md:px-0 py-3 flex md:items-center justify-center md:justify-between">
        <span className="text-sm text-[#808084] sm:text-lg sm:text-center">© {new Date().getFullYear()} Vollie Technologies LTD •  All rights reserved
        </span>
        <div className="hidden md:flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="">
                 <img src="footer-fb.svg" alt="" />
              </a>
              <a href="#" className="">
                  <img src="footer-ig.svg" alt="" />
              </a>
              <a href="#" className="">
                  <img src="footer-in.svg" alt="" />
              </a>
             
        </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default FooterTail