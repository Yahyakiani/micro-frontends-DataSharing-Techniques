import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'

const Side = props => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/account">My Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">FAQ's</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">White Paper</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar