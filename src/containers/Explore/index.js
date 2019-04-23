import React from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import Slider from '../../components/Slider';
import { Icon } from '../../components/IconLink';
import LazyImage from '../../components/Image';

import { injectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

/**
 * CSS Area
 */

const ParentWrapper = styled(Wrapper)`
  font-size: 14px;
  .container {
    padding: 5rem;
  }

  .section-header {
    font-weight: bold;
  }

  .explore-container {
    padding: 50px 10%;
  }

  .large {
    font-size: 20px;
  }
`;

/**
 * Component
 */
const BlockTitle = ({ title, children }) => {
  return (
    <Wrapper className="font-weight-bold d-flex justify-content-between mt-3 mb-3">
      <span className="title-header">{title}</span>
      {children}
    </Wrapper>
  );
};

const Image = ({ data }) => {
  return (
    <Wrapper className="img-container">
      <LazyImage src="http://nabp.qc.seldatdirect.com/sel2b/assets/img/header/hinh1.jpg" />
      <Wrapper className="overlay">
        <Icon icon="lnr lnr-heart" className="large link-white" text="100" />
        <Icon icon="lnr lnr-bubble" className="large link-white" text="100" />
      </Wrapper>
    </Wrapper>
  );
};

const Explore = () => {
  return (
    <ParentWrapper>
      <Wrapper className="explore-container">
        <BlockTitle title="Explore everyone">
          <button className="btn-link-default link-blue">See All</button>
        </BlockTitle>
        <Slider />
        <BlockTitle title="Explore" />
        <Wrapper className="explore-images mt-5">
          <Wrapper className="row">
            <Wrapper className="col-md-4">
              <Image />
            </Wrapper>
            <Wrapper className="col-md-4">
              <Image />
            </Wrapper>
            <Wrapper className="col-md-4">
              <Image />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

const mapStatetoProps = () => {
  return {};
};

export const mapDispatchToProps = () => {
  return {};
};

const withReducer = injectReducer({ key: 'explore', reducer });

export default compose(
  withReducer,
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )
)(Explore);
