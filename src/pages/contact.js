import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { IoLogoPinterest } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

import Seo from "../components/Seo";
import ContactForm from "../components/forms/ContactForm";

const contactPage = () => {
  return (
    <Wrapper>
      <Seo title="Contact" />
      <div className="hero">
        <StaticImage
          className="image"
          src="../assets/images/contact_hero.png"
          alt="orange juice in glasses"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      <section className="section-container">
        <div className="form-container">
          <div>
            <h1>Contact us</h1>
            <ContactForm />
          </div>
        </div>
        <div className="info-container">
          <h4>Become an author</h4>
          <p>
            You can become an author on Juiczing. Send us a message for more
            details!
          </p>
          <h4>Get your product featured</h4>
          <p>
            Do you have a product that you would like to be featured on
            Juiczing? Send us a message for more details!
          </p>
          <h4>Connect with us</h4>
          <div>
            <GrInstagram className="social-icon" size="2rem" />
            <IoLogoPinterest className="social-icon" size="2rem" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default contactPage;

const Wrapper = styled.div`
  .image {
    height: 220px;
  }
  .section-container {
    display: grid;
  }
  .form-container {
    padding: 3rem 2rem 2rem;
    background-color: var(--color-primary-5);

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
  .info-container {
    padding: 3rem 2rem;
    background-color: var(--color-primary-4);

    h4 {
      text-transform: capitalize;
      letter-spacing: 0;
      font-weight: 800;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      padding-top: 2rem;

      &:first-of-type {
        padding-top: 0;
      }
    }
    .social-icon {
      padding: 0.25rem;
      color: var(--color-primary-3);
    }
  }

  @media screen and (min-width: 768px) {
    .image {
      height: 250px;
    }
    .section-container {
      grid-template-columns: 3fr 2fr;
    }
    .form-container {
      padding: 3rem 3rem;
      background-color: var(--color-primary-5);
    }
    .info-container {
      padding: 3rem 3rem;
      background-color: var(--color-primary-4);
    }
  }

  @media screen and (min-width: 1200px) {
    .form-container {
      padding: 4rem 4rem;
      background-color: var(--color-primary-5);
    }
    .info-container {
      padding: 4rem 4rem;
      background-color: var(--color-primary-4);
    }
  }
`;
