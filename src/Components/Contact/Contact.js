import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./Contact.css"
function Contact(){
    const unameRef = useRef();
    const mailRef = useRef();
    const messageRef = useRef();

    function handleSend(e){
        e.preventDefault();
        const uname = unameRef.current.value;
        const mail = mailRef.current.value;
        const message = messageRef.current.value;
    
        const feedback = { uname, mail, message };
        
        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
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

        e.preventDefault();
    }
    return(
        <div className="contact" id="contact">	
            <div className="contact-form">
                <h2 className="text-center">Feedback</h2>
                <p>Subscribe to our page to get the latest updates on our Book collection and posts.</p>
                <Form style={{marginTop:"8vh", alignItems:'center'}}onSubmit={handleSend}>
            <h1>User Registration</h1>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control className='MsgBox'
              ref={unameRef}
              type="text"
              required
              placeholder="Mr X"
              style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='MsgBox'
            ref={mailRef}
            type="email"
            required
            placeholder="example@hotmail.com"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='MsgBox'
            ref={messageRef}
            type="text"
            required
            placeholder="Enter Your Message"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
          </Form>
            </div>
    
            <div className="social">
                <h2>Mohammad Shahin</h2>
                <h2>Mostafa S Asif</h2>
                <h4>Address</h4>
                <p>Kumira, Sitakunda, Chattogram</p>
                <p>Phone: +880 1521-537475</p>
                <p>E-mail: <a href="mailto:c201035shahin.iiuc@gmail.com">c201035shahin.iiuc@gmail.com</a></p>
                <p>Contact Us through Gmail and Social link given below</p>
                <div className="social-form">
                    <a href="https://www.facebook.com/s.mr.holmes/"><FaFacebook/></a>
                    <a href="https://www.linkedin.com/in/mohammad-shahin-shah/"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/mohammad_sath/"><FaInstagram/></a>
                    <a href="https://www.instagram.com/mohammad_sath/"><FaTwitter/></a>
                </div>
    
                <div className="accept-card">
                    <h6>We Accept Payment Via </h6>
                    <FaMoneyCheckAlt/>
                    <FaCcMastercard/>
                    <FaCcVisa/>
                    <FaPaypal/>
                    <FaCreditCard/>
                </div>
            </div>
            
        </div>
    );
}
export default Contact;