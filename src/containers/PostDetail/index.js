import React, { useEffect } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import Portal from '../../components/PortalComponent';
import Image from '../../components/Image';
import UserInfo from '../../components/UserInfo';
import Comment from '../../components/Comment';

/**
 * CSS Area
 */

const ParentWrapper = styled(Wrapper)`
  display: flex;
  position: fixed;
  flex-direction: column;
  padding: 2rem;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .card,
  .card-header {
    background-color: #fff;
    border-radius: 0 !important;
  }

  .action-btn {
    position: absolute;
    z-index: 10;
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 100%;
    justify-content: center;
    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
    &:hover {
      svg {
        color: rgba(255, 255, 255, 0.7) !important;     
      } 
    }
    svg {
      width: 30px;    
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

/**
 * Component
 */

const Post = () => {
  useEffect(() => {
    window.document.body.style['overflow'] = 'hidden';
    return () => {
      window.document.body.style['overflow'] = 'auto';
    };
  }, []);

  return (
    <Portal>
      <ParentWrapper>
        <Wrapper className="post-container">
          <Wrapper className="container">
            <Wrapper className="row">
              <Wrapper className="col-md-7 p-0">
                <Wrapper className="img-container">
                  <Image src="http://nabp.qc.seldatdirect.com/sel2b/assets/img/header/hinh1.jpg" />
                </Wrapper>
              </Wrapper>
              <Wrapper className="col-md-5 p-0 d-flex">
                <Wrapper className="card w-100">
                  <Wrapper className="card-header">
                    <UserInfo />
                  </Wrapper>
                  <Wrapper className="card-body">
                    <Wrapper>
                      <Comment />
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper className='next action-btn'>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
              </Wrapper>
              <Wrapper className='prev action-btn'>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
              </Wrapper>
              <button
                onClick={() => window.history.back()}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ParentWrapper>
    </Portal>
  );
};

export default Post;
