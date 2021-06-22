import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import ReadParticipantsPage from './ReadParticipantsPage';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ReadParticipantsPage />
      </ThemeProvider>
    </>
  );
}

export default App;
