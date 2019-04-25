import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../containers/MainLayout/loadable';
import NotFound from '../containers/NotFound/loadable';

const RouteConfig = () => {
  return (
    <Switch>
      <Route path="/" render={() => <App />} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

// const PrivateRoute = ({ component: Component, ...rest }) =>{
//     const token = localStorage.getItem('app_token');
//     return (
//     <Route {...rest} render={(props) => (
//         token ? <Component {...props} /> : <Redirect to='/login' />
//     )} />)
// };

export default RouteConfig;
