import React from 'react';
import ReactDOM from 'react-dom';
import SlotMachineList from '../SlotMachineList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SlotMachineList
      spins={[{ key: 123, colors: ['red', 'green', 'blue'] }]}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
