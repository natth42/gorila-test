import React from 'react';
import ReactDOM from 'react-dom';
import InvestmentGraph from '../components/investmentGraph';
import {InvestmentProvider} from '../context/investment-context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvestmentProvider><InvestmentGraph /></InvestmentProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});