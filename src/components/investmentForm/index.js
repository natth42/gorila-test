import React, {useState} from 'react';

import { useInvestmentDispatch, addInvestment } from '../../context/investment-context';

const InvestmentForm = () => {
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

  const formatNumber = e => {
    if(e.target.value === '')
      e.target.value = 0
    let valor = e.target.value + '';
    valor = parseInt(valor.replace(/[\D]+/g,''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
  
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
  
    setValues({...values, value: valor});
  };

  return (
    <div className="form-position">
      <p>Adicionar novo investimento:</p>
      <form className="form-aligment" onSubmit={handleSubmit}>
        <select className="input" value={values.type} onChange={handleChange('type')}>
          <option>Tipo</option>
          <option value="RENDA_FIXA">Renda Fixa</option>
          <option value="RENDA_VARIAVEL">Renda Variável</option>
        </select>
        <input className="input" type="text" placeholder="valor" value={values.value} onChange={formatNumber} />
        <input className="input" type="date" placeholder="data de compra: " value={values.date} onChange={handleChange('date')} />
        <button type="submit">+</button>
      </form>  
    </div>
  )
}

export default InvestmentForm;