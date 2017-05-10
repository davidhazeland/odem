import validate from 'validate.js';

export const required = value => {
  return validate.single(value, {presence: true});
}

export const minimum = number => value => {
  return validate.single(value, {
    length: {
      minimum: number,
      message: `must be at least ${number} characters`
    }
  });
}
