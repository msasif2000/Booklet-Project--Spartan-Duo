import Logo from "../../imgs/booklet-logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"

import Categories from '../Categories/Categories'


function Navbar(){
    return(
      <header className="Header">
      <Link to="/" style={{textDecoration:'none'}}><img src={Logo} alt="Booklet Logo" style={{ background:'bisque', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      <div className="navbar">
      <Link to="/" style={{textDecoration:'none'}}>Home</Link>
			<Link to="/AboutUs" style={{textDecoration:'none'}}>About us</Link>
		
      {/* <Link to="/Categories">Categories</Link> */}
      <Categories />
			<Link to="/Contact" style={{textDecoration:'none'}}>Contact</Link>
      <Link to="/Signin" style={{textDecoration:'none'}}>Sign In</Link>
      <Link to="/Signup" style={{textDecoration:'none'}}>Sign Up</Link>
      </div>
      </header>
    );
}
export default Navbar;
