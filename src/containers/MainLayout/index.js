import React from 'react';
import { Link } from 'react-router-dom';

//Components
import ImageLink from '../../components/ImageLink';
import IconLink from '../../components/IconLink';

// Global css
import '../../styles.scss';

const App = () => {
    return (
        <div>
            This is test
            <IconLink icon="lnr lnr-earth" link="/#/"></IconLink>
            <Link to="/test">Go To Test</Link>
        </div>
    )
};
export default App;