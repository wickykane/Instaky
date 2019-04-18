import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const ParentWrapper = styled(Wrapper)`
  .card-header {
    background-color: #fff;
    a {
      color: #555;
      font-weight: 500;
    }
  }
  .card-body {
    padding: 0;
    &-container {
      background-color: #efefef;
      display: block;
      width: 100%;
      .img-container {
        overflow: hidden;
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
    <ParentWrapper>
      <Wrapper className="card">
        <Wrapper className="card-header d-flex">
          <img
            width="30"
            height="30"
            className="rounded-circle"
            src={require('../../assets/images/avatar.png')}
            alt="avatar"
          />
          <Wrapper className="text-left pl-2 align-self-center">
            <h2>
              <a href="/">{'Content'}</a>
            </h2>
          </Wrapper>
        </Wrapper>
        <Wrapper className="card-body">
          <Wrapper className="card-body-container">
            <Wrapper className="img-container">
              <img alt="images" src='http://nabp.qc.seldatdirect.com/sel2b/assets/img/header/hinh1.jpg'/>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Card;
