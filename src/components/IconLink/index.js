import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconLink = styled(props => {
  const { link = '#', icon, className } = props;
  return (
    <Link to={link}>
      <i className={className + ' ' + icon} />
    </Link>
  );
})`
  margin: 0 1rem;
  font-size: 20px;
  color: #555;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const Icon = props => {
  const { icon, text, className, ...rest } = props;
  return (
    <span className={ `pl-2 pr-2 ${className}`}>
      <i {...rest} className={icon} />
      {text}
    </span>
  );
};

export { IconLink, Icon };
