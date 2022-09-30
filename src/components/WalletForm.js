import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThunkCurr } from '../redux/actions';

class WalletForm extends Component {
  state = {
    expense: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchThunkCurr());
  }

  render() {
    const { data } = this.props;
    // console.log(data);
    delete data.USDT;
    console.log(data);
    // console.log(filter);
    return (
      <div>
        <label htmlFor="value-input">
          Valor da despesa
          <input name="expense" data-testid="value-input" type="number" />
        </label>

        <label htmlFor="description-input">
          Valor da despesa
          <input name="description" data-testid="description-input" type="text" />
        </label>

        {/* <select data-testid="currency-input">
          <option>{code}</option>
        </select>

        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
