import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import reducer from './reducer';
import { injectReducer } from '../../utils/injectReducer';

//Action 
import { setFixHeader } from './action';

import logo from '../../assets/images/logo.svg';
import SearchInput from '../SearchInput';
import ImageLink from '../ImageLink';
import Wrapper from '../Wrapper';
import { IconLink } from '../IconLink';




const _Header = (props) => {

  const {className, isFix, setFix } = props;
  const elementRef = useRef(null);
  let _isFix;
  const handleScroll = () => {
    if (elementRef) {
      const windowTop =
        window.pageYOffset || document.documentElement.scrollTop;
        const show = windowTop > 0;
        if(_isFix !== show) {
          setFix(show);
        }
        _isFix= show;
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, false);
    return () => {
    window.removeEventListener('scroll', handleScroll, false);
    }
  }, []);


  return (
    <Wrapper
      innerRef={elementRef}
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

const mapStatetoProps = (state) => {
  return {
    isFix: state.header.isFix
  } 
}


export const mapDispatchToProps = (dispatch) => {
  return {
    setFix : (value) => dispatch(setFixHeader(value)),
  };
}

const withReducer = injectReducer({ key: 'header', reducer });

export default compose(withReducer, connect(mapStatetoProps, mapDispatchToProps))(Header);

