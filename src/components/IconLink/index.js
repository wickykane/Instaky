import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconLink = styled((props) => {
    const { link='#', icon, className }  = props;
    return (
        <Link to={link}><i className={className + ' ' + icon}></i></Link>
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

const Icon = (props) => {
    const { icon, ...rest }  = props;
    return (
        <i {...rest} className={icon}></i>
    );
}

export { IconLink, Icon };