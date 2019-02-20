import { useState } from 'react';

export default ({ initialValues = {}, onSubmit: handleSubmit }) => {
  const [values, setValues] = useState(initialValues);

  // field props object to be passed to <input />
  const fields = Object.keys(values)
    .reduce((obj, key) => {
      obj[key] = {
        onChange,
        name: key,
        value: values[key],
      };
      return obj;
    }, {});

  // onChange callback to be passed to <input />
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // onSubmit callback to be passed to <form />
  function onSubmit(e) {
    e.preventDefault();
    if (typeof handleSubmit === 'function') {
      handleSubmit({ values });
    }
  }

  return { fields, onSubmit };
}