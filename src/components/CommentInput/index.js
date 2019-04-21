import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";

const CommentInput = styled(props => {
  const { className } = props;
  const [input, setInput] = useState('');
  
  const onChangeInput = e => {
    const el = e.target;
    setInput(el.value);
    el.style.height = "25px";
    el.style.height = `${el.scrollHeight}px`;
  };
  
  const handleSumbit = e => {
    if(e.which === 13 && !e.shiftKey) {
      e.preventDefault();
    }
  }

  return (
    <Wrapper className={`${className} d-flex`}>
      <form>
        <textarea onKeyPress={handleSumbit} value={input}  onChange={onChangeInput} placeholder="Add Comment" />
      </form>
      <button disabled={!input} type="submit">Post</button>
    </Wrapper>
  );
})`
  font-size: 14px;
  form {
    width: 100%;
  }

  button {
    background: none;
    color: #3897f0;
    outline: none;
    border: 0;
    &:disabled {
      opacity: 0.5;
    }
    &:focus {
      outline: none;
    }
  }
  textarea {
    resize: none;
    width: 100%;
    border: none;
    height: 25px;
    line-height: 18px;
    max-height: 90px;
    overflow: auto;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export default CommentInput;
