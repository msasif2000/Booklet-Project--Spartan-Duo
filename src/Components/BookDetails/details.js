import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allbook/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setBook(data);
      })
      console.log(book);
  }, [id, book]);

  return (
    <div>
    <div className='imag'>
      <img src={book.img} alt={book.bookname} />
    </div>
    <div className='Descp'>
      <h2>{book.bookname}</h2>
      <p>{book.author_name}</p>
      <p>{book.description}</p>
      <p>{book.category}</p>
      <p>{book.date}</p>
    </div>
    </div>
  );
}
