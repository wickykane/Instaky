import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../containers/MainLayout/loadable';
import TEST from '../containers/TestLayout/loadable';


const RouteConfig = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/test" component={TEST} />
        </Switch>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) =>{
    const token = localStorage.getItem('app_token');
    return (
    <Route {...rest} render={(props) => (
        token ? <Component {...props} /> : <Redirect to='/login' />
    )} />)
};

export default RouteConfig;