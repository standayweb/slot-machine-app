import React from 'react';
import ReactDOM from 'react-dom';
import SlotMachine from '../SlotMachine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlotMachine />, div);
  ReactDOM.unmountComponentAtNode(div);
});
