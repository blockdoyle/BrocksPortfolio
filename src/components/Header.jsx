import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="portfolio-header">
      <div className="portfolio-title text-center">
        <h1>Brock Lockhart-Doyle</h1>
      </div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="navlinks">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" className="navlinks">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects" className="navlinks">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" className="navlinks">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
