import React, { useState, useRef } from "react";
import styled from "styled-components";

import CalorieForm from "./forms/CalorieCalculatorForm";
import CalorieCalc from "../assets/helpers/calorieCalc";

const CalorieCalculator = () => {
  const [calculatedCalories, setCalculatedCalories] = useState(undefined);
  const resultsRef = useRef();

  const calculateHandler = values => {
    if (values) {
      setCalculatedCalories(CalorieCalc(values));
    } else {
      setCalculatedCalories(null);
    }

    resultsRef.current.scrollIntoView({
      behavior: "smooth",
      block: `${values ? "end" : "start"}`,
      inline: "nearest",
    });
  };

  return (
    <Wrapper>
      <h2>
        how many calories should you consume daily
        <br />
        <span>to loose weight?</span>
      </h2>
      <div className="calculator-container" ref={resultsRef}>
        <CalorieForm onCalculate={calculateHandler} resultsRef={resultsRef} />
        <div className="results-container">
          <div className="result">
            <h4>to lose weight</h4>
            {calculatedCalories && (
              <p>
                {`${calculatedCalories.loseWeight[0]} - ${calculatedCalories.loseWeight[1]} `}
                <span>Kcal/day</span>
              </p>
            )}
            {!calculatedCalories && (
              <p>
                <span>
                  <i>fill out the form to see calories</i>
                </span>
              </p>
            )}
          </div>
          <div className="result">
            <h4>to maintain weight</h4>
            {calculatedCalories && (
              <p>
                {`${calculatedCalories.maintainWeight[0]} - ${calculatedCalories.maintainWeight[1]} `}
                <span>Kcal/day</span>
              </p>
            )}
            {!calculatedCalories && (
              <p>
                <span>
                  <i>fill out the form to see calories</i>
                </span>
              </p>
            )}
          </div>
          <div className="result">
            <h4>to gain weight</h4>
            {calculatedCalories && (
              <p>
                {`${calculatedCalories.gainWeight[0]} - ${calculatedCalories.gainWeight[1]} `}
                <span>Kcal/day</span>
              </p>
            )}
            {!calculatedCalories && (
              <p>
                <span>
                  <i>fill out the form to see calories</i>
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CalorieCalculator;

const Wrapper = styled.section`
  & {
    background-color: var(--color-primary-5);
    padding: 1.875rem 1.25rem 0 1.25rem;
  }
  h2 {
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
  }
  p {
    font-weight: 800;
    font-size: 1.6rem;
    padding-top: 5px;
    color: var(--color-primary-2);

    span {
      font-weight: 400;
      font-size: 1rem;
    }
  }
  .calculator-container {
    display: grid;
    gap: 1.25rem;
    padding: 2.5rem 0;
  }
  .results-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;
  }
  .result {
    display: grid;
    place-items: start;
    padding: 1.25rem 2.5rem;
    width: 100%;
    background-color: var(--color-primary-4);
    transition: var(--transition-fast);
    h4 span {
      font-weight: 400;
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      padding: 1.875rem 5rem 0 5rem;
    }
    .calculator-container {
      grid-template-columns: 1fr 1fr;
      gap: 3.125rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
      padding: 1.875rem 7.5rem 0 7.5rem;
    }
    .calculator-container {
      gap: 6.25rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
