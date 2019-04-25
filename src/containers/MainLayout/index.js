import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';


// Container
import TestComponent from '../../containers/TestLayout';
import Home from '../Home';
import Explore from '../Explore';
import Post from '../PostDetail';


// Global css
import '../../styles.scss';

const App = ({ history, location }) => {

  const [isModal, setModal] = useState({});
  const [previousLocation, setLocation] = useState(location);


  // history.listenBefore( (location, done) => {
  //   console.log(location, done);
  // } )


  useEffect(() => {
    setModal(!!( location.state && location.state.modal && previousLocation !== location));
    if ( history.action !== 'POP' && (!location.state || !location.state.modal)) {
      setLocation(location);
    }
  }, [location]);

  return (
    <Wrapper>
      <Header/>
      <Wrapper>
        <Switch location={isModal ? previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/test" render={() => <TestComponent/>} />
          <Route path="/explore" render={() => <Explore />} />
        </Switch>
        {isModal ? <Route path="/d/:id" render={(props) => <Post {...props}/>} /> : null}
      </Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default withRouter(App);
