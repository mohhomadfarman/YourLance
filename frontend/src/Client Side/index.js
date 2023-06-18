import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./Left";
import { useDispatch, useSelector } from "react-redux";
import RightSide from "./Right";
import { getUserDetails } from "../redux/auctions/userLogin";
import { Link, useParams } from "react-router-dom";
import GrowExample from "../components/Form/Isloading";
import { JobdataD } from "../redux/auctions/JobPostingAction";
import OptionMenu from "../img/OptionMenu.svg";

import jwtDecode from "jwt-decode";

function ClientDashboard() {
  const dispatch = useDispatch();
  const searchParams = useParams();

  const userData = jwtDecode(localStorage.getItem("token"))
  const dataID = {
    id: userData.user._id,
  };
  const ListingData = {
    id: userData.user._id,
  };


  useEffect(() => {
    dispatch(getUserDetails(dataID));
    dispatch(JobdataD(ListingData));

  }, []);

  const data = useSelector((state) => state?.userList?.DataList[0]);
  const isLoading = useSelector((state) => state?.jobSearch?.isLoading);
  const SearchData = useSelector((state) => state?.jobSearch?.SearchJobsData);

  console.log(SearchData)
  return (
    <>
      
      {isLoading && <GrowExample />}
      <Container>
         <Row></Row>
         <Row className="justify-content-center">
         <Col md={11} className="offset-md-1">
             <div className="d-flex justify-content-between">
               <div className="Top-heading">
                 <h1>Your Dashboard</h1> 
 
                 <p>{data?.fullname}</p>
               </div>
               <div>
                 <Link to={`/post-job`}>
                   <button className="Right-GreenBTn">Post a job</button>
                 </Link>
               </div>
             </div>
           </Col>
           <Col md={7} className="offset-md-1">
             <LeftSide  Id={searchParams.id} client={true} />
           </Col>
           <Col md={4}>
             <RightSide username={data?.fullname} button="Post a Job" />
           </Col>
          

         </Row>
       </Container>
      

     
    </>
  );
}

export default ClientDashboard;
