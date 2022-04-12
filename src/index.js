import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './helpers/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
