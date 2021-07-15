import React from 'react'
import { Image } from 'react-bootstrap'

const SingleService = ({ name, icon, detail, img }) => {
  return (
    <>
      <div
        class='col-md-6 col-lg-6 icon-box text-center'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <i class={icon}></i>
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <div
        class='col-md-6 col-lg-6 icon-box text-center'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <Image
          src={img}
          height='auto'
          width='100%'
          style={{ paddingTop: '20px' }}
        />
      </div>
    </>
  )
}

export default SingleService
