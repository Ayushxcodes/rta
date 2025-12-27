import AboutSection from '@/components/Landing/AboutSection'
import HeroSection from '@/components/Landing/HeroSection'
import OurServices from '@/components/Landing/OurServices'
import WhyChooseUs from '@/components/Landing/WhyChooseUs'
import React from 'react'

const Homepage = () => {
  return (
    <div className='py-10'>
      <HeroSection />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
    </div>
  )
}

export default Homepage