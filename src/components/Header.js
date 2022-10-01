import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

class Header extends Component {
  soma = () => {
    const { totalDespesa } = this.props;
    let acc = 0;
    totalDespesa.forEach((element) => {
      const { currency, value } = element;
      const cotacao = element.exchangeRates[currency].ask;
      acc += (Number(value) * Number(cotacao));
    });
    return acc;
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <h2 data-testid="total-field">{this.soma().toFixed(2)}</h2>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalDespesa: state.wallet.expenses,
});

Header.propTypes = {
  email: PropType.string.isRequired,
  totalDespesa: PropType.array,
}.isRequired;
export default connect(mapStateToProps)(Header);
