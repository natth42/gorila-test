import React, {useState} from 'react';

const InvestmentForm = () => {
  const [values, setValues] = useState({
    type: '',
    value: '',
    date: ''
  });

  const handleChange = name => e => {
    setValues({...values, [name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`send values: ✨${JSON.stringify(values)}✨`);
  }

  const formatNumber = value => 'R$' + value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="form-position">
      <p>Adicionar novo investimento:</p>
      <form className="form-aligment" onSubmit={handleSubmit}>
        <select className="input" value={values.type} onChange={handleChange('type')}>
          <option>Tipo</option>
          <option value="rendaFixa">Renda Fixa</option>
          <option value="rendaVariavel">Renda Variável</option>
        </select>
        <input className="input" type="text" placeholder="valor" value={formatNumber(values.value)} onChange={handleChange('value')} />
        <input className="input" type="date" placeholder="data de compra" value={values.date} onChange={handleChange('date')} />
        <button type="submit">🐵</button>
      </form>  
    </div>
  )
}

export default InvestmentForm;