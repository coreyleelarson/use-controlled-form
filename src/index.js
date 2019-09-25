import { useState } from 'react';

const initialErrors = {};

export default function useForm({ initialValues = {}, onSubmit: handleSubmit }) {
  const [errors, setErrors] = useState(initialErrors);
  const [values, setValues] = useState(initialValues);

  function resetForm() {
    setErrors(initialErrors);
    setValues(initialValues);
  }

  // onChange callback to be passed to <input />
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  // onSubmit callback to be passed to <form />
  function onSubmit(e) {
    e.preventDefault();
    if (typeof handleSubmit === 'function') {
      handleSubmit(values, { resetForm, setErrors, values });
    }
  }

  // field props object to be passed to <input />
  const fields = Object.keys(values).reduce((obj, key) => {
    obj[key] = {
      onChange,
      name: key,
      value: values[key],
    };
    return obj;
  }, {});

  return { errors, fields, onSubmit };
}
