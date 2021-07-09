import React from 'react'
import './companies.css'
import SingleCompany from './singleCompany'

const Companies = () => {
  return (
    <section id='companies' class='services section'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title pt-4'>
          <h2>Our Companies</h2>
          <p>Click each one for details</p>
        </div>

        <div class='row'>
          <SingleCompany
            _id='almanzal'
            name='Al Manzal Real Estate'
            detail='ALMANZAL exclusively is a Real Estate Business, and its operations are running globally. We provide our clients the best investment opportunities in the Real Estate sector like Buying, Selling, Short & Long Run Investments, JVs in Construction & Development activities, Commercial & Residential smart buying, OTG and Off Plans, Distress buying, Bulk Buying of Villas, Penthouse & Farmhouses, Whole Commercial & Residential Buildings, Office spaces.'
            image='/images/Banners/Al-Manzal-front.jpg'
          />
          <SingleCompany
            _id='trusticon'
            name='Trusticon Real Estate'
            detail='TRUST ICON supports its customers deal with their land value and venture needs across geologies and land structures. Since we started, our goal has been to construct market-driving new homes in areas prepared for recovery – where individuals would need to purchase, either to live or contribute, at profoundly serious costs.'
            image='/images/Banners/TRUST-ICONl-front.jpg'
          />
          <SingleCompany
            _id='chilternTNT'
            name='Chiltern Travel & Tours'
            detail='At Chiltern traveling and tourism, our effective associations
            and accomplice inns are our assurance that we will discover you
            the ideal convenience from a wide reach with the best rates
            accessible and take into account the entirety of your
            necessities for an exceptional occasion insight.'
            image='/images/Banners/Chilterntntl-front.jpg'
          />
          <SingleCompany
            _id='ProGcc'
            name='ProGcc UAE'
            detail='We Provide 52+ Corporate Services like Document processing in
                immigration, employment and other government departments,
                Business sponser services, Tourism license services, etc. When it comes to delivering PRO Services in UAE, our team of expert Consultants handhold you throughout the required PRO Service from the beginning to the end.'
            image='/images/Banners/Prog-CC-front.jpg'
          />
          <SingleCompany
            _id='nam-global'
            name='NAM Global'
            detail='NAM Global deals in all sorts of import and export of leather products, organic products, surgical instruments, clothes, textiles, sportswear, sports goods, etc. Our warehouses are in Dubai, Sharjah, & Ajman. '
            image='/images/Banners/NAm-Globell-front.jpg'
          />
        </div>
      </div>
    </section>
  )
}

export default Companies
