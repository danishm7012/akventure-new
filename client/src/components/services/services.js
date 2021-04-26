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
          detail='UAE being the international hub of trade provides best import and
            export opportunities with attracting infrastructure such as
            buildings, roads, fast operation processing, etc.'
        />
        <SingleService
          name='Travel and Tourism'
          icon='fas fa-umbrella-beach'
          detail='At Chiltern traveling and tourism, our effective associations and
            accomplice inns are our assurance that we will discover you the
            ideal convenience from a wide reach with the best rates accessible
            and take into account the entirety of your necessities for an
            exceptional occasion insight.'
        />
        <SingleService
          name='Marketing and Ads'
          icon='fas fa-bullhorn'
          detail='The role of digital media marketing and new automated supporting
            tools in successful business increase manifold in a few years. It
            seems permanent phenomena in the future as well.'
        />
        <SingleService
          name='Cooperate Services'
          icon='fas fa-shield-alt'
          detail=' We Provide 52+ Cooperate Services like Document processing in
            immigration, employment and other government departments, Business
            sponser services, Tourism license services, etc.'
        />
      </div>
    </div>
  )
}

export default Services
