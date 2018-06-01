import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { spin } from '../redux/slot-machine/actions';
import Intro from './Intro';
import SlotMachine from './SlotMachine';
import GithubLink from './GithubLink';

class App extends React.PureComponent {
  render() {
    const { colors, spins, spin } = this.props;
    return (
      <div className="App">
        <Intro
          heading="Slot Machine App"
          paragraph="Welcome to my solution for the Slot Machine app, below you can try
            your luck at my slot machine. For this task, I used React and Redux!"
        />
        <SlotMachine colors={colors} spins={spins} spin={spin} />
        <GithubLink url="https://bitbucket.org/whenyoumove/standay/src/master/" />
      </div>
    );
  }
}

App.propTypes = {
  colors: PropTypes.array,
  spins: PropTypes.array,
  spin: PropTypes.func,
};

const mapStateToProps = state => ({
  colors: state.slotMachine.colors,
  spins: state.slotMachine.spins,
});

const mapDispatchToProps = { spin };

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
