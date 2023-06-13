import Dropdown from 'react-bootstrap/Dropdown';
import "./Categories.css"
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function DropdownItemTagsExample() {
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <DropdownButton id="btn" title="Categories" variant="">
      <div className="ip">
      <Dropdown.Item as="button"><Link to="/Childrens" style={{color:'black'}} onClick={toggleMenu}>Childrens</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LiteraryFiction" style={{color:'black'}} onClick={toggleMenu}>Literary Fiction</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ScienceTechnology" style={{color:'black'}} onClick={toggleMenu}>Science And Technology</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/CareerGrowth" style={{color:'black'}} onClick={toggleMenu}>Career And Growth</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ReligionSpirituality" style={{color:'black'}}>Religion And Spirituality</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Magazines" style={{color:'black'}} onClick={toggleMenu}>Magazines</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LanguageStudies" style={{color:'black'}} onClick={toggleMenu}>Language Studies</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/History" style={{color:'black'}} onClick={toggleMenu}>History</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/PoliticsPhilosophy" style={{color:'black'}} onClick={toggleMenu}>Politics And Philosophy</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Travel" style={{color:'black'}} onClick={toggleMenu}>Travel</Link></Dropdown.Item>
      </div>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;
