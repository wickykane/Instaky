import React, { useEffect } from 'react';
import Wrapper from '../Wrapper';

const ClickOutSide = ({ callback, children }) => {
  let _elementRef = null;

  useEffect(() => {
    document.addEventListener('mousedown', handle);
  });

  const handle = e => {
    if (_elementRef && !_elementRef.contains(e.target)) {
      callback(e);
    }
  };
  return <Wrapper innerRef ={e => (_elementRef = e)}>{children}</Wrapper>;
};

export default ClickOutSide;
