import React, { useEffect, useState } from "react";
import OptionMenu from "../../img/OptionMenu.svg";

function LeftSide(props) {
  const [client, setClient] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    if (props.client) {
      setClient(props?.client);
    } else {
      setClient(false);
    }
    if (props.admin) {
      setAdmin(props?.admin);
    } else {
      setAdmin(false);
    }
  }, []);

  return (
    <>
   
      <div className="main-container">
        {client === true ? (
          <>
            <div className="client-heading">
              <p>Your Posting</p>
              <span>See All The Posting</span>
            </div>
            <div className="jobPosting pointer">
              <div>
                <p>Web Designing</p>
                <p>Posted 8 min ago</p>
              </div>
              <span className="pointer MenuOption">
                <img src={OptionMenu} alt="" />
              </span>
            </div>
          </>
        ) : admin === true ? (
          <div>
            <p>All Jobs Listings Admin</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default LeftSide;