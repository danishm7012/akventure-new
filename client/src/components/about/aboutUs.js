import React from 'react'
import './About.css'
import { Row, Col, Container } from 'react-bootstrap'

function aboutUs() {
  return (
    <div id='about' className='section about'>
      <Container>
        <h3>About Us</h3>
        <Row>
          <Col lg={5} md={5} sm={6}>
            <p>
              AKVentures is a group of companies that deals all over the United
              Arab Emirates and has the following sister concern companies: Al
              Manzal, Trust Icon, NAM Global, and Chiltern Travel & Tours.
              <br />
              We are actively looking forward to contributing to the completion
              and expanding our work field to keep pace with global investment
              and trade growth in UAE. Working under one name, AKVentures, these
              companies deal in the Real Estate, Property Management, Tourism
              Industry, Import, and Export.
              <br />
              We are proud of all the work teams within the company. We consider
              that the human staff is the secret of our success and the image
              embedded in our clients' minds, whether it comes to
              administrators, drivers, or the rest of the workers in the
              company's various departments. We are keen to define strict
              standards during employment in the company. We require the most
              substantial evidence and long experiences, and we make sure to
              link all of the above with continuous training to keep abreast of
              the developments in the profession.
            </p>
          </Col>
          <Col lg={7} md={7} sm={6}>
            <img
              src='/images/about.jpg'
              alt='About-Us'
              height='auto'
              width='100%'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default aboutUs
