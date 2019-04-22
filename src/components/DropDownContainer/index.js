import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import UserInfo from '../UserInfo';

const _DropdownContainer = ({ items = [], children, className }) => {
  return (
    <Wrapper className={className}>
      <ul>
        {items.map((item, index) => (
          <li key={`${JSON.stringify(item)}${index}`}>
            <Wrapper className="d-flex p-3">
              <UserInfo />
            </Wrapper>
          </li>
        ))}
      </ul>
      {children}
    </Wrapper>
  );
};

const DropdownContainer = styled(_DropdownContainer)`
  max-height: ${props => props['maxHeight'] || '100%'};
  overflow: auto;
  margin-top: 10px;
  border: 1px solid #efefef;
  z-index: 3;
  background-color: #fff;
  position: relative;

  li {
    cursor: pointer;
    &:hover {
      background-color: #fafafa;
    }
    & + li {
      border-top: 1px solid #efefef;
    }
  }
`;

export default DropdownContainer;
