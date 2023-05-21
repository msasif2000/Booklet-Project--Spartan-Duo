import gif from "../../imgs/02.gif"
import React from 'react'
import "./AboutUs.css"

function About(){
    return(
      <div className="container my-4">
        <h2>About Us</h2>
        <div className="grid m-0 p-0">
          <div className="item">
            <p>Welcome to <span>Booklet</span>, your premier online source for knowledge, imagination, and exploration. We are passionate about connecting readers with a diverse collection of books, audiobooks, and interactive resources, enabling you to discover, learn, and grow.<br/><br/>At eLibrary, we believe in the transformative power of reading. Our mission is to provide a comprehensive and accessible library experience, empowering individuals of all ages to expand their horizons and engage with the world of literature.<br/><br/>Our extensive collection covers a wide range of genres, including classic literature, contemporary fiction, non-fiction, science, technology, and more. Whether you're seeking a captivating story, in-depth research, or educational materials, we have something for every interest and curiosity.<br/><br/>With our user-friendly digital platform, you have the freedom to explore our virtual shelves anytime, anywhere. No longer limited by physical boundaries, you can access a wealth of knowledge and entertainment from the comfort of your own device.<br/><br/>We understand that every reader is unique, and that's why we offer a variety of formats to cater to different preferences. Whether you prefer traditional print books, immersive audiobooks, or interactive e-books, we ensure a seamless and enjoyable reading experience.</p>
          </div>
          <div className="item"><img className="img-fluid" src={gif} alt="about"/></div>
        </div>
      </div>
    )
}
export default About;