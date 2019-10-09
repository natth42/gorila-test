import React, { useState } from 'react';
import { formatStringToCurrency } from '../../utils/formatValues';
import { useInvestmentDispatch, addInvestment } from '../../context/investment-context';

import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '80%'
  },
  labelDate: {
    fontSize: '0.75rem'
  },
  textField: {
    width: '80%'
  },
  inputItem: {
    marginTop: '1rem'
  },
  button: {
    borderRadius: '20rem',
    width: 'auto',
    height: 'auto',
    color: '#fff',
    border: 'none',
    backgroundImage: 'linear-gradient(270deg,#5be484 0,#10c0c6 100%)',
    marginTop: '1rem',
    '&:disabled': {
      backgroundColor: '#F1F1F1',
      backgroundImage: 'none'
    }
  }
}));

const InvestmentForm = () => {
  const classes = useStyles();
  const initialValues = {
    type: '',
    value: '',
    date: ''
  };
  const dispatch = useInvestmentDispatch();
  const [values, setValues] = useState(initialValues);
  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    addInvestment(dispatch, JSON.stringify(values));
    setValues(initialValues);
  }

  const handleCurrencyChange = e => {
    setValues({ ...values, value: formatStringToCurrency(e.target.value) });
  };

  return (
    <form className="form-aligment" onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={12} sm={3} md={3} className={classes.inputItem}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Tipo</InputLabel>
            <Select
              value={values.type}
              onChange={handleChange('type')}
              color="primary"
              inputProps={{
                name: 'value_type',
                id: 'type',
                "data-testid": 'type'
              }}
            >
              <MenuItem value={"RENDA_FIXA"}>Renda Fixa</MenuItem>
              <MenuItem value={"RENDA_VARIAVEL"}>Renda Variável</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} md={3} className={classes.inputItem}>
          <TextField
            label="valor"
            color="primary"
            className={classes.textField}
            value={values.value}
            inputProps={{
              "data-testid": 'valor'
            }}
            onChange={handleCurrencyChange}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3} className={classes.inputItem}>
          <InputLabel htmlFor="date" className={classes.labelDate}>Data de compra</InputLabel>
          <TextField
            value={values.date}
            color="primary"
            className={classes.textField}
            type="date"
            onChange={handleChange('date')}
            inputProps={{
              id: 'date',
              "data-testid": 'data de compra'
            }}
          />
        </Grid>
        <Grid item xs={12} sm={1} md={1}>
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            data-testid="adicionar"
            disabled={values.type === '' || values.value === '' || values.date === ''}
          >
            ADICIONAR
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default InvestmentForm;