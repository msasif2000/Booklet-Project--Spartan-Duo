import Logo from "../../imgs/booklet-logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"

import Categories from '../Categories/Categories'


function Navbar(){
  const isUser = localStorage.getItem('isUser')
  const handleSignOut = () => {
    localStorage.removeItem('isUser')
    window.location.href = '/'
  }
    return(
      <header className="Header">
      <Link to="/" style={{textDecoration:'none'}}><img src={Logo} alt="Booklet Logo" style={{ background:'bisque', borderRadius:'7px', width:'auto', height:'6vh'}}/></Link>

      <div className="navbar">
      <Link to="/" style={{textDecoration:'none'}}>Home</Link>
			<Link to="/AboutUs" style={{textDecoration:'none'}}>About us</Link>
		
      {/* <Link to="/Categories">Categories</Link> */}
      <Categories />
			<Link to="/Contact" style={{textDecoration:'none'}}>Contact</Link>
      {
        isUser ? <Link to="/Signin" style={{textDecoration:'none'}} onClick={handleSignOut}>Sign Out</Link> :
        (
          <div>
          <Link to="/Signin" style={{textDecoration:'none'}}>Sign In</Link>
          <Link to="/Signup" style={{textDecoration:'none'}}>Sign Up</Link>
          </div>
        )
      }
      </div>
      </header>
    );
}
export default Navbar;
