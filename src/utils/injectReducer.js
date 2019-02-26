import React from "react";
import { object } from "prop-types";

const injectReducer = ({ key, reducer}) => WrappedComponent => {
  const Extended = (props, context) => {
    context.store.injectReducer(key, reducer);
    return <WrappedComponent {...props} />
  };

  Extended.contextTypes = {
    store: object
  };

  return Extended;
};

export { injectReducer };