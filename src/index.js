import { useState } from 'react';

export default ({ initialValues = {}, onSubmit: handleSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (typeof handleSubmit === 'function') {
      handleSubmit({ values });
    }
  }

  const fields = Object.keys(values)
    .reduce((obj, key) => {
      obj[key] = {
        onChange,
        name: key,
        value: values[key],
      };
      return obj;
    }, {});

  return { fields, onSubmit };
}