import React from 'react'

const SingleService = ({ name, icon, detail }) => {
  return (
    <div
      class='col-md-6 col-lg-6 icon-box text-center'
      data-aos='fade-up'
      data-aos-delay='300'
    >
      <i class={icon}></i>
      <h4>{name}</h4>
      <p>{detail}</p>
    </div>
  )
}

export default SingleService
