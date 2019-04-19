import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/Wrapper';
import UserInfo from '../../components/UserInfo';
import { default as CardPost } from '../../components/Card';

const Card = styled(CardPost)`
  margin-bottom: 1.5rem;
`;

const ParentWrapper = styled(Wrapper)`
  background-color: #fafafa;
  padding: 2rem 0;
  .right-column {
    width: 100%;
    position: relative;
    max-width: 293px;
    .content {
      position: absolute;
      height: 100vh;
      width: 100%;
      max-width: 293px;
      top: 0;
      transition: all 0.2s linear;
    }

    .fix-column {
      position: fixed;
      top: 4rem;
      width: 100%;
    }
  }
`;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFix: false
    };
  }

  setFix = value => {
    this.setState({ isFix: value });
  };

  render() {
    return (
      <ParentWrapper>
        <Wrapper className="container">
          <Wrapper className="row justify-content-center">
            <Wrapper className="left-column col-md-7">
              <Card />
              <Card />
              <Card />
            </Wrapper>
            <Wrapper className="right-column d-sm-none d-md-block">
              {/* <ScrollWrapper scroll={e => this.setFix(e)}> */}
                <Wrapper
                  className={`content ${this.props.fixMenu ? 'fix-column' : ''}`}
                >
                  <UserInfo className="large p-3" description="10 hours ago" />
                  <Card />
                </Wrapper>
              {/* </ScrollWrapper> */}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ParentWrapper>
    );
  }
}

export default Home;
