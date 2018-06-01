import React from 'react';
import ReactDOM from 'react-dom';
import SlotMachineWheel from '../SlotMachineWheel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlotMachineWheel spinning={false} color="green" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
