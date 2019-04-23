import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import SearchInput from '../SearchInput';
import ImageLink from '../ImageLink';
import Wrapper from '../Wrapper';
import { IconLink } from '../IconLink';

const _Header = ({ className, offset, callback }) => {
  const [isFix, setFix] = useState(false);

  let elementRef, top;

  const handleScroll = () => {
    if (elementRef) {
      const windowTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementOffset = offset || 0;
      const show = windowTop > elementOffset;
      setFix(show);
      callback(show);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, false);
  }, []);

  const init = e => {
    if (e) {
      elementRef = elementRef || e;
      top = top || e.offsetHeight;
    }
  };

  return (
    <Wrapper
      innerRef={init}
      className={`${className} ${isFix ? 'fix-header' : ''}`}
    >
      <Wrapper className="container">
        <Wrapper className="row">
          <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
            <ImageLink link="/" src={logo} width="100" height="100%" />
          </Wrapper>
          <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
            <SearchInput />
          </Wrapper>
          <Wrapper className="col-md-4 text-center align-self-center pb-3 pb-sm-0">
            <IconLink icon="lnr lnr-earth" link="/explore" />
            <IconLink icon="lnr lnr-heart" link="/test" />
            <IconLink icon="lnr lnr-user" link="/test" />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

const Header = styled(_Header)`
  background-color: #fff;
  padding: 2rem 0;
  transition: padding 0.5s linear;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  z-index: 3;
  &.fix-header {
    position: fixed;
    padding: 1rem 0;
    transition: padding 0.5s linear;
  }
`;

export default Header;
