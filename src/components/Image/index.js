import React, { useEffect, useRef } from 'react';

const LazyImage = props => {
  const imgRef = useRef(null);
  const { src } = props;
  useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () =>{
        imgRef && imgRef.current.setAttribute('src', src);
      }
  })
  return <img ref={imgRef} alt="" />;
};

export default LazyImage;
