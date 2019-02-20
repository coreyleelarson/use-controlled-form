import PropTypes from 'prop-types';
import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import useForm from '.';

function Form({ initialValues, onSubmit: submitHandler }) {
  const { fields, onSubmit } = useForm({ initialValues, onSubmit: submitHandler });
  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <input data-testid="input-username" {...fields.username} />
      <input data-testid="input-password" {...fields.password} />
      <button data-testid="button-submit" type="submit">Login</button>
    </form>
  );
}

Form.defaultProps = {
  initialValues: {},
  onSubmit: () => {},
};

Form.propTypes = {
  initialValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  ),
  onSubmit: PropTypes.func,
};

describe('main tests', () => {
  const initialValues = { username: '', password: '' };
  const changedValues = { username: 'testUsername', password: 'testPassword' };
  const onSubmit = jest.fn();
  let instance;

  beforeAll(() => {
    instance = render(
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
      />,
    );
  });

  afterAll(cleanup);

  it('should render initial values', () => {
    const { getByTestId } = instance;
    expect(getByTestId('form')).toHaveFormValues(initialValues);
  });

  it('should render updated values on change', () => {
    const { getByTestId } = instance;
    fireEvent.change(getByTestId('input-username'), {
      target: { name: 'username', value: changedValues.username },
    });
    fireEvent.change(getByTestId('input-password'), {
      target: { name: 'password', value: changedValues.password },
    });
    expect(getByTestId('form')).toHaveFormValues(changedValues);
  });

  it('should call onSubmit callback on submit', () => {
    const { getByTestId } = instance;
    fireEvent.submit(getByTestId('form'));
    expect(onSubmit.mock.calls.length).toBe(1);
    expect(onSubmit.mock.calls[0][0].values).toEqual(changedValues);
  });
});
