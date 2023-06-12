import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./Left";
import { useDispatch, useSelector } from "react-redux";
import RightSide from "./Right";
import { getUserDetails } from "../redux/auctions/userLogin";


function ClientDashboard() {

  const dispatch = useDispatch()  
  const dataID = {
    email: "mohhomadfarman@gmail.com"
  }
  useEffect(() => {
    dispatch(getUserDetails(dataID))
  },[])

  const data = useSelector((state)=>state?.userList?.DataList[0])


  console.log(data)


  




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
        
      <p>{data?.fullname}</p>
       
      </div>
     <div>
     <button className='Right-GreenBTn'>Post a job</button>
     </div>
     </div>
      </Col>
    <Col md={7}  className="offset-md-1" >
      <LeftSide client={true} />
    </Col>
    <Col md={4}>
      <RightSide  username={data?.fullname} button="Post a Job"/>
    </Col>
</Row>
  </Container>
  </>
  
  
  );
}

export default ClientDashboard;
