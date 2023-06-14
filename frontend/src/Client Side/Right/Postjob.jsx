import { Form, Field } from "react-final-form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { JobPosting } from "../../redux/auctions/JobPostingAction";
function Postjob() {
  const [file, setFile] = useState();

  const dispatch = useDispatch() 

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
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6}>
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
                  <form onSubmit={handleSubmit}>
                    <div>
                      <h1>Get started</h1>
                      <div>
                        <h4>what would you like to do?</h4>
                        <p>create a new job </p>
                      </div>
                      <Field name="title">
                        {({ input, meta }) => (
                          <div>
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
                        <div>
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
                        <>
                          <label>select scope of your work </label>
                          <Select
                            {...input}
                            name="scopework"
                            options={scopework}
                          />
                        </>
                      )}
                    </Field>

                    <Field name="budget">
                      {({ input, meta }) => (
                        <div>
                          <label> tell us about your buget/(fixed) </label>
                          <input
                            {...input}
                            className="form-control"
                            type="number"
                            placeholder="Last Name"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <label> discribe what you need </label>

                    <Field
                      name="Describe"
                      className="form-control"
                      component="textarea"
                      placeholder=" discribe Notes"
                    />

                    <Field name="img" >
                      {({ input: { value, onChange, ...input } }) => (
                        <input
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
                    <div className="buttons">
                      <button
                        className="btn btn-success"
                        type="submit"
                        disabled={submitting}
                      >
                        Post a Job
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                      >
                        Reset
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
