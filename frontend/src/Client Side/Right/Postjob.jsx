import { Form, Field } from "react-final-form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useEffect, useState } from "react";
import {BiCloudUpload, BiUpload} from 'react-icons/bi';
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { JobPosting } from "../../redux/auctions/JobPostingAction";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../redux/auctions/userLogin";
import Navbar from "../../components/Navbar";
function Postjob() {
  const [file, setFile] = useState();

  const dispatch = useDispatch()




  // const dispatch = useDispatch();
  const searchParams = useParams();

  const dataID = {
    id: searchParams.id,
  };
  useEffect(() => {
    dispatch(getUserDetails(dataID));
    console.log(searchParams, "ghghgh");
  }, []);

  const data = useSelector((state) => state?.userList?.DataList[0]);

console.log(data)
  const validate = (values) => {
    let errors = {};
    if (!values.postjob) {
      errors["postjob"] = "Required";
    }
    if (!values.addskills) {
      errors["addskills"] = "Required";
    }
    if (!values.scopework) {
      errors["scopework"] = "Required";
    }
    if (!values.Buget) {
      errors["Buget"] = "Required";
    }
    if (!values.discribe) {
      errors["discribe"] = "Required";
    }
  };

  const initialValues = {
    // clientname: data.fullname,
    clientId: searchParams.id,
    title: "",
    AddSkills: "",
    ScopeOfyourWork: "",
    budget: "",
    Describe: "",
  
  };

  const onSubmit = async (initialValues) => {
    dispatch(JobPosting(initialValues))
    console.log(initialValues)
  };
  const scopework = [
    { value: "small", label: "small" },
    { value: "mediun", label: "mediun" },
    { value: "large", label: "large" },
  ];

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <>
    <Navbar/>
      <Container>
        <Row style={{ justifyContent: "center", marginBottom:"48px" }}>
          <Col md={8} >
            <div>
              <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                validate={validate}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
                  <form className="Post-JobDiv" onSubmit={handleSubmit}>
                    <div>
                      <h1>Get started</h1>
                      <div>
                        <h4>what would you like to do?</h4>
                        <p>create a new job </p>
                      </div>
                      <Field name="title">
                        {({ input, meta }) => (
                          <div className="titles-post">
                            <label>write a title for your job post</label>
                            <input
                              {...input}
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>
                    <Field name="AddSkills">
                      {({ input, meta }) => (
                        <div className="titles-post">
                          <label>add skills </label>

                          <Select
                            {...input}
                            defaultValue={[colourOptions[2], colourOptions[3]]}
                            isMulti
                            name="addskill"
                            options={colourOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />

                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="ScopeOfyourWork">
                      {({ input, meta }) => (
                        <div className="titles-post">
                          <label >select scope of your work </label>
                          <Select
                            {...input}
                            name="scopework"
                            options={scopework}
                          />
                        </div>
                      )}
                    </Field>

                    <Field name="budget">
                      {({ input, meta }) => (
                        <div className="titles-post">
                          <label> tell us about your buget/(fixed) </label>
                          <input
                            {...input}
                            className="form-control"
                            type="number"
                            placeholder="$100"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <div className="titles-post">
                      <label> discribe what you need </label>

                      <Field
                        name="Describe"
                        className="form-control"
                        component="textarea"
                        placeholder=" Discribe Notes"
                      />
                    </div>
                    <div className="titles-post">
                   <div  className="uploadinput m-0" values=" Choose File" >
                    <BiCloudUpload size={35}/>
                                       <Field name="img" >
                      {({ input: { value, onChange, ...input } }) => (
                        <input
                        className="w-100"
                          {...input}
                          type="file"
                          onChange={({ target }) => {
                            let uniqueId = Date.now();
                            const filename =
                              uniqueId + "_" + target.files[0].name;
                            let file = new File(target.files, filename);
                            // setFile(file);
                          }} // instead of the default target.value
                        />
                      )}
                    </Field>
                   </div>
                    </div>
                    <div className="post-buttons">
                      <button
                        className=""
                        type="submit"
                        disabled={submitting}
                      >
                        Post a Job
                      </button>
                  
                    </div>
                  </form>
                )}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Postjob;
