import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import gif from "../../imgs/02.gif"
import './Books.css'

const Books = () => {
  const booknameRef = useRef()
  const author_nameRef = useRef()
  const imgRef = useRef()
  const descriptionRef = useRef()
  const urlRef = useRef()
  const categoryRef = useRef()

  const handleBooks = (e) => {
    e.preventDefault();
  
    const bookname = booknameRef.current.value;
    const author_name = author_nameRef.current.value;
    const img = imgRef.current.value;
    const description = descriptionRef.current.value;
    const url = urlRef.current.value;
    const category = categoryRef.current.value;
    const date = new Date();
  
    const newBook = { bookname, author_name, img, description, url, category, date };
  
    fetch('http://localhost:5000/allBooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is successfully added to the database.');
        } else {
          alert(data.status);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding data to the database.');
      });
  };

  return (
    <section className='booki'>
        <div className="gridt">
          <div className="objct">
          <Form style={{marginTop:"8vh", alignItems:'center'}}onSubmit={handleBooks}>
            <h1>Add Book</h1>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter Bookname</Form.Label>
            <Form.Control className='boxg'
              ref={booknameRef}
              type="text"
              required
              placeholder="Hei Hoo"
              style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter Author Name</Form.Label>
          <Form.Control className='boxg'
            ref={author_nameRef}
            type="text"
            required
            placeholder="Mr X"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter Image Link</Form.Label>
          <Form.Control className='boxg'
            ref={imgRef}
            type="url"
            required
            placeholder="Image Link"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Book Description</Form.Label>
          <Form.Control className='boxg'
            ref={descriptionRef}
            type="text"
            required
            placeholder="Book Description"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px', fontFamily:'TimesNewRoman' }}>Enter Book Link</Form.Label>
          <Form.Control className='boxg'
            ref={urlRef}
            type="url"
            required
            placeholder="Book Link"
            style={{ fontSize:'20px', fontFamily:'TimesNewRoman' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: 'bisque', fontSize: '20px', fontFamily: 'TimesNewRoman' }}>Select Book Category</Form.Label>
        <Form.Control className='boxg'
          ref={categoryRef}
          as="select"
          required
          style={{ fontSize: '20px', fontFamily: 'TimesNewRoman' }}
          >
          <option value="Childrens">Childrens</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Science And Technology">Science And Technology</option>
          </Form.Control>
          </Form.Group>

        <Button variant="primary" type="submit">Enter Book</Button>
          </Form>
          </div>
          <div className="objct"><img className="img-fluid" src={gif} alt="about"/></div>
        </div>
    </section>
  )
}
export default Books;