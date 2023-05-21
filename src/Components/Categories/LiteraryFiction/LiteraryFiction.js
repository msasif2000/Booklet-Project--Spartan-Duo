import React from "react";
import LFCard from "./LFCard";
import "./LiteraryFiction.css"


export default function LiteraryFiction() {
  const [books, setBooks] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:5000/literaryfiction")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  return (
    <section className="outer">
      <h1>Literary <span>Fiction</span></h1>
      <p>Our literary fiction section showcases a wide array of novels, short stories, and novellas written by acclaimed authors from around the world. These books delve into complex themes, emotions, and intricate character development, offering readers an immersive and introspective reading experience.</p>
      <div className="grd">
      {
          books.map((book) => (
            <LFCard book={books} key={book._id}/>
          ))
      }
      </div>
    </section>
  );
}