/* eslint-disable no-undef */
import {telefoneNumber} from './validation';

it('should return invalid telefone number', () => {
  // 1. test data
  const number = '12345678.5';
  const result = telefoneNumber(number)
  // 2. expection
  expect(result).toBe("Invalid telefone number");
});
