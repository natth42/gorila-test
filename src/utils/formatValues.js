const formatDate = (date) => new Date(date).toLocaleDateString();

const formatStringToNumber = (value) => Number(value.replace('.', '').replace(',', '.'));

const formatStringToCurrency = value => {
    if(value === '')
        value = 0
    let formatedValue = value + '';
    formatedValue = parseInt(formatedValue.replace(/[\D]+/g,''));
    formatedValue = formatedValue + '';
    formatedValue = formatedValue.replace(/([0-9]{2})$/g, ",$1");
  
    if (formatedValue.length > 6) {
        formatedValue = formatedValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
  
    return formatedValue;
};

export {formatDate, formatStringToNumber, formatStringToCurrency}