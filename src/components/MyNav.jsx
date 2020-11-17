import Reach from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const MyNav = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React Bookstore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Horror </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
