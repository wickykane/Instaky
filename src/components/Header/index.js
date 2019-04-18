import styled from 'styled-components';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import SearchInput from '../SearchInput';
import ImageLink from '../ImageLink';
import Wrapper from '../Wrapper';
import { IconLink } from '../IconLink';

const _Header = ({ className }) => {
  return (
    <Wrapper className={`${className} container`}>
      <Wrapper className='row'>
        <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
            <ImageLink link='/' src={logo} width='100' height='100%' ></ImageLink>
        </Wrapper>
        <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
          <SearchInput />
        </Wrapper>
        <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
          <IconLink icon="lnr lnr-earth" link="/test"/>
          <IconLink icon="lnr lnr-heart" link="/test"/>
          <IconLink icon="lnr lnr-user" link="/test"/>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

const Header = styled(_Header)`
    padding: 2rem 0;
`;

export default Header;
