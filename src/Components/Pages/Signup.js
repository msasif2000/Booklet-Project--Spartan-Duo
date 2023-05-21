import React from 'react';
import "./Signup.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBInput,
}
from 'mdb-react-ui-kit';
import Footer from '../Footer/Footer';

function Signup() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {name, email, password}
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(user => console.log(user))
  }
  return (
    <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height:'90vh'}}>
    <form onSubmit={handleSubmit} className='mask gradient-custom-3'>
      <MDBCard className='mt' style={{width: '500px', marginTop: '10vh', height: '60vh'}}>
        <MDBCard.Body className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput onChange={(e)=>setName(e.target.value)} label='Your Name' size='lg' id='form1' type='text' className='mb-4'/>
          <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Your Email' size='lg' id='form2' type='email' className='mb-4'/>
          <MDBInput onChange={(e)=>setPassword(e.target.value)} label='Password' size='lg' id='form3' type='password' className='mb-4'/>
          <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' style={{height: '6vh'}}>Register</MDBBtn>
        </MDBCard.Body>
      </MDBCard>
    </form>
  </MDBContainer>
  <Footer />
</div>
    
  );
  }

export default Signup;