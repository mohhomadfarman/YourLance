import { Form, Field } from "react-final-form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useEffect, useState } from "react";
import { BiCloudUpload } from 'react-icons/bi';
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { JobPosting, MediaUploads } from "../../redux/auctions/JobPostingAction";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import jwtDecode from "jwt-decode";
import GrowExample from "../../components/Form/Isloading";
import axios from "axios";
import { MdDelete } from "react-icons/md"
import { CurrentApi } from "../../config/config";
function Postjob() {

  const dispatch = useDispatch()
  const [filesSet, SetFileSet] = useState([])

  useEffect(() => {

  })

  const userData = jwtDecode(localStorage.getItem("token"))
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

  const isLoading = useSelector((state) => state?.Jobposting?.isLoading)


  const mediaArry = []
  const filesNames = []
  const handleChange = (event, typename, values) => {
    let filedata = {
      types: typename,
    };

    if (values[`${typename}id`]) {
      filedata["id"] = values[`${typename}id`];
    }
    const myfilesname = event.target.files[0].name;
    let x = filesSet
    x.push(myfilesname)
    SetFileSet(x)
    // console.log(filesNames, "ghjkgfghjk")

    const file = event.target.files[0];


    const formData = new FormData();
    formData.append('fileUploadField', file);

    axios.post(`${CurrentApi}/api/upload`, formData).then((res) => {
      console.log(res.data.name)
      let mediaList = {
        mediaID: res?.data?._id,
        filename: res?.data?.name
      }
      mediaArry.push(mediaList)
    })
    // console.log(mediaArry,"mediaArry")

  };


  const scopework = [
    { value: "Small", label: "Small" },
    { value: "Mediun", label: "Mediun" },
    { value: "Large", label: "Large" },
  ];

  const colourOptions = [
    { value: "Web Designing", label: "Web Designing" },
    { value: "Web Development", label: "Web Development" },
    { value: "Graphic Designing", label: "Graphic Designing" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Figma Design", label: "Figma Design" },
    { value: "Website Design", label: "Website Design" },
    { value: "Reactjs", label: "Reactjs" },
    { value: "React Native", label: "React Native" },
    { value: "JavaScripts", label: "JavaScripts" },
    { value: "Adobe Creative Suit", label: "Adobe Creative Suit" },
    { value: "Adobe Photoshop", label: "Adobe Photoshop" },
    { value: "Adobe illustrator", label: "Adobe illustrator" },
    { value: "Adobe XD", label: "Adobe XD" },
    { value: "Corel Draw", label: "Corel Draw" },
    { value: "Project Managment", label: "Project Managment" },
    { value: "Data Entry", label: "Data Entry" },
  ];



  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('fileUploadField', file);

  //   axios.post("http://localhost:4000/api/upload",formData).then((res)=>{
  //     console.log(res.data._id)
  //     let mediaList = {
  //       mediaID: res.data._id
  //     }
  //     mediaArry.push(mediaList)
  //   })
  // console.log(mediaArry) 
  // };

  const initialValues = {
    clientname: userData.user.fullname,
    clientId: userData.user._id,
    title: "",
    AddSkills: "",
    ScopeOfyourWork: "",
    budget: "",
    Describe: "",
    mediaID: mediaArry,

  };

  const onSubmit = async (initialValues) => {
    dispatch(JobPosting(initialValues))
    console.log(initialValues)
  };


  // const deleteElementById = (arr, id) => {
  //   return arr.filter(item => item.id !== id);
  // };

  //  const =(media)=>{


  //  }



  //   const deletemepost = (filesNames, index) => {


  // console.log(index,"hklkjhghjkjghj")  }


  const deletemepost = (index) => {
    const fileList = [...filesSet]
    fileList.splice(index, 1)
    SetFileSet(fileList)
  }



  return (
    <>
      <Navbar />
      <Container>
        {isLoading && (<GrowExample />)}
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
                          <label htmlFor="fileUpload" className="uploadinput m-0" data-text={"Upload"
                          } >
                            <BiCloudUpload size={35} />




                            <input
                              multiple="multiple"
                              id="fileUpload"
                              name="file-upload-field"
                              className="mb-5"
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
                    <div className="titles-post">
                      <div className="d-flex flex-column">
                        {console.log(filesNames, "gopalhuu")}

                        {filesSet?.map((media, index) => {
                          return (
                            <div key={index} className="  py-2 w-100 d-flex justify-content-between">
                              <p className="mb-0 ml-3 fs-5">{media}</p> <div onClick={(e) => deletemepost(index)}><MdDelete /></div>
                            </div>
                          )
                        })}
                      </div>
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
                      <Link to={`/client`} className="post-buttons btn-red">
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
