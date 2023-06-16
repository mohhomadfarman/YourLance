import { Form, Field } from "react-final-form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useEffect, useState } from "react";
import { BiCloudUpload, BiUpload } from 'react-icons/bi';
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { JobPosting } from "../../redux/auctions/JobPostingAction";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
function Postjob() {

  const dispatch = useDispatch()

  const searchParams = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"))
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
    clientname: userData.fullname,
    clientId: searchParams.id,
    title: "",
    AddSkills: "",
    ScopeOfyourWork: "",
    budget: "",
    Describe: "",
    img: "",

  };

  const onSubmit = async (initialValues) => {
    dispatch(JobPosting(initialValues))
    // console.log(initialValues)
  };

let filenames = ""

  const handleChange = (event, typename, values) => {
    let filedata = {
      types: typename,
    };

    if (values[`${typename}id`]) {
      filedata["id"] = values[`${typename}id`];
    }

    filenames = event.target.files[0].name
    // console.log(event.target.files[0].name,"dfghjkjhgfdfg")

  };


  const scopework = [
    { value: "Small", label: "Small" },
    { value: "Mediun", label: "Mediun" },
    { value: "Large", label: "Large" },
  ];

  const colourOptions = [
    { value: "Web Designing", label: "Web Designing"},
    { value: "Web Development", label: "Web Development"},
    { value: "Graphic Designing", label: "Graphic Designing"},
    { value: "Content Writing", label: "Content Writing"},
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Figma Design", label: "Figma Design"},
    { value: "Website Design", label: "Website Design" },
    { value: "Reactjs", label: "Reactjs" },
    { value: "React Native", label: "React Native" },
    { value: "JavaScripts", label: "JavaScripts" },
    { value: "Adobe Creative Suit", label: "Adobe Creative Suit" },
    { value: "Adobe Photoshop", label: "Adobe Photoshop" },
    { value: "Adobe illustrator", label: "Adobe illustrator" },
    { value: "Adobe XD", label: "Adobe XD"},
    { value: "Corel Draw", label: "Corel Draw"},
    { value: "Project Managment", label: "Project Managment" },
    { value: "Data Entry", label: "Data Entry" },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <Row style={{ justifyContent: "center", marginBottom: "48px" }}>
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
                      {console.log(values, "sdfghjhgdsdfgh")}
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
                    <Field name="PostAttachment" >
                    {({ input: { onChange, ...input }, meta }) => (
                      <label htmlFor="fileUpload" className="uploadinput m-0" data-text={values.PostAttachment ? values.PostAttachment
                              : "Upload"
                             } >
                        <BiCloudUpload size={35} />
                        
                          {/* {({ input: { value, onChange, ...input } }) => (
                        <input
                        className="w-100"
                          {...input}
                          type="file"
                          onChange={({ target }) => {
                            let uniqueId = Date.now();
                            const filename =
                              uniqueId + "_" + target.files[0].name;
                            let file = new File(target.files, filename);
                            console.log(file,"dfghjfygfd")
                            // setFile(file);
                          }} 
                        />
                      )} */}
                      {/* {console.log(values,"ertuiutfdfgutfd")} */}
                        

                            <input
                            multiple="multiple"
                              id="fileUpload"
                              name="file-upload-field"
                              value=""
                              {...input}
                              type="file"
                              onChange={(e) => {
                                onChange(e);
                                handleChange(e, "PostAttachment", values);
                              }}
               


                            />
                       
                      </label>
                         )}

                      </Field>
                    </div>
                   <div className="d-flex gap-3">
                   <div className="post-buttons">
                      <button
                        className=""
                        type="submit"
                        disabled={submitting}
                      >
                        Post a Job
                      </button>

                    </div>
                    <Link to={`/client/${searchParams.id}`} className="post-buttons btn-red">
                      <button
                        className=""
                        type="submit"
                        disabled={submitting}
                      >
                        Cancel
                      </button>

                    </Link>
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
