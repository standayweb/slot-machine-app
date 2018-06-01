import React from 'react';
import PropTypes from 'prop-types';

const square = 144;

const squares = num => num * square;

class SlotMachineWheel extends React.PureComponent {
  render() {
    return (
      <div className="SlotMachineWheel">
        <div className="SlotMachineWheel__inner">
          <div
            style={{ top: -squares(1) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--yellow"
          />
          <div
            style={{ top: squares(0) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--red"
          />
          <div
            style={{ top: squares(1) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--blue"
          />
          <div
            style={{ top: squares(2) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--green"
          />
          <div
            style={{ top: squares(3) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--yellow"
          />
          <div
            style={{ top: squares(4) }}
            className="SlotMachineWheel__part SlotMachineWheel__part--red"
          />
        </div>
      </div>
    );
  }
}

SlotMachineWheel.propTypes = {};

export default SlotMachineWheel;
