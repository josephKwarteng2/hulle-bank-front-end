import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";

const SignUp = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      )
      .required("Password is required"),
  });

  const getPasswordStrength = (password) => {
    const lengthRegex = /.{8,}/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;

    let strength = 0;

    if (lengthRegex.test(password)) {
      strength += 1;
    }

    if (lowercaseRegex.test(password)) {
      strength += 1;
    }

    if (uppercaseRegex.test(password)) {
      strength += 1;
    }

    if (numberRegex.test(password)) {
      strength += 1;
    }

    return strength;
  };

  const getPasswordStrengthText = (strength) => {
    if (strength >= 3) {
      return "Strong";
    } else if (strength >= 2) {
      return "Moderate";
    } else {
      return "Weak";
    }
  };

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
      {({ values }) => (
        <Form className="signup-card">
          <div>
            <label htmlFor="email" className="email-label">
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="email-field"
            />
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
            {values.password && (
              <div
                className={`password-strength ${getPasswordStrengthText(
                  getPasswordStrength(values.password)
                ).toLowerCase()}`}
              >
                {getPasswordStrengthText(getPasswordStrength(values.password))}
              </div>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
