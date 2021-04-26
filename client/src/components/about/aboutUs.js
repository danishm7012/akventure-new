import React from 'react'
import './About.css'
import { Row, Col, Container } from 'react-bootstrap'

function aboutUs() {
  return (
    <div id='about' className='section about'>
      <Container>
        <Row>
          <Col lg={5} md={5} sm={6}>
            <h3>About Us</h3>
            <p>
              AKVentures is a group of companies which deals in al over the
              United Arab Emirates and have following sister concern companies:
              Al Manzal, Chiltern travel & tours, NAM Global and Trusticon.
              <br />
              We were honored to actively contribute to the completion of medium
              and large projects and to expand our field of work inside and
              outside Iraq to keep pace with global investment and trade growth
              and regional contracting as an extension of the parent company in
              DUBAI. In addition, we have more than one commercial agency from
              international companies with regard to trade in Real state ,
              Property management, tourism industry and online ecommerce LMS.
              <br />
              We are proud of all the work teams within the company. We consider
              that the human staff is the secret of our success and the image
              that is embedded in the minds of our clients, whether it comes to
              administrators, drivers or the rest of the workers in the various
              departments of the company, so we were keen to define strict
              standards during employment in the company, so we required the
              most substantial evidence. And long experiences, and we made sure
              to link with continuous training as a way to keep abreast of the
              developments in the profession.
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
