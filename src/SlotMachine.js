import React from 'react';
import PropTypes from 'prop-types';
import SlotMachineWheel from './SlotMachineWheel';
import SlotMachineLever from './SlotMachineLever';
import SlotMachineList from './SlotMachineList';

class SlotMachine extends React.PureComponent {
  render() {
    return (
      <div className="SlotMachine">
        <div className="SlotMachine__main">
          <SlotMachineWheel />
          <SlotMachineWheel />
          <SlotMachineWheel />
        </div>
        <SlotMachineLever />
        <SlotMachineList />
      </div>
    );
  }
}

SlotMachine.propTypes = {};

export default SlotMachine;
