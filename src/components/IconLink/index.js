import React from 'react';

const IconLink = (props) => {
    const { link, icon }  = props;
    return (
        <a href={link}><i className={icon}></i></a>
    );
}

export default IconLink;