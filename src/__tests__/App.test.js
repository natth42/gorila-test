import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {InvestmentProvider} from '../context/investment-context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvestmentProvider><App /></InvestmentProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
