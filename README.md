# use-controlled-form

![npm](https://img.shields.io/npm/v/use-controlled-form.svg)
[![CircleCI](https://circleci.com/gh/coreyleelarson/use-controlled-form.svg?style=svg)](https://circleci.com/gh/coreyleelarson/use-controlled-form)

Create simple controlled React forms, using hooks ⚓, without all the fluff!

**🚨 `use-controlled-form` requires React >= 16.8 🚨**

## Installation

**Install with NPM:**
```bash
npm i use-controlled-form
```

**Install with Yarn:**
```bash
yarn add use-controlled-form
```

## Basic Usage

```javascript
import useForm from 'use-controlled-form';

function LoginForm() {
  const { fields, onSubmit } = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ values }) => {
      console.log(values); // { username: 'foo', password: 'bar' }
    },
  });
  
  return (
    <form onSubmit={onSubmit}>
      <input {...fields.username} />
      <input type="password" {...fields.password} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```
