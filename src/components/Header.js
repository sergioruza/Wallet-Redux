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
      console.log(cotacao);
      // console.log((Number(value) * Number(cotacao)));
      // this.setState({ total: Number(value) * Number(cotacao) });
      acc += (Number(value) * Number(cotacao));
      // console.log(acc);
    });
    return acc;
  };

  render() {
    const { email } = this.props;
    // console.log(typeof totalDespesa[0].exchangeRates.USD.ask);
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
