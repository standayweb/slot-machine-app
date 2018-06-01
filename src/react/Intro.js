import React from 'react';
import PropTypes from 'prop-types';

class Intro extends React.PureComponent {
  render() {
    const { heading, paragraph } = this.props;

    return (
      <div className="Intro">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    );
  }
}

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Intro;
