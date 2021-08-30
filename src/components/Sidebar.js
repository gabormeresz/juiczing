import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiOutlineClose } from "react-icons/ai";

import navLinks from "../constants/navLinks";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <AiOutlineClose />
        </button>
        <ul className={isSidebarOpen ? "sidebar-links" : null}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={index} onClick={toggleSidebar}>
                <Link to={navLink.path} activeClassName="selected">
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  .sidebar {
    background: var(--color-primary-6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .sidebar-links li {
    opacity: 0;
  }
  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--color-primary-1);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition-fast);
    border-radius: var(--radius);
  }
  .sidebar-links li a:hover {
    background: var(--color-grass-light);
    color: var(--color-primary-6);
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-primary-1);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
  /*
===============
Sidebar Animation
===============
*/
  .sidebar-links li {
    animation: slideRight 0.3s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.15s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.3s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.45s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 0.6s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 0.75s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li a {
    color: var(--clr-grey-1);
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
