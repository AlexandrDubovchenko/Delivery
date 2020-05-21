/* eslint-disable no-undef */
import {telefoneNumber} from './validation';

it('should return invalid telefone number', () => {
  // 1. test data
  const number = '12345678.5';
  const result = telefoneNumber(number)
  // 2. expection
  expect(result).toBe("Invalid telefone number");
});

it('should return invalid telefone number', () => {
  // 1. test data
  const number = 'awdawd';
  const result = telefoneNumber(number)
  // 2. expection
  expect(result).toBe("Invalid telefone number");
});

it('should return false', () => {
  // 1. test data
  const number = '1234567890';
  const result = telefoneNumber(number)
  // 2. expection
  expect(result).toBe(false);
});