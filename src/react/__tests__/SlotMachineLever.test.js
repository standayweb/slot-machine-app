import React from 'react';
import ReactDOM from 'react-dom';
import SlotMachineLever from '../SlotMachineLever';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlotMachineLever down={false} pull={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
