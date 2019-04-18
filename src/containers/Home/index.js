import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import ScrollWrapper from '../../components/ScrollWrapper';

const ParentWrapper = styled(Wrapper)`
  background-color: #fafafa;
  padding: 2rem 0;
  .right-column {
    position: absolute;
    height: 100vh;
    width: 100%;
    max-width: 293px;
  }
  .fix-column {
    position: fixed;
    top: 0;
    width: 100%;
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
          <Wrapper className="row">
            <Wrapper className="col-md-7">
              <Card />
            </Wrapper>
            <Wrapper className="col-md-5">
              <ScrollWrapper scroll={e => this.setFix(e)}>
                <Wrapper
                  className={`right-column ${
                    this.state.isFix ? 'fix-column' : ''
                  }`}
                >
                  <Card />
                </Wrapper>
              </ScrollWrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ParentWrapper>
    );
  }
}

export default Home;
