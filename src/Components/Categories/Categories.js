import Dropdown from 'react-bootstrap/Dropdown';
import "./Categories.css"
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function DropdownItemTagsExample() {
  return (
    <DropdownButton id="btn" title="Categories" variant="">
      <div className="ip">
      <Dropdown.Item as="button"><Link to="/Childrens" style={{color:'black'}}>Childrens</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LiteraryFiction" style={{color:'black'}}>Literary Fiction</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ScienceTechnology" style={{color:'black'}}>Science And Technology</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/CareerGrowth" style={{color:'black'}}>Career And Growth</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ReligionSpirituality" style={{color:'black'}}>Religion And Spirituality</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Magazines" style={{color:'black'}}>Magazines</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LanguageStudies" style={{color:'black'}}>Language Studies</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/History" style={{color:'black'}}>History</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/PoliticsPhilosophy" style={{color:'black'}}>Politics And Philosophy</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Travel" style={{color:'black'}}>Travel</Link></Dropdown.Item>
      </div>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;
