import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';

// Container
import TestComponent from '../../containers/TestLayout';
import Home from '../Home';

// Global css
import '../../styles.scss';

const App = () => {
  const [data, setData] = useState({});

  const handleData = (e) => {
    setData({ fixMenu: e});
  }

  return (
    <Wrapper>
      <Header callback={handleData} />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={() => <Home {...data} />} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
