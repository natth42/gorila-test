import { InvestmentReducer } from '../context/investment-context';

const investments = [{ _id: 123, value: "1.500,00", date: "2019-09-30T00:00:00.000Z", type: "RENDA_VARIAVEL" }];
const investment = [{ _id: 321, value: "1.000,00", date: "2019-09-30T00:00:00.000Z", type: "RENDA_FIXA" }];
const newInvestment = investments.concat(investment);

describe('Investment reducer', () => {
  test('InvestmentReducer({}, {}) should return default state', () => {
    expect(InvestmentReducer({}, {})).toEqual({ investments: [] });
  });

  test('InvestmentReducer({}, {type: "get"}) should return {investments: [], loading: true}', () => {
    expect(InvestmentReducer({}, { type: "get" })).toEqual({ investments: [], loading: true });
  });

  test(`InvestmentReducer({}, {type: "get_success", investments: investments}) should return investments`, () => {
    expect(InvestmentReducer({}, { type: "get_success", investments })).toEqual({ investments, loading: false });
  });

  test(`InvestmentReducer({investments: investments}, {type: "add", newInvestment: investment}) should return investment with new item`, () => {
    expect(InvestmentReducer({ investments }, { type: "add", newInvestment: investment })).toEqual({ investments: newInvestment });
  });

  test(`InvestmentReducer({investments: newInvestment}, {type: "remove", id: 123}) should return without deleted item`, () => {
    expect(InvestmentReducer({ investments: newInvestment }, { type: "remove", id: 123 })).toEqual({ investments: investment });
  });
})