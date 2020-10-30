import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(errors => {
    validationErrors[errors.path] = errors.message;
  });

  return validationErrors;
}
