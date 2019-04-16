import React from 'react';

const ImageLink = (props) => {
    const { link, src, width = 100, height = 100 }  = props;
    return (
        <a href={link}><img width={width} height={height} src={src} alt=""/>
        </a>
    );
}

export default ImageLink;