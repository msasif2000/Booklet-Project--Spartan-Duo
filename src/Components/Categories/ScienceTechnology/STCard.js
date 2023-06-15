import React from "react";
import { Link } from "react-router-dom";
import "./STCard.css";
export default function STCard({book}) {
  return (
    <article className="card">
    <Link to={`/details/${book._id}`} style={{textDecoration:'none'}}>
        <div className="inside">
          <img src={book.img} alt={book.bookname} />
        </div>
        <div className="det">
          <h2>{book.bookname}</h2>
          <p>{book.author_name}</p>
        </div>
      </Link>
    </article>
  );
}