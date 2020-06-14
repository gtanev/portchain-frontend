import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useGlobalState } from '../../state/store';

function ErrorAlert() {
  const [state, dispatch] = useGlobalState();

  const resetError = () => {
    dispatch({
      type: 'handleError',
      payload: null,
    });
  };

  return state.error ? (
    <Alert severity="error" variant="filled" onClose={resetError} style={{ borderRadius: 0 }}>
      {state.error.message}
    </Alert>
  ) : null;
}

export default ErrorAlert;
