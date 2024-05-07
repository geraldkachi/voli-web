"use client"
import React from 'react'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import FooterTail from '../pages/Home/FooterTail'
import { NavBar } from '../components'
import AboutSection from './AboutSection'

const About = () => {
    return (
        <div>
            <NavBar />
            <AboutSection />
            <ReadyToEnjoy />
            <FooterTail />

            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <span className="mx-4 text-4xl">Marquee Item 1</span>
                    <span className="mx-4 text-4xl">Marquee Item 2</span>
                    <span className="mx-4 text-4xl">Marquee Item 3</span>
                    <span className="mx-4 text-4xl">Marquee Item 4</span>
                    <span className="mx-4 text-4xl">Marquee Item 5</span>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    <span className="mx-4 text-4xl">Marquee Item 1</span>
                    <span className="mx-4 text-4xl">Marquee Item 2</span>
                    <span className="mx-4 text-4xl">Marquee Item 3</span>
                    <span className="mx-4 text-4xl">Marquee Item 4</span>
                    <span className="mx-4 text-4xl">Marquee Item 5</span>
                </div>
            </div>
        </div>
    )
}

export default About