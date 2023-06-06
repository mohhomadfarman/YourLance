import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { loginStart } from "../../redux/reducer/usersLogin";
import { loginApi } from "../../redux/auctions/userLogin";

const Login = () => {

    const dispatch = useDispatch();

  const onSubmit = async (e) => {
    
  
    const newData = e;
    // e.preventDefault();
      dispatch(loginStart(newData));
      dispatch(loginApi(newData)).then( res => console.log(res));
    
      
  }

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

          <div className="buttons">
            <button type="btn">Login</button>

          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default Login;
