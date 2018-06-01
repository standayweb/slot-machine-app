import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App
      colors={['red', 'green', 'blue']}
      spins={[
        {
          key: 123,
          colors: ['red', 'green', 'blue'],
        },
      ]}
      spin={() => {}}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
