import React from 'react';
import ReactDOM from 'react-dom';
import GithubLink from '../GithubLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubLink url="http://github.com/test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
