import React, { useRef } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import AliceCarousel from 'react-alice-carousel';
import FollowCard from '../../components/FollowCard';

/**
 * CSS Area
 */

const ParentWrapper = styled(Wrapper)`
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
`;
const StyledFollowCard = styled(FollowCard)`
  margin: 0 1rem;
`;
/**
 * Component
 */

const Slider = () => {
  const state = {
    galleryItems: [1, 2, 3, 4].map(i => <StyledFollowCard key={i} />)
  };

  const responsive = {
    0: { items: 1 },
    1024: { items: 4 }
  };

  const carouselRef = useRef(null);
  return (
    <ParentWrapper>
        <AliceCarousel
          ref={carouselRef}
          buttonsDisabled={true}
          items={state.galleryItems}
          responsive={responsive}
          fadeOutAnimation={true}
          dotsDisabled={true}
          mouseDragEnabled={true}
          disableAutoPlayOnAction={true}
        />
        <button
          onClick={() => carouselRef.current._slidePrev()}
          className="btn-link-default controls-left"
        >
          <i className="lnr lnr-chevron-left-circle" />
        </button>
        <button
          onClick={() => carouselRef.current._slideNext()}
          className="btn-link-default controls-right"
        >
          <i className="lnr lnr-chevron-right-circle" />
        </button>
    </ParentWrapper>
  );
};

export default Slider;
