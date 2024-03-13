import React from "react";

const ReducerContext = React.createContext({
  isAuthenticated: false,
  state: {},
  dispatch: () => {},
});

ReducerContext.displayName = "AuthContext";

export default ReducerContext;
