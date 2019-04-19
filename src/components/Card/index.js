import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import UserInfo from '../UserInfo';
import { IconLink } from '../IconLink';
import Comment from '../Comment';
import CommentInput from '../CommentInput';

const ParentWrapper = styled(Wrapper)`
  a {
    color: #555;
    font-weight: 500;
    font-size: 14px;
  }
  .card-header {
    background-color: #fff;
  }
  .card-body {
    padding: 0;
    &-container {
      display: block;
      width: 100%;

      .img-container {
        overflow: hidden;
        background-color: #efefef;
        position: relative;
        padding-bottom: 100%;
        img {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          left: 0;
        }
      }
    }
  }
`;

const Card = props => {
  return (
    <ParentWrapper className={props.className}>
      <Wrapper className="card">
        <Wrapper className="card-header d-flex">
          <UserInfo />
        </Wrapper>
        <Wrapper className="card-body">
          <Wrapper className="card-body-container">
            <Wrapper className="img-container">
              <img
                alt="images"
                src="http://nabp.qc.seldatdirect.com/sel2b/assets/img/header/hinh1.jpg"
              />
            </Wrapper>
            <Wrapper className="action-group p-2">
              <IconLink icon="lnr lnr-heart" />
              <IconLink icon="lnr lnr-bubble" />
              <IconLink icon="lnr lnr-exit-up" />
              <IconLink icon="lnr lnr-bookmark float-right" />
            </Wrapper>
            <Wrapper className="comment-group p-2">
              <h2 className="pl-3">
                <a href="/">678 likes</a>
              </h2>
              <Comment className="p-2" />
              <CommentInput></CommentInput>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Card;
