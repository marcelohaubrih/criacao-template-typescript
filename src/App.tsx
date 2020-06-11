import React from 'react';

import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
