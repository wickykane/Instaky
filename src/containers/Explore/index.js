import React, { useRef } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import AliceCarousel from 'react-alice-carousel';

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
  .explore-slider {
    padding: 2rem;
    position: relative;
    .controls-left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .controls-right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

/**
 * Component
 */

const Explore = () => {
  const state = {
    galleryItems: [1, 2, 3].map(i => <h2 key={i}>{i}</h2>)
  };
  const responsive = {
    0: { items: 1 },
    1024: { items: 4 }
  };

  const carouselRef = useRef(null);
  return (
    <ParentWrapper>
      <Wrapper className="container">
        <Wrapper className="section-header d-flex justify-content-between">
          <span className="title-header">Explore everyone</span>
          <button className="btn-link-default link-blue">All</button>
        </Wrapper>
        <Wrapper className="explore-slider">
          <AliceCarousel
            ref={ carouselRef }
            buttonsDisabled={true}
            items={state.galleryItems}
            responsive={responsive}
            fadeOutAnimation={true}
            dotsDisabled={true}
            mouseDragEnabled={true}
            disableAutoPlayOnAction={true}
          />
          <button onClick={ () => carouselRef.current._slidePrev()} className="btn-link-default controls-left"><i className="lnr lnr-chevron-left-circle"></i></button>
          <button onClick={ () =>carouselRef.current._slideNext()}  className="btn-link-default controls-right"><i className="lnr lnr-chevron-right-circle"></i></button>
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
