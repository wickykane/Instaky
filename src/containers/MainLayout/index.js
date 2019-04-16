import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';

// Container
import TestComponent from '../../containers/TestLayout'
// Global css
import '../../styles.scss';

const App = () => {
    return (
        <Wrapper>
            <Header></Header>
            <Wrapper>
            <Switch>
                <Route exact path="/test" component={TestComponent} />
            </Switch>
            </Wrapper>
            <Footer></Footer>
        </Wrapper>
    )
};
export default App;