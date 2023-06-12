import { Form, Field } from "react-final-form";

function Postjob() {
  const onSubmit = (values) => {
    console.log(values, "ggggggggggg");
  };

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
    postjob: "",
    addskills: "",
    scopework: "",
    Buget: "",
    discribe: "",
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="postjob">
              {({ input, meta }) => (
                <div>
                  <label>write a title for your job post</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="addskills">
              {({ input, meta }) => (
                <div>
                  <label>addskills </label>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <label>select scope of your work </label>
            <Field name="scopework" component="select">
              <option value="small">small</option>
              <option value="mediun">mediun </option>
              <option value="large">large </option>
            </Field>
            <Field name="Buget">
              {({ input, meta }) => (
                <div>
                  <label> tell us about your buget/(fixed) </label>
                  <input {...input} type="number" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <label> discribe what you need </label>

            <Field
              name="discribe"
              component="textarea"
              placeholder=" discribe Notes"
            />
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
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
    </>
  );
}
export default Postjob;
