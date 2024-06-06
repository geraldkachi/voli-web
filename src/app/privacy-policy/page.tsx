/* eslint-disable react/no-unescaped-entities */
'use client'
import { NavBar } from "@/components"
import { useEffect, useState } from "react";
import ReadyToEnjoy from "../pages/Home/ReadyToEnjoy";
import FooterTail from "../pages/Home/FooterTail";

const PrivacyPolicy = () => {
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
          <span className="rounded-full bg-[#01C467] px-4 py-3 max-w capitalize text-white text-sm">PRIVACY POLICY</span>

          <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-[64px] leading-[46.4px] md:leading-[83.2px] tracking-[-4%] md:tracking-[-5%]`}>  We care about your Privacy <br className='hidden md:block'  /> as much as you do</p>
          <p className={`text-center mt-2 text-[#000000] bg-white rounded-full font-normal text-sm px-4 py-3 md:mt-10 leading-[19.6px]`}>Last Updated • {formattedDate}</p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 lg:px-0">
        <div className="flex">
          <nav className="w-1/4 bg-white p-4 hidden md:block">
            <ul className="text-[#55555C] text-lg leading-[22.68px] font-normal whitespace-nowrap">
              <li><a href="#section1" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Introduction</a></li>
              <li><a href="#section2" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Information We Collect</a></li>
              <li><a href="#section3" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">How We Use Your Information</a></li>
              <li><a href="#section4" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">How We Share Your Information</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Data Retention</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467"> Data Security</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Your Choices</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Children's Privacy</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467"> Updates to this Privacy Policy</a></li>
              <li><a href="#section5" className="block py-2 px-4  mb-4 rounded hover:text-[#01C467] hover:bg-[#E7FDF3] text-[#01C467">Contact Us</a></li>
            </ul>
          </nav>

          <div className="md:w-3/4 bg-white p-3 sm:p-8 sm:ml-4">
            <section id="section1">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Introduction</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">This Privacy Policy describes how Vollie ("Company", "we", "us", or "our") collects, uses, and discloses personal and non-personal information when you use our Vollie platform and services (collectively, "Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy.</p>
              </div>
            </section>

            <section id="section2">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Account Registration</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">You must register for an account to access and use our platform and services. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated.</p>
                <p className="mb-4">You are responsible for maintaining the security of your account credentials and for any activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
              </div>
            </section>

            <section id="section3">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Invoicing and Billing</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">Our platform enables you to create, send, and manage invoices to your business customers ("Clients"). You acknowledge and agree that you are solely responsible for the content and accuracy of the invoices you generate using our platform.</p>
                <p className="mb-4">You agree to comply with all applicable laws and regulations when issuing invoices, including but not limited to tax regulations, invoicing requirements, and payment terms.</p>
                <p className="mb-4">We do not guarantee the timeliness, accuracy, or completeness of invoice processing, delivery, or payment by Clients. We are not responsible for any disputes or discrepancies that may arise between you and your Clients.</p>
              </div>
            </section>

            <section id="section4">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Expense Management</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">Our platform allows you to track and manage your business expenses, including but not limited to employee reimbursements, vendor payments, and operating expenses.</p>
                <p className="mb-4">You are responsible for ensuring the accuracy and legality of all expenses entered into our platform. We are not liable for any errors, omissions, or fraudulent activities related to expense tracking and management.</p>
              </div>
            </section>

            <section id="section5">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Automatic Bill Payment</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">Our platform offers automated bill payment capabilities, allowing you to schedule and process payments for recurring bills, subscriptions, and other financial obligations.</p>
                <p className="mb-4">You acknowledge and agree that you are solely responsible for the accuracy of payment instructions and for maintaining sufficient funds in your designated bank account to cover scheduled payments.</p>
              </div>
            </section>

            <section id="section5">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Privacy and Data Security</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
                <p className="mb-4">We are committed to protecting your privacy and safeguarding your personal and financial information. Please refer to our Privacy Policy for details on how we collect, use, and disclose your information.</p>
                <p className="mb-4">You agree to comply with our security policies and procedures and to take appropriate measures to protect your account credentials and sensitive information from unauthorized access or disclosure.</p>
              </div>
            </section>

            <section id="section5">
              <h2 className="text-[22px] md:text-4x leading-[30.8px] md:leading-[50.4px] tracking-[-2%] md:tracking-[-4%] font-semibold mb-4 text-[#000000]">Privacy and Data Security</h2>
              <div className="text-[#808080] text-base md:text-lg font-normal leading-[32px] md:leading-[45.6px] tracking-[-1%] md:tracking-[-3%]">
              <p className="mb-4">We are committed to protecting your privacy and safeguarding your personal and financial information. Please refer to our Privacy Policy for details on how we collect, use, and disclose your information.</p>
                <p className="mb-4">You agree to comply with our security policies and procedures and to take appropriate measures to protect your account credentials and sensitive information from unauthorized access or disclosure.</p>
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

export default PrivacyPolicy