import React, { useEffect } from 'react';
const ScrollToOffset = ({ offset = 0, scroll, children }) => {
  let element = null;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (element) {
        if (element.getBoundingClientRect().top - offset < 0) {
          scroll(true);
        } else {
          scroll(false);
        }
      }
    });
  });

  return <div ref={e => (element = e)}>{children}</div>;
};

export default ScrollToOffset;
