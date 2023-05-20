import React from "react";
import STCard from "./STCard";
import "./STCard.css"


export default function ScienceTechnology() {
  const [books, setBooks] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  return (
    <section className="outer">
      <h1>Children's Section<span>.</span>
      </h1>
    <p>Have you thought about a career in tech, but weren't sure where to begin? This book will help you find out. Computer Programming For Everyone is one of three books which introduces you to coding and design, from understanding some of the key developments in the advent of computer technology to describing the features of text-based languages. You'll explore some of the basics behind how programming works. You'll also see how people use the skills in the digital workplace. This book group is part of our portfolio of digital and professional skills books, which covers a diverse range of subjects, from coding to remote working, all available for free to help you begin building your career today.</p>
      <div className="grd">
        <STCard book={books}/> 
        <STCard book={books}/>
        <STCard book={books}/>
        <STCard book={books}/>
        <STCard book={books}/>
      </div>
    </section>
  );
}