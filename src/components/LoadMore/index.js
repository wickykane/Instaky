import React from "react";
import styled from "styled-components";

const Loadmore = styled(({ className, children, click, ...rest }) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
})`
  color: #999;
  font-size: 14px;
  padding: 0;
  border: 0;
  background: none;
  outline: 0;
  &:focus {
    outline: 0;
  }
`;

export default Loadmore;
