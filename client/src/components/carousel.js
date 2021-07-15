import React from 'react'
import { Col, Row, Carousel } from 'react-bootstrap'
import './carouselbackmain.css'
function carousel() {
  return (
    <Row>
      <Col>
        <Carousel style={{ zIndex: 0 }} className='sliders'>
          <Carousel.Item style={{ zIndex: 1 }} className='slidersInfo'>
            <img
              className='d-block w-100'
              src='/images/slider/slide1.jpg'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item style={{ zIndex: 1 }} className='slidersInfo'>
            <img
              className='d-block w-100'
              src='/images/slider/slide2.jpg'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item style={{ zIndex: 1 }} className='slidersInfo'>
            <img
              className='d-block w-100'
              src='/images/slider/slide3.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item style={{ zIndex: 1 }} className='slidersInfo'>
            <img
              className='d-block w-100'
              src='/images/slider/slide4.jpg'
              alt='forth slide'
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default carousel
