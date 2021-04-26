import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SingleCompany = ({ _id, name, detail, image }) => {
  return (
    <div
      class='col-lg-4 col-md-6 d-flex align-items-stretch'
      data-aos='zoom-in'
      data-aos-delay='100'
    >
      <div class='icon-box'>
        <Image src={image} height='auto' width='100%' />
        <h4>{name}</h4>
        <p>{detail}</p>
        <LinkContainer to={`/${_id}`}>
          <Button className='more-button' variant='outline-info'>
            More Info
          </Button>
        </LinkContainer>
      </div>
    </div>
  )
}

export default SingleCompany
