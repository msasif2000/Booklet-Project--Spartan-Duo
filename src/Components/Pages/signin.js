import React from 'react';
import "./Signin.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import Footer from '../Footer/Footer';

function Signin() {
  return (
    <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height:'90vh'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mt' style={{width: '500px', marginTop: '10vh', height: '50vh'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='' style={{height: '6vh'}}>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <Footer />
    </div>
  );
}

export default Signin;