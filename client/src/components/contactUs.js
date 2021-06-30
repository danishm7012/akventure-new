import React from 'react'
import Title from './common/title'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function contactUs() {
  return (
    <div id='contact' className='section mt-5 pb-4'>
      <Title title='Contact Us' subTitle='Get In Touch With Us.' />
      <Row>
        <Col className='p-3'>
          <iframe
            title='akventure office'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5269363452203!2d55.25959091434539!3d25.185446483901682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0ffbfffff%3A0x561a6d9c9da2b17d!2sPARK%20LANE%20TOWER!5e0!3m2!1sen!2s!4v1618552117335!5m2!1sen!2s'
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </Col>
      </Row>
      <Container>
        <Row className='py-1'>
          <Col lg={8} className='text-center order-2 order-lg-1'>
            <Form>
              <h2 className='py-1'>GET IN TOUCH WITH US.</h2>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Control type='text' placeholder='Your Name' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control type='email' placeholder='Your Email' />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridAddress1'>
                <Form.Control placeholder='Subject' />
              </Form.Group>

              <Form.Group controlId='formTextarea'>
                <Form.Control
                  as='textarea'
                  placeholder='Your Message'
                  rows={6}
                />
              </Form.Group>

              <Button className='contact-buttton' type='submit'>
                Send Message
              </Button>
            </Form>
          </Col>
          <Col lg={4} className='order-1 order-lg-2'>
            <div className='info m-2 py-4'>
              <div className='address'>
                <i class='fas fa-map-marker-alt'></i>
                <h4>Location:</h4>
                <p>
                  <span className='office-heading'>UAE Office:</span> Park Lane
                  Plaza, 12th Floor, Office No. 1213, Business Bay, Dubai UAE.
                  P.O. BOX 415253
                  <br />
                  <span className='office-heading'>UK Office:</span> 3rd Floor,
                  244 Edgware Road, London W2 1DS, UK.
                  <br />
                  <span className='office-heading'>PAK Office:</span> Office
                  No.18, Naqi Arcade, 71-The Mall Road, Lahore, Pakistan.
                </p>
              </div>

              <div className='email'>
                <i className='fas fa-envelope'></i>
                <h4>Email:</h4>
                <p>info@akventure.org</p>
              </div>

              <div className='phone'>
                <i className='fas fa-phone'></i>
                <h4>Call:</h4>
                <p>
                  <span className='office-heading'>UAE Office:</span> +971 58
                  1439463
                </p>
                <p>
                  <span className='office-heading'>UK Office:</span> +44 7391
                  758 721
                </p>
                <p>
                  <span className='office-heading'>PAK Office:</span> +92 423
                  2801559
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default contactUs
