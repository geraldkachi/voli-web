"use client"
import type { Metadata } from "next";
import React from 'react'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import FooterTail from '../pages/Home/FooterTail'
import { NavBar } from '../../components'
import AboutSection from './AboutSection'
import Head from "next/head";


  const metadata: Metadata = {
    title: {
      default: "Vollie About Website",
      template: `%s - My Vollie web account`
    },
    description: "Vollie About Website",
    twitter: {
      card: 'summary_large_image'
    },
    icons: {
      icon: "public/next.svg",
    },
  };
  

const About = () => {
    return (
        <>
          <Head>
            <title>Vollie About Website</title>
            <meta name="description" content="Welcome to Vollie About website" />
            </Head>
            <div className="object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/bg-lining.svg')] bg-opacity-100">
            <NavBar />
            <AboutSection />
            </div>
            <ReadyToEnjoy />
            <FooterTail />
        </>
    )
}

export default About