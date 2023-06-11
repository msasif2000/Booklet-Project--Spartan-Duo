import Logo from "../../imgs/booklet-logo.png"
import menu from "../../imgs/menu.png"
import "./Navbar.css"
import {Link} from "react-router-dom"

import Categories from '../Categories/Categories'
import { useState } from "react"


function Navbar(){
  const isUser = localStorage.getItem('isUser')
  const handleSignOut = () => {
    localStorage.removeItem('isUser')
    window.location.href = '/'
  }
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  
    return(
      <header className="Header">
      <Link to="/" style={{textDecoration:'none'}}><img src={Logo} alt="Booklet Logo" style={{ background:'bisque', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      <div className={toggle?"navbar active": "navbar"}>
      <Link to="/" style={{textDecoration:'none'}} onClick={toggleMenu}>Home</Link>
			<Link to="/AboutUs" style={{textDecoration:'none'}} onClick={toggleMenu}>About us</Link>
		
      {/* <Link to="/Categories">Categories</Link> */}
      <Categories />
			<Link to="/Contact" style={{textDecoration:'none'}} onClick={toggleMenu}>Contact</Link>
      {
        isUser ? <Link to="/Signin" style={{textDecoration:'none'}}onClick={handleSignOut}>Sign Out</Link> :
        (
          <div>
          <Link to="/Signin" style={{textDecoration:'none'}} onClick={toggleMenu}>Sign In</Link>
          <Link to="/Signup" style={{textDecoration:'none'}} onClick={toggleMenu}>Sign Up</Link>
          </div>
        )
      }
      </div>
      <button className="toggle"><img src={menu} alt="menu" style={{ background:'trandparent', borderRadius:'7px', width:'auto', height:'6vh'}} onClick={toggleMenu}/></button>
      </header>
    );
}
export default Navbar;
