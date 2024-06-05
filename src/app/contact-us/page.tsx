"use client"
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { NavBar } from "@/components";
import FooterTail from "../pages/Home/FooterTail";
import SlideInNotifications from "@/components/Notification/Notification";
import { SwipeCarousel } from "@/components/Carousel/Carousel";


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [notify, setNotify] = useState(false);
    const [name, setName] = useState('');
    const formRef = useRef(null)

    const onFinish = (e: FormEvent | any) => {
        e.preventDefault()
        const form = e.target;
        // const form = formRef.current;

        console.log(form)
        console.log(form.elements.name.value)

        let email = form.elements.email.value;
        let name = form.elements.name.value;
        let phone = form.elements.phone.value;
        let message = form.elements.message.value;

        setName(form.elements.name.value)

        const subject = `${name} ${email} ${phone}`

        const mailtoUrl = `mailto:${'volliefinance@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        // const mailtoUrl = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoUrl;

        // Clear form input values
        // form.reset();
        form.reset() && setNotify(true)
    }
    return (
        <div>
            <NavBar />
            {/* <SlideInNotifications {...{name, notify}} /> */}
            <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto justify-center">
                <div>
                    <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='pt-8 lg:py-16 px-4'>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-base">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know. <br /> Vollie is here to help.</p>

                        <div className="hidden md:block">
                            <SwipeCarousel />
                        </div>
                    </motion.div>
                </div>
                <div>
                    <section className="bg-white">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <form onSubmit={onFinish} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">Your Name</label>
                                    <input type="test" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#01C467] block w-full p-2.5 " placeholder="What's your good name?" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#01C467] block w-full p-2.5 " placeholder="name@geraldkachi.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900">Your Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#01C467] block w-full p-2.5 " placeholder="Enter your phone number" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900">Subject</label>
                                    <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-primary-500 focus:border-[#01C467]" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 outline-none focus:ring-[#01C467] focus:border-[#01C467]" placeholder="Leave a comment..." required></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-[#01C467] hover:bg-[#01C467] focus:outline-none">Send message</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

            <FooterTail />
        </div>
    )
}

export default Contact