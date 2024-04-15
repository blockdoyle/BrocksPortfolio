import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="portfolio-header">
        <div className="portfolio-title text-center">
          <h1>Brock Lockhart-Doyle</h1>
        </div>
      </div>
      <Nav />
      <Container className="border border-3 content-section rounded p-2 mt-3">
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
