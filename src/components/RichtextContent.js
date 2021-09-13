import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";

const Bold = ({ children }) => <span>{children}</span>;
const Text = ({ children }) => <p>{children}</p>;
const Heading = ({ children }) => <h4>{children}</h4>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_4]: (node, children) => <Heading>{children}</Heading>,
  },
};

const RichTextContent = ({ richText }) => {
  return <Wrapper>{richText && renderRichText(richText, options)}</Wrapper>;
};

export default RichTextContent;

const Wrapper = styled.div`
  h4 {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    color: var(--color-grass-light);
    font-size: 1.25rem;

    &:first-child {
      padding-top: 0.5rem;
    }
  }
  p {
    padding-bottom: 1rem;

    span {
      font-weight: 700;
    }
  }
  ul {
    list-style-type: disc;
    padding-left: 1rem;
    line-height: 1.2;
  }

  @media screen and (min-width: 1200px) {
    h4 {
      padding-top: 2.5rem;
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }
  }
`;
