import React from "react";
import { Link } from "react-router-dom";
import "./LFCard.css";
export default function LFCard({book}) {
  return (
    <article className="card">
      <Link to="/books/details" style={{textDecoration:'none'}}>
        <div className="inside">
          <img src="https://th.bing.com/th/id/R.8c69c1c0186301d05ac60badd57d0f38?rik=5dkfL8K25RXf3Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcA%2fAzj%2fRcAAzjd4i.png&ehk=o7IgOo9AR7bY0YnJnmYu6TMutNrkpEkuG1Ax7lHV%2fWU%3d&risl=&pid=ImgRaw&r=0" alt="book" />
        </div>
        <div className="det">
          <h2>{book.bookname}</h2>
          <p>{book.author_name}</p>
        </div>
      </Link>
    </article>
  );
}