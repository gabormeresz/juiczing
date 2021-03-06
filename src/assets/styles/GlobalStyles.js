import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /*
=============== 
Variables
===============
*/

  :root {
    --color-primary-1: rgb(0, 0, 0);
    --color-primary-2: rgb(77, 102, 102);
    --color-primary-3: rgb(114, 138, 144);
    --color-primary-4: rgb(209, 224, 224);
    --color-primary-5: rgb(242, 248, 248);
    --color-primary-6: rgb(255, 255, 255);
    --color-grass-light: rgb(174, 203, 64);
    --color-grass-light-transparent: rgba(174, 203, 64, 0.8);
    --color-grass-dark: rgb(121, 146, 32);
    --color-red-dark: hsl(360, 67%, 44%);
    --color-red-light: hsl(0, 96%, 70%);
    --shadow-light: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-dark: 0 5px 15px rgba(0, 0, 0, 0.2);
    --shadow-dark-intensive: 3px 3px 12px rgba(0, 0, 0, 1);
    --ff-primary: "Nunito", sans-serif;

    --transition: all 0.3s linear;
    --transition-fast: all 0.15s linear;
    --spacing: 0.2rem;
    --spacing-mild: 0.1rem;
    --radius: 0.25rem;
    --max-width: 1170px;
    --fixed-width: 700px;
  }
  /*
=============== 
Global Styles
===============
*/

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--ff-primary);
    background: var(--color-primary-6);
    color: var(--color-primary-1);
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 5rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    line-height: 1.25;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 2rem;
    }
  }

  /*  Buttons */

  .btn {
    text-transform: uppercase;
    background: var(--color-grass-light);
    color: var(--color-primary-6);
    padding: 0.8rem 1.5rem;
    letter-spacing: var(--spacing);
    font-weight: 700;
    -webkit-transition: var(--transition-fast);
    transition: var(--transition-fast);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: none;
    border-radius: var(--radius);
  }
  .btn:hover {
    box-shadow: 0 0 20px 3px rgba(121, 146, 32, 0.2);
  }

  .btn:disabled {
    background: var(--color-primary-4);
    cursor: not-allowed;
  }

  .btn:disabled:hover {
    background: var(--color-primary-4);
    box-shadow: 0 0 20px 3px rgba(121, 121, 121, 0.2);
  }

  .btn-transparent {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    text-transform: uppercase;
    color: var(--color-grass-light);
    letter-spacing: var(--spacing);
    font-weight: 400;
    -webkit-transition: var(--transition-fast);
    transition: var(--transition-fast);
    font-size: 0.875rem;
  }
  .btn-transparent:hover {
    border-bottom: 1px solid var(--color-grass-light);
  }
`;

export default GlobalStyles;
