import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <footer className="text-center p-5 text">
        <p>Made with ♥ by Brock Lockhart-Doyle</p>
        <Nav.Item>
          <Nav.Link as={Link} to="https://github.com/blockdoyle">
            GitHub
          </Nav.Link>
        </Nav.Item>
      </footer>
    </>
  );
}

export default Footer;
