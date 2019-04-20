import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const Comment = styled(props => {
  const { user, comment, hours,  className } = props;
  return (
    <Wrapper className={`${className} d-flex`}>
      <Wrapper className="text-left pl-2 align-self-center">
        <h2>
          <a href="/">{ user || 'Username'}</a>
          <span className="pl-2">
          {comment || 'This is comment'}
          </span>
        </h2>
        <p className="hours text-uppercase mt-1">{hours || 0} hours ago</p>
      </Wrapper>
    </Wrapper>
  );
})`
  font-size: 14px;

  a {
    color: #555;
    font-weight: 500;
    font-size: 14px;
  }

  p {
    font-size: 12px;
    color: #999;
    line-height: 20px;
  }

`;

export default Comment;
