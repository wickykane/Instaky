import styled from 'styled-components';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import SearchInput from '../SearchInput';
import ImageLink from '../ImageLink';

const _Header = ({ className }) => {
  return (
    <div className={`${className} container`}>
      <div className='row'>
        <div className="col-md-4 text-center">
            <ImageLink link='/' src={logo} width='100' height='100%' ></ImageLink>
        </div>
        <div className="col-md-4 text-center">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

const Header = styled(_Header)`
    padding: 2rem 0;
`;

export default Header;
