import React, { useState } from "react";
import { Container, Form, InputGroup, NavLink, Row } from "react-bootstrap";
import searchImg from "../../img/Search.svg";
import themeImg from "../../img/Theme.png";
import NotificationImg from "../../img/Notification.png";
import historyImg from "../../img/history.png";
import Logout from "../../img/logout.svg";
import { debounce } from "lodash";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { jobSearch } from "../../redux/auctions/JobPostingAction";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()


const debounceCall = debounce((ele) => {
let SearchValues = {
    search: ele
  }
dispatch(jobSearch(SearchValues))

  SearchData?.success === true && navigate("/Search")


}, 700);


const isLoading = useSelector((state) => state?.jobSearch?.isLoading);
const SearchData = useSelector((state) => state?.jobSearch?.SearchJobsData);

console.log(isLoading)



  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <Container>
      <Row>
        <nav className="main nav-bar-hero">
          <div className="nav-logo">
           <Link to="/"><span className="pointer">LOGO</span></Link>
          </div>
          <div className="nav-menu">
            <InputGroup className="input-group-1 ">
              <InputGroup.Text
                className="bg-transparent px-2"
                id="basic-addon1"
              >
                <img src={searchImg} alt="" />
              </InputGroup.Text>
              <Form.Control
                className="px-0"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={
                  (e) => debounceCall(e.target.value)

                
                }
              />
            </InputGroup>
            {/* <span><Link to="/home"> home </Link></span> */}
            <span className="pointer">
              <img src={themeImg} alt="" />
            </span>
            <span className="pointer">
              <img src={historyImg} alt="" />
            </span>
            <span className="pointer">
              <img src={NotificationImg} alt="" />
            </span>
            <span onClick={logout} className="pointer">
              <img src={Logout} alt="" />
            </span>
          </div>
        </nav>
      </Row>
    </Container>
  );
}

export default Navbar;
