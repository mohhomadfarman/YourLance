import React from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./Left";
import RightSide from "./Right";
function ClientDashboard() {
  return (<>
  <Navbar />
  
  <Container>
    <Row>

    </Row>
    <Row className="justify-content-center">
      <Col md={11} className="offset-md-1" >
     <div className="d-flex justify-content-between">
     <div className="Top-heading">
        <h1>Your Dashboard</h1>
        <p>Username</p>
      </div>
     <div>
     <button className='Right-GreenBTn'>Post a job</button>
     </div>
     </div>
      </Col>
    <Col md={7} className="offset-md-1">
      <LeftSide client={true}  username="Username"/>
    </Col>
    <Col md={3} >
      <RightSide button="Post a Job"/>
    </Col>
</Row>
  </Container>
  </>
  
  
  );
}

export default ClientDashboard;
