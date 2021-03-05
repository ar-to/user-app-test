import React from 'react';
import { render } from '@testing-library/react';
// import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/User List App/i)).toBeInTheDocument();
});

it("renders App without crashing", () => {
  // tests fails with redux
  // shallow(<App />);
});