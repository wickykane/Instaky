import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const _DropdownContainer = ({ items = [], children, className }) => {
  return (
    <Wrapper className={className}>
      <ul>
        {items.map((item, index) => (
          <li key={`${JSON.stringify(item)}${index}`}>
            <Wrapper className="d-flex p-3">
              <img
                width="30"
                height="30"
                className="rounded-circle"
                src={item.avatar || require('../../assets/images/avatar.png')}
                alt="avatar"
              />
              <Wrapper className="text-left pl-2">
                {item.des || 'Descripton'}
              </Wrapper>
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
