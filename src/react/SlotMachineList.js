import React from 'react';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { calcMatches } from '../lib/util';

class SlotMachineList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      spins: this.props.spins,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.spins.length > this.props.spins.length) {
      setTimeout(() => {
        this.setState({
          spins: newProps.spins,
        });
      }, 4500);
    }
  }

  render() {
    const { spins } = this.state;

    return (
      <div className="SlotMachineList">
        <Transition
          native
          keys={spins.map(spin => spin.key)}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 70 }}
          leave={{ opacity: 0, height: 0 }}
          config={{ tension: 10, friction: 5 }}
        >
          {spins.map(spin => {
            const matches = calcMatches(spin.colors);
            const win = matches === 3;
            let message = 'Unlucky';
            if (matches > 1) {
              message = 'Close call';
            }
            if (win) {
              message = 'You win!';
            }
            return styles => (
              <animated.div
                className={`SlotMachineList__item ${
                  win ? 'SlotMachineList__item--win' : ''
                }`}
                style={styles}
              >
                <img src={`/img/${win ? 'win' : 'loss'}.svg`} alt="" />
                {message}
                <div className="SlotMachineList__item__matches">
                  {calcMatches(spin.colors)}/3
                </div>
              </animated.div>
            );
          })}
        </Transition>
      </div>
    );
  }
}

SlotMachineList.propTypes = {
  spins: PropTypes.array.isRequired,
};

export default SlotMachineList;
