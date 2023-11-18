import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ForgotPassword.css";

function ForgotPassword() {
  const handleForgotPassword = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Enter your email";
          }
        }}
        onSubmit={handleForgotPassword}
      >
        <Form className="forgotpassword-form">
          <h3>Forgot Password</h3>
          <div className="subtext-container">
            {" "}
            <p>Enter the email address associated with your Hulle account.</p>
          </div>
          <p className="email-address">Email Address</p>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="reset-password-field"
          />
          <button className="btn-send-code">Send Code</button>
          <div className="signin-alternative">
            <p>
              Already have account? <a href="/signin">Sign In</a>
              <p>
                Don't have account? <a href="/signin">Sign Up</a>
              </p>
            </p>
          </div>
          <div className="separator"></div>
          <p className="contact-us">
            You may contact <span>Customer Service</span> for help restoring
            access to your account.
          </p>
        </Form>
      </Formik>
    </div>
  );
}
export default ForgotPassword;
