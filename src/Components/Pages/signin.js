import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import gif from "../../imgs/icon.png"
import "./Signup.css"

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignin = (e) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const newBook = { email, password}

    fetch('http://localhost:5000/Signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isUser === true) {
          alert(data.status)
          localStorage.setItem('isUser', true)
          window.location.href = '/'
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
        <div className="obj"><img className="img-fluid" src={gif} alt="about"/></div>
          <div className="obj">
          <Form style={{marginTop:"8vh", alignItems:'center'}}onSubmit={handleSignin}>
            <h1>User Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman'}}>Enter Your Email</Form.Label>
              <Form.Control className='box'
                ref={emailRef}
                type="email"
                required
                placeholder="example@hotmail.com"
                style={{ fontSize:'20px', fontFamily:'TimesNewRoman'}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman'}}>Enter Your Password</Form.Label>
              <Form.Control className='box'
                ref={passwordRef}
                type="password"
                required
                placeholder="ExaMple@123"
                style={{ fontSize:'20px', fontFamily:'TimesNewRoman'}}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Sign In</Button>
          </Form>
          </div>
        </div>
    </section>
  )
}
export default Signin;