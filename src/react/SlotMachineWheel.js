import React from 'react';
import PropTypes from 'prop-types';
import { wrap } from '../lib/util';

const square = 144;

const squares = num => num * square;

const offsets = {
  yellow: 29 + squares(0),
  green: 29 + squares(1),
  blue: 29 + squares(2),
  red: 29 + squares(3),
};

class SlotMachineWheel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: offsets[this.props.color],
    };

    this.spinning = this.spinning.bind(this);
    this.calcNextColorOffset = this.calcNextColorOffset.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.spinning, 40);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.spinning && newProps.spinning !== this.props.spinning) {
      this.setState(state => ({
        offset: this.calcNextColorOffset(state.offset, newProps.color),
      }));
    }
  }

  spinning() {
    if (this.props.spinning) {
      this.setState(state => ({
        offset: state.offset + squares(1),
      }));
    }
  }

  calcNextColorOffset(offset, color) {
    const wrappedOffset = wrap(offset, squares(4));
    const result = offset + (squares(4) - wrappedOffset) + offsets[color];
    return result;
  }

  render() {
    return (
      <div className="SlotMachineWheel">
        <div
          className="SlotMachineWheel__inner"
          style={{
            transform: `translate3d(0px, ${wrap(
              this.state.offset,
              squares(4),
            )}px, 0px)`,
          }}
        >
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

SlotMachineWheel.propTypes = {
  spinning: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

export default SlotMachineWheel;
