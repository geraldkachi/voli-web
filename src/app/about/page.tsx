"use client"
import React from 'react'
import ReadyToEnjoy from '../pages/Home/ReadyToEnjoy'
import FooterTail from '../pages/Home/FooterTail'
import { NavBar } from '../../components'
import AboutSection from './AboutSection'

const About = () => {
    return (
        <div>
            <NavBar />
            <AboutSection />
            <ReadyToEnjoy />
            <FooterTail />
        </div>
    )
}

export default About