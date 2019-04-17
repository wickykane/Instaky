import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';

// Container
import TestComponent from '../../containers/TestLayout';

// Global css
import '../../styles.scss';

const App = () => {
  return (
    <Wrapper>
      <Header/>
      <Wrapper className='container'>
        <Switch>
            <Route path='/' component={TestComponent} />
            <Route path='/test'  component={TestComponent} />
        </Switch>
      </Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
