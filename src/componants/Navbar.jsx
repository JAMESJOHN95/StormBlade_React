import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
function Header() {
  return (
    
    <Navbar className="bg-body-dark">
        <Container>
          <Navbar.Brand className='me-3' style={{color:'white'}}>
            <img
              alt=""
              src={"https://thumbs.dreamstime.com/z/inspiration-logo-martial-arts-karate-club-kung-fu-wushu-taekwondo-168562781.jpg?ct=jpeg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            STORM BLADE
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header