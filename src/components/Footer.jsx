import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <p className="text text-center mt-2">
        Made with ♥ by: Brock Lockhart-Doyle
      </p>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={Link} to="https://github.com/blockdoyle">
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="https://linkedin.com/in/blockdoyle">
            LinkedIn
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="https://twitter.com/_blockdoyle">
            X/Twitter
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;
