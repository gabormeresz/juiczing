import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoChevronUpCircleSharp } from "react-icons/io5";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <IoChevronUpCircleSharp
          className={`scroll-button${visible ? " visible" : ""}`}
          onClick={scrollToTop}
        />
      </div>
    </Wrapper>
  );
};

export default ScrollUpButton;

const Wrapper = styled.div`
  .container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    cursor: pointer;
  }
  .scroll-button {
    display: none;
    font-size: 5rem;
    color: var(--color-grass-light);
    transition: var(--transition-fast);
    padding: 1rem;

    &.visible {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    .scroll-button:hover {
      padding: 0.5rem;
    }
  }
`;
