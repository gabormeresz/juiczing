import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

import navLinks from "../constants/navLinks";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <Wrapper>
      <CSSTransition
        className="sidebar"
        in={isSidebarOpen}
        unmountOnExit
        mountOnEnter
        timeout={{ enter: 300, exit: 500 }}
        classNames="my-node"
      >
        <div>
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <AiOutlineClose />
          </button>
          <ul className={`sidebar-links`}>
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
      </CSSTransition>
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
  }
  .my-node-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .my-node-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms;
  }
  .my-node-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .my-node-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 300ms;
    transition-delay: 200ms;
  }
  .sidebar-links li {
    opacity: 0;

    a {
      display: block;
      text-align: center;
      text-transform: capitalize;
      color: var(--color-primary-1);
      letter-spacing: var(--spacing);
      margin-bottom: 0.5rem;
      font-size: 2rem;
      transition: var(--transition-fast);
      border-radius: var(--radius);

      &:hover {
        background: var(--color-grass-light);
        color: var(--color-primary-6);
      }
    }
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

  @media screen and (min-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }

  /*
===============
Sidebar Links Animation
===============
*/

  /* Enter animation*/

  .sidebar-links li {
    animation: slideRight 0.25s ease-in-out 0.3s forwards;
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
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Exit animation */

  .my-node-exit-active .sidebar-links li {
    animation: slideLeft 0.4s ease-in-out forwards;
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;
