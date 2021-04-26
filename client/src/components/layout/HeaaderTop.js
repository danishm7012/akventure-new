import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SamplePage from '../translatorApi/TestedApi'
import '../translatorApi/TranslateAPI.css'

function HeaaderTop() {
  return (
    <div>
      <Navbar className='nav1' expand='md'>
        <Nav className='mr-auto textcolors' navbar>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='mailto:info@lbglobe.org'>
              <strong className='fas fa-envelope faHeader'></strong>
              <span>info@akventure.org</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='tel:++971581439463'>
              <strong className='fas fa-phone-alt faHeader'></strong>
              <span>+971 58 1439463</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='translateApi'>
            <SamplePage />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaaderTop
