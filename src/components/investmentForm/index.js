import React, {useState} from 'react';
import {formatStringToCurrency} from '../../utils/formatValues';
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
    width: '80%',
    marginTop: '0.5rem'
  },
  textField: {
    width: '80%',
    marginTop: '0.5rem'
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
    setValues({...values, [name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    addInvestment(dispatch, JSON.stringify(values));
    setValues(initialValues);
  }

  const handleCurrencyChange = e => {  
    setValues({...values, value: formatStringToCurrency(e.target.value)});
  };

  return (
    <form className="form-aligment" onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={12} sm={3} md={3}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Tipo</InputLabel>
            <Select
              value={values.type}
              onChange={handleChange('type')}
              inputProps={{
                name: 'value_type',
                id: 'type',
              }}
            >
              <MenuItem value={"RENDA_FIXA"}>Renda Fixa</MenuItem>
              <MenuItem value={"RENDA_VARIAVEL"}>Renda Variável</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            label="valor"
            className={classes.textField}
            value={values.value}
            onChange={handleCurrencyChange}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            label="data de compra"
            value={values.date}
            className={classes.textField}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange('date')}
          />
        </Grid>
        <Grid item xs={12} sm={1} md={1}>
          <Button 
            type="submit" 
            variant="outlined" 
            className="addButton"
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