import isEqual from 'react-fast-compare';

export const handlePortsData = (state, action) => {
  if (isEqual(state.data.ports.all, action.payload.all)) return state;
  return {
    ...state,
    data: {
      ...state.data,
      ports: action.payload,
    },
    error: null,
  };
};

export const handleVesselsData = (state, action) => {
  if (isEqual(state.data.vessels.all, action.payload.all)) return state;
  return {
    ...state,
    data: {
      ...state.data,
      vessels: action.payload,
    },
    error: null,
  };
};

export const handleError = (state, action) => {
  return {
    ...state,
    error: action.payload,
  };
};
