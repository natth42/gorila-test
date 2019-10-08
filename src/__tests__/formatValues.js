import { formatDate, formatStringToNumber, formatStringToCurrency } from '../utils/formatValues';

describe('Format Date', () => {
  test('formatDate("2019-09-30T00:00:00.000Z") should return "2019-9-29"', () => {
    expect(formatDate("2019-09-30T00:00:00.000Z")).toEqual("2019-9-29");
  });

  test('formatDate("") should return "Invalid Date"', () => {
    expect(formatDate("")).toEqual("Invalid Date");
  });
});

describe('Format String to Currency', () => {
  test('formatStringToCurrency("10000") should return "100,00"', () => {
    expect(formatStringToCurrency("10000")).toEqual("100,00");
  });

  test('formatStringToCurrency("") should return "0"', () => {
    expect(formatStringToCurrency("")).toEqual("0,00");
  });

  test('formatStringToCurrency("a") should return "0,00"', () => {
    expect(formatStringToCurrency("a")).toEqual("0,00");
  });
});

describe('Format String to Number', () => {
  test('formatStringToNumber("1.500,00") should return "1500"', () => {
    expect(formatStringToNumber("1.500,00")).toEqual(1500);
  });

  test('formatStringToNumber("") should return "0"', () => {
    expect(formatStringToNumber("")).toEqual(0);
  });

  test('formatStringToNumber("1.000.000,00") should return 1000000"', () => {
    expect(formatStringToNumber("1.000.000,00")).toEqual(1000000);
  });

  test('formatStringToNumber("1.000.000,50") should return 1000000.5"', () => {
    expect(formatStringToNumber("1.000.000,50")).toEqual(1000000.5);
  });
});