import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '../Intro';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Intro heading="Hey there" paragraph="This is a test" />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
