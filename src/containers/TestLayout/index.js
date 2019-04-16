import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Reducer
import reducer from './reducer';
import { injectReducer } from '../../utils/injectReducer';

// Action
import { test } from './action';

const TEST = (props, state) => {
    console.log(props, state);
    return ( 
        <div>
            This is test 2 
            <input value={props.test} onChange={() => props.testFN()} />
            <button onClick={() => props.testFN("adasd")}>TEST</button>
        </div>
    )
}

const mapStatetoProps = (state) => {
   return {
    test: state.test.test
   } 
}


export const mapDispatchToProps = (dispatch) => {
    return {
        testFN: () => dispatch(test())
    }
}

const withReducer = injectReducer({ key: 'test', reducer });

export default compose(withReducer, connect(mapStatetoProps, mapDispatchToProps))(TEST);