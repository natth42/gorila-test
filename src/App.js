import React, {useEffect} from 'react';
import InvestmentForm from './components/investmentForm';
import InvestmentList from './components/investmentList';
import InvestmentGraph from './components/investmentGraph'
import { useInvestmentDispatch, useInvestmentState, getInvestments } from './context/investment-context';
import './App.css';

function App() {
  const dispatch = useInvestmentDispatch();
  const dados = useInvestmentState();

  useEffect(() => {
    getInvestments(dispatch)
  }, [dispatch]);

  return (
    <>
      <h1 className="center-text">Carteira de Investimentos</h1>
      <InvestmentForm />
      <div className="list-position">
        <div>
          <InvestmentList title="Renda Fixa" type="RENDA_FIXA" items={dados.investments} />
        </div>
        <div>
          <InvestmentList title="Renda Variável" type="RENDA_VARIAVEL" items={dados.investments} />
        </div>
      </div>
      <h3 className="center-text">Resumo da Carteira</h3>
      <InvestmentGraph investments={dados.investments} />
    </>
  );
}

export default App;
