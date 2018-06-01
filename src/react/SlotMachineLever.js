import React from 'react';
import PropTypes from 'prop-types';

class SlotMachineLever extends React.PureComponent {
  render() {
    const { down, pull } = this.props;
    return (
      <img
        className="SlotMachineLever"
        src="/img/lever.svg"
        alt=""
        onClick={pull}
        style={{ transform: down ? 'rotate(40deg)' : 'rotate(21deg)' }}
      />
    );
  }
}

SlotMachineLever.propTypes = {
  down: PropTypes.bool.isRequired,
  pull: PropTypes.func,
};

export default SlotMachineLever;
