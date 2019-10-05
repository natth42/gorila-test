import React, { useEffect } from 'react';
import InvestmentForm from './components/investmentForm';
import InvestmentList from './components/investmentList';
import InvestmentGraph from './components/investmentGraph'
import { useInvestmentDispatch, useInvestmentState, getInvestments } from './context/investment-context';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  const dispatch = useInvestmentDispatch();
  const dados = useInvestmentState();

  useEffect(() => {
    getInvestments(dispatch)
  }, [dispatch]);

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <img alt="logo gorila invest" style={{ width: '10rem' }} src="https://app.gorilainvest.com.br/assets/img/logo/logo_gorila.svg" />
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className="item">
            <Paper className="paper-form">
              <div className="line"></div>
              <div className="paper-content">
                <Typography variant="h6">Carteira de Investimentos - Adicionar novo investimento</Typography>
                <InvestmentForm />
              </div>
            </Paper>
          </Grid>
          <Grid item className="item">
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
              <Grid item className="itemList" sm={6} xs={12} md={6}>
                <InvestmentList title="Renda Fixa" type="RENDA_FIXA" items={dados.investments} />
              </Grid>
              <Grid item className="itemList" sm={6} xs={12} md={6}>
                <InvestmentList title="Renda Variável" type="RENDA_VARIAVEL" items={dados.investments} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="item">
            <InvestmentGraph investments={dados.investments} />
          </Grid>
        </Grid>
      </ Container>
    </>
  );
}

export default App;
