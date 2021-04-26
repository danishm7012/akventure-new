import React from 'react'
import Carousel from '../components/carousel'
import Meta from '../components/common/Meta'
import AboutUs from '../components/about/aboutUs'
import Services from '../components/services/services'

import Companies from '../components/companies/companies'

import AppSection from '../components/AppSec'

import ContactUs from '../components/contactUs'
const home = () => {
  return (
    <div id='mainHome'>
      <Meta />
      <Carousel />
      <AboutUs />
      <Services />
      <Companies />

      <ContactUs />
      <AppSection />
    </div>
  )
}

export default home
