import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { registerStart } from "../../redux/reducer/register";

import { RegisterApi } from "../../redux/auctions/register";

const Register = () => {
  const dispatch = useDispatch();

  // useEffect( ()=>{
  //   dispatch(RegisterApi());

  // },[])

  const onSubmit = (e) => {

    const newData = e;
    localStorage.setItem("myData", JSON.stringify(newData));

    dispatch(registerStart(newData));
    dispatch(RegisterApi(newData));
    console.log(newData)
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirm) {
          errors.confirm = "Required";
        } else if (values.confirm !== values.password) {
          errors.confirm = "Must match";
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input
                  {...input}
                  type="text"
                  //   value={formData}
                  placeholder="Username"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="fullname">
            {({ input, meta }) => (
              <div>
                <label>Full Name</label>
                <input
                  {...input}
                  type="text"
                  //   value={formData}
                  placeholder="Username"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input
                  {...input}
                  type="email"
                  //   value={formData}
                  placeholder="Username"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input
                  {...input}
                  type="password"
                  //   value={formData}
                  placeholder="Password"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Confirm</label>
                <input {...input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="btn">Submit</button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default Register;
