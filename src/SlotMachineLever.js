import React from 'react';
import PropTypes from 'prop-types';

class SlotMachineLever extends React.PureComponent {
  render() {
    return (
      <img
        className="SlotMachineLever"
        src="/img/lever.svg"
        style={{ transform: 'rotate(21deg)' }}
        alt=""
      />
    );
  }
}

SlotMachineLever.propTypes = {};

export default SlotMachineLever;
