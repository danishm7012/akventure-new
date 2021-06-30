import React from 'react'
import './services.css'
import SingleService from './singleService'
import Title from '../common/title'

const Services = () => {
  return (
    <div
      id='services'
      class='icon-boxes d-flex flex-column justify-content-center px-5 section'
    >
      <Title
        title='Our Services'
        subTitle='We provide these services in UAE.'
      />

      <div class='row '>
        <SingleService
          name='Real Estate'
          icon='fas fa-home'
          detail='Dubai is known for its real state opportunities. With EXPO 2020 and other mega events happening this year and the next, Real Estate experts are confident about a robust growth in Real Estate industry in the UAE, especially in Dubai. we believe it is the best time to invest in the Real Estate Sector.'
        />
        <SingleService
          name='Travel and Tourism'
          icon='fas fa-umbrella-beach'
          detail='At Chiltern T&T, we provide you UAE Visa and international  our effective associations and accomplice inns are our assurance that we will discover you the ideal convenience from a wide reach with the best rates accessible and take into account the entirety of your necessities for an exceptional occasion insight.'
        />
        <SingleService
          name='Import and Export'
          icon='fas fa-luggage-cart'
          detail='UAE being the international hub of trade provides best import and export opportunities with attracting infrastructure such as buildings, roads, fast operation processing, etc. We deal in all sorts of import and export of leather products, organic products, surgical instruments, clothes, textiles, sportswear, sports goods, etc.'
        />
        <SingleService
          name='Corporate Services'
          icon='fas fa-shield-alt'
          detail=' We Provide 52+ Corporate Services like Document processing in
            immigration, employment and other government departments, Business
            sponser services, Tourism license services, etc.'
        />
      </div>
    </div>
  )
}

export default Services
