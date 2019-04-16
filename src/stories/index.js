import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Loading from '../components/LoadingIndicator'

storiesOf('Components', module)
.add('Loading', () => <Loading/>)