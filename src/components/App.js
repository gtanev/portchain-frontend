import React from 'react';
import '../styles/app.css';
import AppView from './AppView';
import { GlobalState } from '../state/provider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { themeColors } from '../constants/constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.primary
    },
    secondary: {
      main: themeColors.secondary
    },
  },
  typography: {
    fontSize: 14,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <AppView />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
