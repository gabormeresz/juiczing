import React from "react";
import styled from "styled-components";

import ActivityFeedback from "./ActivityFeedback";

const RangeInput = ({
  field,
  form: { touched, errors, values },
  feedbackArray,
  ...props
}) => {
  return (
    <Wrapper>
      <input
        type="range"
        min="1.4"
        max="2.5"
        step="0.1"
        value="1.7"
        {...field}
        {...props}
      />
      <ActivityFeedback
        value={field.value}
        initialFeedback={feedbackArray[1]}
        feedbackArray={feedbackArray}
      />
    </Wrapper>
  );
};

export default RangeInput;

const Wrapper = styled.div`
  & {
    width: 100%;
    margin-bottom: 10px;
  }
  input[type="range"] {
    margin: 10px auto;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    padding-left: 0;
    background: var(--color-primary-4);
    outline: none;
    opacity: 0.65;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--color-grass-dark);
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: var(--color-grass-dark);
      cursor: pointer;
    }
  }
`;
