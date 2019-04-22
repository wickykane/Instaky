import React from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper';
import UserInfo from '../UserInfo';

/**
 * CSS Section
 */

const ParentWrapper = styled(Wrapper)`
  font-size: 14px;
  .card-header {
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 0;
  }

  .follow-button {
      color: #3897f0;
  }
`;

/**
 * Component Section
 */
const SuggestionCard = props => {
  return (
    <ParentWrapper className={props.className}>
      <Wrapper className="card">
        <Wrapper className="card-header d-flex">
          <span className="title-header">Suggestion</span>
          <button className="btn-link-default font-weight-bold">All</button>
        </Wrapper>
        <Wrapper className="card-body">
            <Wrapper className="d-flex justify-content-between">
                <UserInfo></UserInfo>
                <button className="btn-link-default follow-button">Follow</button>
            </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

export default SuggestionCard;
