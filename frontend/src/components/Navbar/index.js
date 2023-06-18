import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import searchImg from "../../img/Search.svg";
import themeImg from "../../img/Theme.png";
import NotificationImg from "../../img/Notification.png";
import historyImg from "../../img/history.png";
import Logout from "../../img/logout.svg";
import { theme } from "@chakra-ui/react";
import { jobsearch } from "../../redux/auctions/JobPostingAction";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

function Navbar() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    jobsearch();
  }, []);

  const debounceCall = debounce((ele) => {
    dispatch(
      jobsearch({
        search: ele,
      })
    );
    console.log(ele, "fffffffffffffffffffffffffff");
  }, 700);

  const serachjob = useSelector((state) => state);

  console.log(serachjob, "gopal buhhuhu state ");
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <Container>
      <Row>
        <nav className="main nav-bar-hero">
          <div className="nav-logo">
            <span className="pointer">LOGO</span>
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

                  //  debounceCall(ele.target.value);
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
