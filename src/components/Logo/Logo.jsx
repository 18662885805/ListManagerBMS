import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/" style={{ ...styles.logoStyle, ...this.props.style }}>
      ONESuite2 Redux ListManager
      </Link>
    );
  }
}

const styles = {
  logoStyle: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
