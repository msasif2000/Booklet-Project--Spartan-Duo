import Dropdown from 'react-bootstrap/Dropdown';
import "./Categories.css"
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownItemTagsExample() {
  return (
    <DropdownButton id="btn" title="Categories" variant="" >
      <Dropdown.Item as="button">Children's</Dropdown.Item>
      <Dropdown.Item as="button">Literary Fiction</Dropdown.Item>
      <Dropdown.Item as="button">Science And Technology</Dropdown.Item>
      <Dropdown.Item as="button">Career and Growth</Dropdown.Item>
      <Dropdown.Item as="button">Religion and Spirituality</Dropdown.Item>
      <Dropdown.Item as="button">Magazines</Dropdown.Item>
      <Dropdown.Item as="button">Language Studies</Dropdown.Item>
      <Dropdown.Item as="button">History</Dropdown.Item>
      <Dropdown.Item as="button">Politics and Philosophy</Dropdown.Item>
      <Dropdown.Item as="button">Travel</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;
