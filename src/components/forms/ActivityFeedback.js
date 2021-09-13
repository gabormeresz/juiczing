import React from "react";
import styled from "styled-components";

const ActivityFeedback = ({ value, initialFeedback, feedbackArray }) => {
  const actualFeedback = feedbackArray.find(item =>
    item.values.includes(value)
  );

  let Icon, text;

  if (!actualFeedback) {
    Icon = initialFeedback.icon;
    text = initialFeedback.text;
  } else {
    Icon = actualFeedback.icon;
    text = actualFeedback.text;
  }

  return (
    <Wrapper>
      <div className="activity-feedback">
        <Icon size="1.5rem" /> {text}
      </div>
    </Wrapper>
  );
};

export default ActivityFeedback;

const Wrapper = styled.div`
  & {
    min-height: 40px;
  }
  .activity-feedback {
    padding-top: 5px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: var(--color-primary-3);
    svg {
      margin-right: 5px;
    }
  }
`;
