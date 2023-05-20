import gif from "../../imgs/02.gif"
import React from 'react'
import "./AboutUs.css"

function About(){
    return(
        <div className="container my-4">
  <div className="grid m-0 p-0">
    <div className="item"><h3>Booklet is one kind of eBook library, sometimes called an eLibrary, it is a collection of electronic books, where user can get access of some free books, some paid soft copy of books.In this website we are going to provide so many types of of books like Childrens.


</h3></div>
    <div className="item"><img className="img-fluid" src={gif} alt="about"/></div>
  </div>
</div>


    )
}
export default About;