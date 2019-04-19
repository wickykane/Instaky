import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const CommentInput = styled(props => {
  const { className } = props;
  return (
    <Wrapper className={`${className} d-flex`}>
      <form>
        <textarea placeholder="Add Comment" />
      </form>
    </Wrapper>
  );
})`
  font-size: 14px;
  textarea {
    resize: none;
    border: none;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export default CommentInput;
