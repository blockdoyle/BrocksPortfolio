import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="border border-3 content-section rounded p-2 mt-3">
        <Row>
          <Col>
            <HomePage />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
