import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import Loadmore from '../LoadMore';

const Comment = styled(props => {
  const { user, comment, hours,  className } = props;
  return (
    <Wrapper className={`${className} d-flex`}>
      <Wrapper className="text-left align-self-center">
        <h2>
          <a href="/">{ user || 'Username'}</a>
          <span className="pl-2">
          {comment || 'This is comment'}
          </span>
          <Loadmore className="pl-2">more</Loadmore>
        </h2>
        <p className="hours text-uppercase mt-1">{hours || 0} hours ago</p>
      </Wrapper>
    </Wrapper>
  );
})`
  font-size: 14px;

  p {
    font-size: 11px;
    color: #999;
  }

`;

export default Comment;
