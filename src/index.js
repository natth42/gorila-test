import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { InvestmentProvider } from './context/investment-context';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#10c0c6',
      main: '#10c0c6',
      dark: '#10c0c6'
    }
  },
});

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <InvestmentProvider>
        <App />
      </InvestmentProvider>
    </ThemeProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
