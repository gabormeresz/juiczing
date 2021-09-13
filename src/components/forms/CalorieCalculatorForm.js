import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";

import { calorieFormValidator } from "../../assets/helpers/calorieFormValidator";
import { calorieFormActivities } from "../../constants/calorieFormActivities";
import ErrorFocus from "./ErrorFocus";
import RangeInput from "./RangeInput";

const formSchema = calorieFormValidator;
const feedbackArray = calorieFormActivities;

const RangeInputComponent = props => {
  return <RangeInput feedbackArray={feedbackArray} {...props} />;
};

const CalorieForm = props => {
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
        validationSchema={formSchema}
        onSubmit={values => {
          props.onCalculate(values);
        }}
      >
        {({ errors, touched, dirty, isValid }) => {
          return (
            <Form className="form">
              <div className="form-control">
                <label htmlFor="age">Your age *</label>
                <Field name="age" type="number" />
                <p className="error-message">
                  {errors.age && touched.age && errors.age}
                </p>
              </div>
              <div className="form-control">
                <label htmlFor="height">Your height (cm) *</label>
                <Field name="height" type="number" />
                <p className="error-message">
                  {errors.height && touched.height && errors.height}
                </p>
              </div>
              <div className="form-control">
                <label htmlFor="weight">Your weight (kg) *</label>
                <Field name="weight" type="number" />
                <p className="error-message">
                  {errors.weight && touched.weight && errors.weight}
                </p>
              </div>
              <div className="form-control">
                <label htmlFor="sex">Sex *</label>
                <Field name="sex" component="select">
                  <option defaultValue>select sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <p className="error-message">
                  {errors.sex && touched.sex && errors.sex}
                </p>
              </div>
              <div className="form-control">
                <label htmlFor="activity">Daily activity level</label>
                <Field name="activity" component={RangeInputComponent} />
                <p className="error-message">
                  {errors.activity && touched.activity && errors.activity}
                </p>
              </div>
              <button type="submit" className="btn">
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
  .form-control {
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
    outline: 1px solid var(--color-primary-4);
    height: 40px;
    width: 100%;
    font-size: 1rem;
    padding-left: 15px;
  }
  select {
    padding-left: 10px;
  }
  input:active,
  input:focus,
  select:active,
  select:focus {
    outline: 2px solid var(--color-primary-4);
  }
  input[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  .error-message {
    line-height: 1;
    align-self: flex-end;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-red-light);
  }
`;
