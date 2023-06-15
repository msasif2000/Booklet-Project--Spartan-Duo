import React from "react";
import "./LiteraryFiction.css";
import LFCard from "./LFCard";

export default function LiteraryFiction() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/allbook")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) => book.category === "Literary Fiction");

  return (
    <section className="outer">
      <h1>Literary <span>Fiction</span></h1>
      <p>Welcome to the eLibrary Children's Book section! Here, we offer a wide range of engaging and educational books specifically tailored for young readers. Our collection features an assortment of fiction and non-fiction books, designed to captivate the imaginations of children of all ages.</p>
      <div className="grd">
        {filteredBooks.map((book) => (
          <LFCard book={book} key={book._id} />
        ))}
      </div>
    </section>
  );
}