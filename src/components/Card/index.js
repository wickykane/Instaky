import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import UserInfo from "../UserInfo";
import { IconLink } from "../IconLink";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import Loadmore from "../LoadMore";

const ParentWrapper = styled(Wrapper)`
  a {
    color: #555;
    font-weight: bold;
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

      .comment-group {
        > * {
          margin-bottom: 0.5rem;
        }
      }

      .post-action {
        border-top: 1px solid #efefef;
        align-items: center;
        padding: 1rem 0;
      }

      .img-container {
        overflow: hidden;
        background-color: #efefef;
        position: relative;
        padding-bottom: 100%;
        img {
          position: absolute;
          // top: 0;
          // width: 100%;
          // height: 100%;
          // object-fit: cover;
          // left: 0;
          top: 50%;
          left: 50%;
          height: 100%;
          transform: translate(-50%, -50%);
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
            <Wrapper className="comment-group pl-4">
              <h2>
                <a href="/">678 likes</a>
              </h2>
              <Comment />
              <Loadmore>All 2 comments</Loadmore>
            </Wrapper>
            <Wrapper className="post-action pl-4 pr-4">
              <CommentInput />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Card;
