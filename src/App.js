import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import ParticipantsPage from './ParticipantsPage';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ParticipantsPage />
      </ThemeProvider>
    </>
  );
}

export default App;
