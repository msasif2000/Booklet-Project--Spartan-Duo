import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import icon from "../../imgs/icon2.png"
import "./Signup.css"

const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignup = (e) => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const newBook = { name, email, password}

    fetch('http://localhost:5000/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
        else {
          alert(data.status)
        }
      })

    e.preventDefault()
  }

  return (
    <section className='sign'>
        <div className="grid">
          <div className="obj">
          <Form style={{marginTop:"8vh", alignItems:'center'}}onSubmit={handleSignup}>
            <h1>User Registration</h1>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman'}}>Enter Your Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              required
              placeholder="Mr X"
              style={{ fontSize:'20px', fontFamily:'TimesNewRoman', width:'500px'}}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman'}}>Enter Your Email</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            required
            placeholder="example@hotmail.com"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman', width:'500px'}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman'}}>Enter Your Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            required
            placeholder="ExaMple@123"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman', width:'500px'}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
          </Form>
          </div>
          <div className="obj"><img className="img-fluid" src={icon} alt="about"/></div>
        </div>
    </section>
  )
}
export default Signup;