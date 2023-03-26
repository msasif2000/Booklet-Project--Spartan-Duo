import Logo from "../../imgs/booklet-logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar(){
    return(
      <header className="Header">
      <Link to="/"><img src={Logo} alt="Booklet Logo" style={{ background:'rgb(28, 228, 228)', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      
      <div className="navbar">
			<Link to="/">what is Booklet?</Link>
			<Link to="/MyBook">My Book</Link>
      <Link to="/Categories">Categories</Link>
			<Link to="/Contact">Contact</Link>
      </div>
      <div className="searchbox">
         <input id="searchbar" onkeyup="search_Books()" type="text"
        name="search" placeholder="Search Books.."></input>
        <ol id='list'>
        <li class="books">Children's</li>
        <li class="books">Computer</li>
        <li class="books">Literary Fiction</li>
        <li class="books">Magazines</li>
        <li class="books">Career</li>
        <li class="books">Poetry</li>
        <li class="books">Lifestyle</li>
        <li class="books">News</li>
        <li class="books">Travel</li>
        <li class="books">Religion</li>
        <li class="books">Science and Technology</li>
    </ol>
    <script src="./books.js"></script>
      </div>
      </header>
    );
}
export default Navbar;

const Header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    Header.classList.toggle ("sticky", window.scrollY > null);
});