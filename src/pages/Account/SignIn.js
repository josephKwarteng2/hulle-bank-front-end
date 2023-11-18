import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignIn.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])/,
      "Password must contain at least one uppercase letter and one number"
    )
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Email is required";
        }

        if (!values.password) {
          errors.password = "Password is required";
        }

        return errors;
      }}
    >
      <Form className="signin-card">
        <div>
          <label htmlFor="email" className="email-label">
            Email Address
          </label>
          <Field type="email" id="email" name="email" className="email-field" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div>
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="password-field"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </p>
        <button type="submit">Sign In</button>
        <div className="sign-up">
          <p>
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignIn;
