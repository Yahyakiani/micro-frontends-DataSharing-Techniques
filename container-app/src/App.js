import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/navBar/navBar";
import { Col, Container, Row } from "react-bootstrap";
import { Routes } from "./components/routes/routes";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavigationBar />
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Routes />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;