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

function ClientDashboard() {
  const dispatch = useDispatch();
  const searchParams = useParams();

  const dataID = {
    id: searchParams.id,
  };
  const ListingData = {
    id: searchParams.id,
  };


  useEffect(() => {
    dispatch(getUserDetails(dataID));
    dispatch(JobdataD(ListingData));

    console.log(searchParams, "ghghgh");
  }, []);

  const data = useSelector((state) => state?.userList?.DataList[0]);
  // const isLoading = useSelector((state) => state?.Jobsearch?.isLoading);
  localStorage.setItem("userData", JSON.stringify(data));


  return (
    <>
      {/* {isLoading && <GrowExample />} */}
      <Navbar />

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
                <Link to={`/Postjob/${searchParams.id}`}>
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
