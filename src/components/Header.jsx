import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="Portfolio-header">
      <div className="Portfolio-title text-center">
        <h1>Brock Lockhart-Doyle</h1>
      </div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
