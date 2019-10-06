import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {InvestmentProvider} from '../../context/investment-context';
import InvestmentForm from './index';
import expectExport from 'expect';

test('change values and send form', () => {
    const {getByTestId} = render(
        <InvestmentProvider><InvestmentForm /></InvestmentProvider>
    )
    let valueInput = getByTestId('valor');
    let dateInput = getByTestId('data de compra');
    let typeSelect = getByTestId('type');
    let addButton = getByTestId('adicionar');

    expect(addButton).toBeDisabled();
    expect(valueInput.textContent).toEqual('');
    expect(dateInput.textContent).toEqual('');
    expect(typeSelect.textContent).toEqual('');

    fireEvent.change(valueInput, {target: {value: '100000'}});
    fireEvent.change(dateInput, {target: {value: '05/10/2019'}});
    fireEvent.change(typeSelect, {target: {value: 'RENDA_FIXA'}});

    expect(valueInput.value).toEqual('1.000,00');
    expect(dateInput.value).toEqual('05/10/2019');
    expect(typeSelect.value).toEqual('RENDA_FIXA');

    fireEvent.click(addButton);
})