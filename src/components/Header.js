import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <h2 data-testid="total-field">0</h2>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Header.propTypes = {
  email: PropType.string.isRequired,
};
export default connect(mapStateToProps)(Header);
