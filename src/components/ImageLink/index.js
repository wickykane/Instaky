import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = props => {
  const { link, src, width = '100%', height = '100%' } = props;
  return (
    <Link to={link}>
      <img width={width} height={height} src={src} alt="" />
    </Link>
  );
};

export default ImageLink;
