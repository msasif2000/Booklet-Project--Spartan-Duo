import React from "react";
import ChildCard from "./ChildCard";
import "./Childrens.css";

export default function Childrens() {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/allbook")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) => book.category === "Childrens");

  return (
    <section className="outer">
      <h1>
        Children's <span>Section</span>
      </h1>
      <p>
        Welcome to the eLibrary Children's Book section! Here, we offer a wide
        range of engaging and educational books specifically tailored for young
        readers. Our collection features an assortment of fiction and
        non-fiction books, designed to captivate the imaginations of children of
        all ages.
      </p>
      <div className="grd">
        {filteredBooks.map((book) => (
          <ChildCard book={book} key={book._id} />
        ))}
      </div>
    </section>
  );
}
