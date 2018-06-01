import React from 'react';
import PropTypes from 'prop-types';

class GithubLink extends React.PureComponent {
  render() {
    const { url } = this.props;

    return (
      <a className="GithubLink" href={url}>
        <img src="/img/github-corner-right.svg" alt="github corner logo" />
      </a>
    );
  }
}

GithubLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GithubLink;
