import React from 'react';
import "./Signup.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import Footer from '../Footer/Footer';

function Signup() {
  return (
    <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height:'90vh'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mt' style={{width: '500px', marginTop: '10vh', height: '60vh'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='' style={{height: '6vh'}}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <Footer />
    </div>
    
  );
}

export default Signup;