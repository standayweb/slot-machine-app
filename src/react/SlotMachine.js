import React from 'react';
import PropTypes from 'prop-types';
import SlotMachineWheel from './SlotMachineWheel';
import SlotMachineLever from './SlotMachineLever';
import SlotMachineList from './SlotMachineList';

class SlotMachine extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      leverDown: false,
      spinning: [false, false, false],
      canSpin: true,
    };

    this.pullLever = this.pullLever.bind(this);
  }

  pullLever() {
    if (!this.state.canSpin) {
      return;
    }
    this.setState({
      leverDown: true,
      spinning: [true, true, true],
      canSpin: false,
    });
    setTimeout(() => {
      this.setState({
        leverDown: false,
      });
    }, 500);
    setTimeout(() => {
      this.props.spin();
    }, 1000);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.spins.length > this.props.spins.length) {
      this.setState({
        spinning: [false, true, true],
      });
      setTimeout(() => {
        this.setState({
          spinning: [false, false, true],
        });
      }, 1000);
      setTimeout(() => {
        this.setState({
          spinning: [false, false, false],
          canSpin: true,
        });
      }, 2000);
    }
  }

  render() {
    const { colors, spins } = this.props;
    const { leverDown, spinning } = this.state;
    return (
      <div className="SlotMachine">
        <div className="SlotMachine__main">
          <SlotMachineWheel spinning={spinning[0]} color={colors[0]} />
          <SlotMachineWheel spinning={spinning[1]} color={colors[1]} />
          <SlotMachineWheel spinning={spinning[2]} color={colors[2]} />
        </div>
        <SlotMachineLever down={leverDown} pull={this.pullLever} />
        <SlotMachineList spins={spins} />
      </div>
    );
  }
}

SlotMachine.propTypes = {
  colors: PropTypes.array,
  spins: PropTypes.array,
  spin: PropTypes.func,
};

export default SlotMachine;
