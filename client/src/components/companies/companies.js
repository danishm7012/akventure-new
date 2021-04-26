import React from 'react'
import './companies.css'
import SingleCompany from './singleCompany'

const Companies = () => {
  return (
    <section id='companies' class='services section'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title pt-4'>
          <h2>Companies</h2>
          <p>Check our Companies</p>
        </div>

        <div class='row'>
          <SingleCompany
            _id='almanzal'
            name='Al Manzal Real Estate'
            detail='UAE being the international hub of trade provides best import
                and export opportunities with attracting infrastructure such as
                buildings, roads, fast operation processing, etc.'
            image='/images/banners/al-manzal-web-banner.jpg'
          />
          <SingleCompany
            _id='trusticon'
            name='Trusticon Real Estate'
            detail='At Chiltern traveling and tourism, our effective associations
                and accomplice inns are our assurance that we will discover you
                the ideal convenience from a wide reach with the best rates
                accessible and take into account the entirety of your
                necessities for an exceptional occasion insight.'
            image='/images/banners/trust-icon-web-banner.jpg'
          />
          <SingleCompany
            _id='chilternTNT'
            name='Chiltern Travel & Tours'
            detail='The role of digital media marketing and new automated supporting
                tools in successful business increase manifold in a few years.
                It seems permanent phenomena in the future as well.'
            image='/images/banners/chiltern-web-banner.jpg'
          />
          <SingleCompany
            _id='nam-globle'
            name='NAM Globle UAE'
            detail='We Provide 52+ Cooperate Services like Document processing in
                immigration, employment and other government departments,
                Business sponser services, Tourism license services, etc.'
            image='fas fa-shield-alt'
          />
        </div>
      </div>
    </section>
  )
}

export default Companies
