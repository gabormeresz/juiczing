import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiOutlineMenu } from "react-icons/ai";

import navLinks from "../constants/navLinks";
import logo from "../assets/images/logo_juiczing_white_bg.svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="juiczing logo" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <div className="nav-links">
          {navLinks.map((navLink, index) => {
            return (
              <Link key={index} to={navLink.path} activeClassName="selected">
                {navLink.title}
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 100;
  background: var(--color-primary-6);
  box-shadow: var(--shadow-light);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-primary-1);
    cursor: pointer;
    transition: var(--transition);
  }

  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }

    .nav-links a {
      margin-right: 1.5rem;
      text-transform: uppercase;
      color: var(--color-primary-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition-fast);
      padding: 0.5rem 0;
    }
    .nav-links a.selected {
      box-shadow: 0px 2px var(--color-primary-1);
    }
    .nav-links a.selected:hover {
      box-shadow: 0px 2px var(--color-grass-dark);
    }
    .nav-links a:hover {
      color: var(--color-grass-dark);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;
