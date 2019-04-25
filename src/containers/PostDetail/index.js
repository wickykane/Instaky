import React, { useEffect } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import Portal from '../../components/PortalComponent';

/**
 * CSS Area
 */

const ParentWrapper = styled(Wrapper)`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

/**
 * Component
 */

const Post = () => {
  useEffect(() => {}, []);

  return (
    <Portal>
      <ParentWrapper>
        <Wrapper className="post-container">this is a test</Wrapper>
        <button className="time" />
      </ParentWrapper>
    </Portal>
  );
};

export default Post;
