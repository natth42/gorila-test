import { getPercentageByType, getSum } from '../utils/calcs';

const investments = [
  {
    "date": "2019-09-30T00:00:00.000Z",
    "type": "RENDA_FIXA",
    "value": "1.500,00"
  },
  {
    "date": "2019-09-30T00:00:00.000Z",
    "type": "RENDA_VARIAVEL",
    "value": "1.500,00"
  },
]

describe('Get Percentage By Type', () => {
  test('getPercentageByType("RENDA_FIXA", 3000, investments) should return 50', () => {
    expect(getPercentageByType("RENDA_FIXA", 3000, investments)).toEqual(50);
  });

  test('getPercentageByType("RENDA_VARIAVEL", 3000, investments) should return 50', () => {
    expect(getPercentageByType("RENDA_VARIAVEL", 3000, investments)).toEqual(50);
  });
});

describe('Get Sum', () => {
  test('getSum(investments) should return 3000', () => {
    expect(getSum(investments)).toEqual(3000);
  });
});