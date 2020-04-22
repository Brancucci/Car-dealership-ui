import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddCar from './components/AddCar';
import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
