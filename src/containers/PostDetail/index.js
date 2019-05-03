import React, { useEffect } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import Portal from '../../components/PortalComponent';
import Image from '../../components/Image';

/**
 * CSS Area
 */

const ParentWrapper = styled(Wrapper)`
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
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
        <Wrapper className="post-container">
          <Wrapper>
              <Wrapper className='row'>
                <Wrapper className='col-md-7'>
                <Wrapper className="img-container">
                  <Image src="http://nabp.qc.seldatdirect.com/sel2b/assets/img/header/hinh1.jpg" />
                </Wrapper>  
                </Wrapper>
                <Wrapper className='col-md-5'></Wrapper>                
              </Wrapper>
          </Wrapper>
          <button className='time float-right'></button>
        </Wrapper>
      </ParentWrapper>
    </Portal>
  );
};

export default Post;
