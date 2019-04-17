import React from 'react';

const IconLink = (props) => {
    const { link, icon }  = props;
    return (
        <a href={link}><i className={icon}></i></a>
    );
}

const Icon = (props) => {
    const { icon }  = props;
    return (
        <i className={icon}></i>
    );
}

export { IconLink, Icon };