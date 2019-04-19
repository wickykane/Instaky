import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import UserInfo from '../UserInfo';

const ParentWrapper = styled(Wrapper)`
  .card-header {
    background-color: #fff;
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
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Card;
