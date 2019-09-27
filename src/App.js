import React from 'react';
import InvestmentForm from './components/investmentForm';
import InvestmentList from './components/investmentList';
import './App.css';

function App() {
  return (
    <>
      <h1 className="center-text">Carteira de Investimentos</h1>
      <InvestmentForm />
      <div className="list-position">
        <div>
          <InvestmentList type="Renda Fixa" />
        </div>
        <div>
          <InvestmentList type="Renda Fixa" />
        </div>
      </div>
    </>
  );
}

export default App;
