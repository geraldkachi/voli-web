/* eslint-disable react/no-unescaped-entities */
'use client'
import { NavBar } from "@/components"
import ReadyToEnjoy from "../pages/Home/ReadyToEnjoy";
import FooterTail from "../pages/Home/FooterTail";

const TermsOfUse = () => {
  // const sidebarLinks = document && document.querySelectorAll('#sidebar a');
  // const sections = document && document.querySelectorAll('section');

  // const observerOptions = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5
  // };

  // function handleIntersection(entries, observer) {
  //   entries.forEach(entry => {
  //     const index = Array.from(sections).indexOf(entry.target);
  //     if (entry.isIntersecting) {
  //       sidebarLinks.forEach(link => link.classList.remove('active'));
  //       sidebarLinks[index].classList.add('active');
  //     }
  //   });
  // }

  // const observer = new IntersectionObserver(handleIntersection, observerOptions);
  // sections.forEach(section => observer.observe(section));

  // sidebarLinks.forEach((link, index) => {
  //   link.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     window.scrollTo({
  //       top: sections[index].offsetTop - 20,
  //       behavior: 'smooth'
  //     });
  //     sidebarLinks.forEach(link => link.classList.remove('active'));
  //     link.classList.add('active');
  //   });
  // });


  const date = new Date(2024, 3, 12); // Note: Months are zero-indexed (0 = January, 3 = April)

  // Format the date
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });


  return (
    <div>
      <NavBar />

      <div
        className={`max-w-7xl mx-auto flex justify-center gap-5 object-cover w-full bg-no-repeat bg-contain bg-bottom-4 bg-[url('/policy-bg.svg')] md:h-screen pb-20`}
      >
        <div className="flex flex-col items-center my-20">
          <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">TERMS AND CONDITIONS</span>

          <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[64px]`}>Take a look into our <br /> Terms and Conditions</p>
          <p className={`text-center mt-2 text-[#000000] bg-white rounded-full font-normal text-sm px-4 md:mt-10 leading-8`}>Last Updated • {formattedDate}</p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3">
        <div className="flex">
          <nav className="w-1/4 bg-white p-4 hidden md:block">
            <ul className="text-[#55555C]">
              <li><a href="#section1" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Introduction</a></li>
              <li><a href="#section2" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Account Registration</a></li>
              <li><a href="#section3" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Invoicing and Billing</a></li>
              <li><a href="#section4" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Expense Management</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Automatic Bill Payment</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Privacy and Data Security</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Limitation of Liability</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Amendments and Modifications</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Governing Law and Jurisdiction</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:bg-[#E7FDF3] text-[#01C467">Contact Us</a></li>
            </ul>
          </nav>

          <div className="md:w-3/4 bg-white p-3 sm:p-8 sm:ml-4">
            <section id="section1">
              <h2 className="text-2xl font-bold mb-4 text-black">Introduction</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">These terms and conditions ("Terms") govern your use of the Vollie platform and services provided by Vollie ("Company", "we", "us", or "our"). By accessing or using our platform and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our platform and services.</p>
             </div>
            </section>

            <section id="section2">
              <h2 className="text-2xl font-bold mb-4 text-black">Account Registration</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">You must register for an account to access and use our platform and services. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated.</p>
              <p className="mb-4 text-base md:text-lg">You are responsible for maintaining the security of your account credentials and for any activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
             </div>
            </section>

            <section id="section3">
              <h2 className="text-2xl font-bold mb-4 text-black">Invoicing and Billing</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">Our platform enables you to create, send, and manage invoices to your business customers ("Clients"). You acknowledge and agree that you are solely responsible for the content and accuracy of the invoices you generate using our platform.</p>
              <p className="mb-4 text-base md:text-lg">You agree to comply with all applicable laws and regulations when issuing invoices, including but not limited to tax regulations, invoicing requirements, and payment terms.</p>
              <p className="mb-4 text-base md:text-lg">We do not guarantee the timeliness, accuracy, or completeness of invoice processing, delivery, or payment by Clients. We are not responsible for any disputes or discrepancies that may arise between you and your Clients.</p>
             </div>
            </section>

            <section id="section4">
              <h2 className="text-2xl font-bold mb-4 text-black">Expense Management</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">Our platform allows you to track and manage your business expenses, including but not limited to employee reimbursements, vendor payments, and operating expenses.</p>
              <p className="mb-4 text-base md:text-lg">You are responsible for ensuring the accuracy and legality of all expenses entered into our platform. We are not liable for any errors, omissions, or fraudulent activities related to expense tracking and management.</p>
             </div>
            </section>

            <section id="section5">
              <h2 className="text-2xl font-bold mb-4 text-black">Automatic Bill Payment</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">Our platform offers automated bill payment capabilities, allowing you to schedule and process payments for recurring bills, subscriptions, and other financial obligations.</p>
              <p className="mb-4 text-base md:text-lg">You acknowledge and agree that you are solely responsible for the accuracy of payment instructions and for maintaining sufficient funds in your designated bank account to cover scheduled payments.</p>
             </div>
            </section>

            <section id="section5">
              <h2 className="text-2xl font-bold mb-4 text-black">Privacy and Data Security</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg">We are committed to protecting your privacy and safeguarding your personal and financial information. Please refer to our Privacy Policy for details on how we collect, use, and disclose your information.</p>
              <p className="mb-4 text-base md:text-lg">You agree to comply with our security policies and procedures and to take appropriate measures to protect your account credentials and sensitive information from unauthorized access or disclosure.</p>
             </div>
            </section>

            <section id="section5">
              <h2 className="text-2xl font-bold mb-4 text-black">Privacy and Data Security</h2>
             <div className="text-[#808080]">
              <p className="mb-4 text-base md:text-lg"></p>
              <p className="mb-4 text-base md:text-lg"></p>
             </div>
            </section>

          
          </div>
        </div>
      </div>
      <ReadyToEnjoy />
      <FooterTail />
    </div>
  )
}

export default TermsOfUse