import React, { useEffect, useState } from "react";
import OptionMenu from "../../img/OptionMenu.svg";
import { useSelector } from "react-redux";
import GrowExample from "../../components/Form/Isloading";

function LeftSide(props) {
  const [client, setClient] = useState();
  const [admin, setAdmin] = useState();

  const isLoading = useSelector((state) => state?.Jobfetch?.isLoading);
  const jobPostdata = useSelector((state) =>
    state?.Jobfetch?.jobData
      ? state?.Jobfetch?.jobData
      : [{ IsLoading: true }]
  );

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

  console.log(jobPostdata);
  // const JobListing = props?.data

  return (
    <>
      <div className="main-container">
        {client === true ? (
          <>
            {isLoading === true  ? (
              <GrowExample />
            ) : (
              ""
            )}

            <div className="client-heading">
              <p>Your Posting</p>
              <span>See All The Posting</span>
            </div>

            {jobPostdata.slice(0, 2).map((items) => {
              return items.error ? (
                <p>Do Your First Job Post</p>
              ) : (
                <div className="jobPosting pointer">
                  <div>
                    <p>{items.title}</p>
                    <p>Posted 8 min ago</p>
                  </div>
                  <span className="pointer MenuOption">
                    <img src={OptionMenu} alt="" />
                  </span>
                </div>
              );
            })}
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
