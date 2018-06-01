import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro';
import GithubLink from './GithubLink';
import SlotMachine from './SlotMachine';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Intro
          heading="Slot Machine App"
          paragraph="Welcome to my solution for the Slot Machine app, below you can try
            your luck at my slot machine. For this task, I used React and Redux!"
        />
        <SlotMachine />
        <GithubLink url="https://github.com/standayweb/slot-machine-app" />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
