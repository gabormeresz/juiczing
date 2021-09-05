import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import ErrorFocus from "./CalorieCalculatorFormErrorFocus";

import { GiOfficeChair, GiWeightLiftingUp } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { IoWalk } from "react-icons/io5";
// import { IoInformationCircleOutline } from "react-icons/io5";

const FormSchema = yup.object().shape({
  age: yup
    .number()
    .typeError("Please use only numbers to type your age")
    .required("Age is a mandatory field")
    .min(18, "Age should be between 18 and 120 years")
    .max(120, "Age should be between 18 and 120 years"),
  height: yup
    .number()
    .typeError("Please use only numbers to type your height")
    .required("Height is a mandatory field")
    .min(140, "Height should be between 140 cm and 250 cm")
    .max(250, "Height should be between 140 cm and 250 cm"),
  weight: yup
    .number()
    .typeError("Please use only numbers to type your weight")
    .required("Weight is a mandatory field")
    .min(30, "Weight should be between 30 kg and 250 kg")
    .max(250, "Weight should be between 40 kg and 250 kg"),
  activity: yup.number().required().min(1.4).max(2.5),
  sex: yup
    .string()
    .required("Please select Male or Female")
    .matches(/(male|female)/, "Please select Male or Female"),
});

const feedbackArray = [
  {
    values: [1.4, 1.5, 1.6],
    icon: GiOfficeChair,
    text: "Sedentary: little or no exercise",
  },
  {
    values: [1.7, 1.8, 1.9],
    icon: IoWalk,
    text: "Moderate: 3-5 exercise / week",
  },
  {
    values: [2, 2.1, 2.2],
    icon: BiRun,
    text: "Active: Daily exercise",
  },
  {
    values: [2.3, 2.4, 2.5],
    icon: GiWeightLiftingUp,
    text: "Very active: 6-7 exercise / week",
  },
];

const RangeFeedback = ({ value, initialFeedback }) => {
  const actualFeedback = feedbackArray.find(item =>
    item.values.includes(value)
  );

  let Icon, text;

  if (!actualFeedback) {
    Icon = initialFeedback.icon;
    text = initialFeedback.text;
  } else {
    Icon = actualFeedback.icon;
    text = actualFeedback.text;
  }

  return (
    <div className="range-feedback-container">
      <div className="range-feedback">
        <Icon size="1.5rem" /> {text}
      </div>
    </div>
  );
};

const CalorieForm = props => {
  const RangeInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
    return (
      <div className="range-container">
        <input
          type="range"
          min="1.4"
          max="2.5"
          step="0.1"
          value="1.7"
          {...field}
          {...props}
        />
        <RangeFeedback value={field.value} initialFeedback={feedbackArray[1]} />
      </div>
    );
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          age: "",
          height: "",
          weight: "",
          activity: "1.7",
          sex: "",
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          props.onCalculate(values);
        }}
      >
        {({ errors, touched, dirty, isValid }) => {
          return (
            <Form className="form">
              <div className="age type">
                <label htmlFor="age">Your age *</label>
                <Field name="age" />
                <p className="error-message">
                  {errors.age && touched.age && errors.age}
                </p>
              </div>
              <div className="height type">
                <label htmlFor="height">Your height (cm) *</label>
                <Field name="height" />
                <p className="error-message">
                  {errors.height && touched.height && errors.height}
                </p>
              </div>
              <div className="weight type">
                <label htmlFor="weight">Your weight (kg) *</label>
                <Field name="weight" />
                <p className="error-message">
                  {errors.weight && touched.weight && errors.weight}
                </p>
              </div>
              <div className="sex type">
                <label htmlFor="sex">Sex *</label>
                <Field name="sex" component="select">
                  <option defaultValue>{"<please select>"}</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <p className="error-message">
                  {errors.sex && touched.sex && errors.sex}
                </p>
              </div>
              <div className="activity type">
                <label htmlFor="activity">
                  Daily activity level {/*<IoInformationCircleOutline /> */}
                </label>
                <Field name="activity" component={RangeInputComponent} />
                <p className="error-message">
                  {errors.activity && touched.activity && errors.activity}
                </p>
              </div>
              <button
                type="submit"
                className="btn"
                // disabled={!dirty || !isValid}
              >
                Calculate
              </button>
              <ErrorFocus onError={props.onCalculate.bind(null)} />
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default CalorieForm;

const Wrapper = styled.div`
  form {
    display: grid;
    row-gap: 10px;
  }

  .type {
    display: flex;
    flex-direction: column;
    min-height: 85px;
    align-items: start;
    justify-items: stretch;
  }

  label {
    font-weight: 400;
  }

  input,
  select {
    border: none;
    outline: none;
    height: 40px;
    width: 100%;
    font-size: 1rem;
  }

  select {
    padding-left: 10px;
  }

  input:active,
  input:focus {
    outline: 2px solid var(--color-primary-4);
  }

  input:not(input[type="range"]) {
    padding-left: 15px;
  }

  input[type="range"] {
    margin: 10px auto;
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 10px;
    border-radius: 5px;
    background: var(--color-primary-4); /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.65; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
  }

  .range-container {
    width: 100%;
    margin-bottom: 10px;
  }

  input[type="range"]:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 22px; /* Set a specific slider handle width */
    height: 22px; /* Slider handle height */
    border-radius: 50%;
    background: var(--color-grass-dark); /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  input[type="range"]::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    border-radius: 50%;
    background: var(--color-grass-dark); /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .error-message {
    line-height: 1;
    align-self: flex-end;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-primary-2);
  }

  .range-feedback-container {
    min-height: 40px;
  }
  .range-feedback {
    padding-top: 5px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: var(--color-primary-3);
  }
  .range-feedback svg {
    margin-right: 5px;
  }
`;
