import Logo from "../../imgs/booklet-logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"

import Categories from '../Categories/Categories'


function Navbar(){
    return(
      <header className="Header">
      <Link to="/"><img src={Logo} alt="Booklet Logo" style={{ background:'rgb(28, 228, 228)', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      <div className="navbar">
      <Link to="/">Home</Link>
			<Link to="/AboutUs">About us</Link>
		
      {/* <Link to="/Categories">Categories</Link> */}
      <Categories />
			<Link to="/Contact">Contact</Link>

      </div>
      </header>
    );
}
export default Navbar;
