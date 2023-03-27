import Logo from "../../imgs/booklet-logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"
import Search from '../Search/Search'
import Categories from '../Categories/Categories'

function Navbar(){
    return(
      <header className="Header">
      <Link to="/"><img src={Logo} alt="Booklet Logo" style={{ background:'rgb(28, 228, 228)', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      <div className="navbar">
			<Link to="/">What is Booklet?</Link>
			<Link to="/MyBook">My Book</Link>
      {/* <Link to="/Categories">Categories</Link> */}
      <Categories />
			<Link to="/Contact">Contact</Link>

      <Search/>
      </div>
      </header>
    );
}
export default Navbar;

const Header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    Header.classList.toggle ("sticky", window.scrollY > 0);
});


