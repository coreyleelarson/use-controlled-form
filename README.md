# use-controlled-form

![npm](https://img.shields.io/npm/v/use-controlled-form.svg)

Create simple controlled React forms, using hooks, without all the fluff!

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

function MyForm() {
  const { fields, onSubmit } = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: ({ values }) => {
      // Do whatever you want!
    },
  });
  
  return (
    <form onSubmit={onSubmit}>
      <input value={...fields.firstName} />
      <input value={...fields.lastName} />
    </form>
  );
}
```
