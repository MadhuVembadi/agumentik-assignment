import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contact() {
  return (
    <div className='contact container'>
      <div className='row'>
        <div className='col d-md-flex justify-content-center align-items-center d-none'>
          <img src="https://img.freepik.com/free-vector/organic-flat-contact-us-illustration_52683-60703.jpg?w=2000" className='w-100 d-block mx-auto' />
        </div>
        <div className='col p-2'>
          <h3>GET IN <b>TOUCH</b></h3>
          <p className='text-muted'>24/7 We will answer your questions and problems</p>
          <Form>
            <div className='row'>

              <div className='col'>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom1"
                    type="text"
                    placeholder="Max"
                  />
                  <label htmlFor="floatingInputCustom1">First Name</label>
                </Form.Floating>
              </div>
              <div className='col'>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom2"
                    type="text"
                    placeholder="Vestappen"
                  />
                  <label htmlFor="floatingInputCustom2">Last Name</label>
                </Form.Floating>
              </div>
            </div>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom3"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom3">Email address</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom4"
                type="text"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom4">Phone Number</label>
            </Form.Floating>

            <FloatingLabel controlId="floatingTextarea2" label="Describe your issue here">
              <Form.Control
                as="textarea"
                placeholder="Describe your issue here"
                style={{ height: '150px' }}
              />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div >
  )
}

export default Contact