import React from 'react';
import styled from 'styled-components';

const Loading = styled(({ className, show, children }) => {
  const icon = (
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  );

  return (
    <div className={className}>
      {show && icon}
      {children}
    </div>
  );
})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .spinner {
    position: absolute;
    z-index: 1;
    align-self: center;
  }

  .spinner > div {
    width: 15px;
    height: 15px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export default Loading;
