import React, { useState, useRef } from "react";
import styled from "styled-components";

import CalorieForm from "./CalorieCalculatorForm";
import CalorieCalc from "../../assets/helpers/calorieCalc";

const CalorieCalculator = () => {
  const [calculatedCalories, setCalculatedCalories] = useState(undefined);
  const resultsRef = useRef();

  const calculateHandler = values => {
    console.log(values);
    
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
      <div className="section-container">
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
      </div>
    </Wrapper>
  );
};

export default CalorieCalculator;

const Wrapper = styled.section`
  .section-container {
    background-color: var(--color-primary-5);
    padding: 30px 20px 0px 20px;
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
  }

  p span {
    font-weight: 400;
    font-size: 1rem;
  }

  .calculator-container {
    display: grid;
    gap: 20px;
    padding: 40px 0px;
  }

  .results-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .result {
    display: grid;
    place-items: start;
    padding: 20px 40px;
    width: 100%;
    background-color: var(--color-primary-4);
    transition: var(--transition-fast);
  }

  .result h4 span {
    font-weight: 400;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    .section-container {
      padding: 30px 80px 0px 80px;
    }
    .calculator-container {
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }

    h2 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-container {
      padding: 30px 120px 0px 120px;
    }
    .calculator-container {
      gap: 100px;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
