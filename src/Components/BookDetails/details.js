import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allBooks/${id}`)
      .then((r) => r.json())
      .then(setBook);
  }, [id]);

  return (
    <div>
      <h2>{book.bookname}</h2>
      <p>{book.author_name}</p>
    </div>
  );
}
