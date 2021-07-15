import React from 'react'
import './services.css'
import SingleService from './singleService'

const Services = () => {
  return (
    <div
      id='services'
      class='icon-boxes d-flex flex-column justify-content-center px-5 section'
    >
      <div class='section-title pt-4'>
        <h2>Let Get Started with AK Ventures Services in UAE</h2>
        <p>
          AK Ventures is the most reliable resource to get started your
          professional career in Dubai, UAE. AK Ventures is introducing many
          platforms for businessmen to invest in UAE. Following are some of AK
          Ventures services in which you can participate as a businessman, and
          also you can query us if you need our AK Ventures services in UAE.
        </p>
      </div>

      <div class='row '>
        <SingleService
          name='Real Estate'
          icon='fas fa-home'
          img='/images/Banners/Al-Manzal-Detail-Page.jpg'
          detail={`Under the standards and requirements of the Dubai UAE Land Department, we are struggling to add the legal value services for real estate property registration and make the essential real estate legal guidance to complete the real estate registration transactions safely for real estate documentation and establish the UAE real estate property rights of its owners through the headline deed system for the registry of the Dubai Land Department. With AK Ventures, you can securely buy and sell your real estate properties with easy transaction methods and legal documentations. `}
        />
        <SingleService
          name='Travel and Tourism'
          icon='fas fa-umbrella-beach'
          img='/images/Banners/Chilterntntl-Detail-Page.jpg'
          detail={`Chiltern TNT is one of the ideal travel to UAE services providers. Many tourists have become fans of Chiltern TNT for Dubai UAE tours. At Chiltern, You can find many city tour options such as Al-Ain City Tour, Falcon Hospital Tour, Louvre Museum Tour, Sheikh Zayed Mosque, and many more other attractions of Dubai UAE. As a reputable and well-known tour operator in Dubai, Chiltern TNT offers our clients the best city tour packages at budget prices.

          Chiltern TNT does schedule tours without agreeing on luxury, and fun is what most UAE travelers prefer. Therefore, we provide exactly what you need affordably. When you choose our Dubai city tour packages, you can expect excellent service. Our travel guiders act as conferred companions to help you enjoy your holiday to the most lavish.
          
          Chiltern TNT also offers customized Dubai tour packages to meet your unique requirements. In addition, we also track all protection requirements to ensure safety for travelers.
          `}
        />
        <SingleService
          name='Import and Export'
          icon='fas fa-luggage-cart'
          img='/images/Banners/NAm-Globell-Detailed-Page.jpg'
          detail='The establishment of an import & export company in Dubai UAE considered one of the most reliable successful investment steps in the United Arab because the UAE has now occupied a prominent trading hub between worldwide countries, which has delivered all immigrants conditional on imports from the United Arab Emirates and others issued from it, therefore in this crucial import-export way we will describe in detail the actions of setting an import and export business organization in the UAE, what are the benefits and laws of import and export in the Dubai UAE, and much more worthy information about import & export.
          If you are looking to establish an import and export company in Egypt, AK VENTURES recommends that you first know the expenses of establishing an import and export organization in Egypt.
          '
        />
        <SingleService
          name='Corporate Services'
          icon='fas fa-shield-alt'
          img='/images/Banners/Prog-CC-Detail-Page.jpg'
          detail='AK Ventrues Provide Fifty Two Corporate Services include Document processing for UAE settlement, Dubai job and other government agencies, Business sponsor assistance, Tourism permit services etc.'
        />
      </div>
    </div>
  )
}

export default Services
