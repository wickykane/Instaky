import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper";
import UserInfo from "../UserInfo";

/**
 * CSS Section
 */

const ParentWrapper = styled(Wrapper)`
  .card {
    padding: 2rem .5rem;
    .btn-follow {
      font-size: 14px;
      width: 100px;
      align-self: center;
    }
  }
`;

const FollowUserInfo = styled(UserInfo)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    text-align: center !important;
  }
  & > * {
    margin-bottom: 1rem;
  }
`;

/**
 * Component Section
 */
const FollowCard = props => {
  return (
    <ParentWrapper {...props} className={props.className}>
      <Wrapper className="card">
        <FollowUserInfo description="Welcome to new world" />
        <button className="btn btn-primary btn-follow">Follow</button>
      </Wrapper>
    </ParentWrapper>
  );
};

export default FollowCard;
