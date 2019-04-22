import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const UserInfo = styled(props => {
  const { description, className } = props;
  return (
    <Wrapper className={`${className} d-flex`}>
      <img
        width="30"
        height="30"
        className="rounded-circle"
        src={require('../../assets/images/avatar.png')}
        alt="avatar"
      />
      <Wrapper className="text-left pl-2 align-self-center">
        <h2>
          <a href="/">{'Content'}</a>
        </h2>
        {description && <p>{description}</p>}
      </Wrapper>
    </Wrapper>
  );
})`

  p {
    font-size: 12px;
    color: #999;
    line-height: 20px;
  }

  &.large {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export default UserInfo;
