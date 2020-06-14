import { createContext, useContext } from 'react';
import { handleError, handlePortsData, handleVesselsData } from './reducers';

export const initialState = Object.freeze({
  data: {
    ports: {
      all: [],
      topFive: [],
      bottomFive: [],
    },
    vessels: {
      all: [],
      topFive: [],
      bottomFive: [],
    },
  },
  error: null,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'handlePortsData':
      return handlePortsData(state, action);
    case 'handleVesselsData':
      return handleVesselsData(state, action);
    case 'handleError':
      return handleError(state, action);
    case 'handleReset':
      return initialState;
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);
export const useGlobalState = () => useContext(GlobalContext);
