import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a mandatory field")
    .email("Must be a valid email"),
  name: yup
    .string()
    .required("Name is a mandatory field")
    .min(3, "Name should be at least 3 characters")
    .max(50, "Name should be maximum 50 characters"),
  message: yup
    .string()
    .required("Message is a mandatory field")
    .min(10, "Please write us a message between 10 and 250 characters.")
    .max(250, "Please write us a message between 10 and 250 characters."),
});

const ContactForm = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/mnqlleor",
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thank you for reaching out!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, "An error occured :/");
      });
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          email: "",
          name: "",
          message: "",
        }}
        validationSchema={formSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, touched, dirty, isValid, isSubmitting }) => {
          return (
            <Form className="form">
              <div className="form-control">
                <label htmlFor="email">Your email *</label>
                <Field name="email" />
                <p className="error-message">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="form-control">
                <label htmlFor="name">Your name *</label>
                <Field name="name" />
                <p className="error-message">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div className="form-control msg">
                <label htmlFor="message">How can we help? *</label>
                <Field name="message" component="textarea" rows={4} />
                <p className="error-message">
                  {errors.message && touched.message && errors.message}
                </p>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                send
              </button>
              <div className="submitFeedback">
                {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : "successMsg"}>
                    {serverState.msg}
                  </p>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  form {
    display: grid;
    row-gap: 10px;
    padding-top: 2.25rem;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    min-height: 85px;
    align-items: start;
    justify-items: stretch;
  }

  .form-control.msg {
    min-height: 150px;
  }

  label {
    font-weight: 400;
  }

  input,
  textarea {
    border: none;
    outline: 1px solid var(--color-primary-4);
    width: 100%;
    font-size: 1rem;
  }

  input {
    height: 40px;
    padding-left: 1rem;
  }

  textarea {
    resize: vertical;
    overflow: auto;
    min-height: 6rem;
    padding: 1rem;
  }

  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    outline: 2px solid var(--color-primary-4);
  }

  .error-message {
    line-height: 1;
    align-self: flex-end;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-red-light);
    padding-top: 5px;
  }

  .submitFeedback {
    min-height: 1.25rem;
    font-weight: 700;
  }

  .errorMsg {
    color: var(--color-red-light);
  }
  .successMsg {
    color: var(--color-grass-dark);
  }

  @media screen and (min-width: 768px) {
    .form {
      width: calc(200px + 20vw);
    }
    .submitFeedback {
      min-height: 1.5rem;
    }

    .btn {
      margin-right: auto;
    }
  }
`;
