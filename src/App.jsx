import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="portfolio-header text">
        <div className="portfolio-title text-center mt-4">
          <h1>Brock Lockhart-Doyle</h1>
        </div>
      </div>
      <Nav />
      <Container className="border border-3 content-section rounded p-2 mt-3 text">
        <Row>
          <Col>
            <Outlet /> {/* This is where the child routes will be rendered */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
