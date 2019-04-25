import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const element = document.createElement('div');
  element.classList = 'portal-container';

  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [children]);

  return ReactDOM.createPortal(children, element);
};

export default Portal;