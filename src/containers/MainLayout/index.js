import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const App = (props) => {
    return (
        <div>
            This is test
            <Link to="/test">Go To Test</Link>
        </div>
    )
};
export default App;