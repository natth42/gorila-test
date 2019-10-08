const formatDate = (date) => new Date(date).toLocaleDateString();

const formatStringToNumber = (value = 0) => value.length > 0 ? parseFloat(value.replace(/\./g, '').replace(',', '.')) : 0;

const formatStringToCurrency = (value = 0) => {
    let formatedValue = value.replace(/\D/g,'');
	formatedValue = (formatedValue/100).toFixed(2) + '';
	formatedValue = formatedValue.replace(".", ",");
	formatedValue = formatedValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    formatedValue = formatedValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
    
	return formatedValue;
};

export {formatDate, formatStringToNumber, formatStringToCurrency}