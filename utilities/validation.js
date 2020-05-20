export const required = (value) => !value && 'Field is required';

export const telefoneNumber = (value) => (value.length !== 10 || !Number.isInteger(+value)) && 'Invalid telefone number';
