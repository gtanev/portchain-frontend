import React, { useReducer } from 'react';
import { GlobalContext, initialState, reducer } from './store';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);

  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
};

export { GlobalState };
