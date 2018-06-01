import React from 'react';
import { Spring, animated, interpolate } from 'react-spring';
import PropTypes from 'prop-types';

class SlotMachineLever extends React.PureComponent {
  render() {
    const { down, pull } = this.props;
    return (
      <Spring
        native
        to={{
          rotate: down ? 90 : 21,
          x: down ? 80 : 0,
          y: down ? 50 : 0,
        }}
        config={{ tension: 8, friction: 4 }}
      >
        {styles => (
          <animated.img
            className="SlotMachineLever"
            src="/img/lever.svg"
            alt=""
            onClick={pull}
            style={{
              transform: interpolate(
                [styles.rotate, styles.x, styles.y],
                (rotate, x, y) =>
                  `rotate(${rotate}deg) translate3d(${x}px, ${y}px, 0px)`,
              ),
            }}
          />
        )}
      </Spring>
    );
  }
}

SlotMachineLever.propTypes = {
  down: PropTypes.bool.isRequired,
  pull: PropTypes.func,
};

export default SlotMachineLever;
