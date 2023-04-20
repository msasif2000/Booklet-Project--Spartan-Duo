import Dropdown from 'react-bootstrap/Dropdown';
import "./Categories.css"
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function DropdownItemTagsExample() {
  return (
    <DropdownButton id="btn" title="Categories" variant="" >
      <Dropdown.Item as="button"><Link to="/Childrens">Childrens</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LiteraryFiction">Literary Fiction</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ScienceTechnology">Science And Technology</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/CareerGrowth">Career And Growth</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/ReligionSpirituality">Religion And Spirituality</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Magazines">Magazines</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/LanguageStudies">Language Studies</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/History">History</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/PoliticsPhilosophy">Politics And Philosophy</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to="/Travel">Travel</Link></Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;
