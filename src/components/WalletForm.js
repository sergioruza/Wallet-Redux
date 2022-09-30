import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { fetchThunkCurr } from '../redux/actions';

class WalletForm extends Component {
  // state = {
  //   expense: 0,
  //   description: '',
  // };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchThunkCurr());
  }

  // onHandleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  render() {
    const { data } = this.props;
    // console.log(data);
    // console.log(filter);
    return (
      <div>
        <label htmlFor="value-input">
          Valor da despesa
          <input
            // onChange={ this.onHandleChange }
            name="expense"
            data-testid="value-input"
            type="number"
          />
        </label>

        <label htmlFor="description-input">
          Valor da despesa
          <input
            // onChange={ this.onHandleChange }
            name="description"
            data-testid="description-input"
            type="text"
          />
        </label>

        <select data-testid="currency-input">
          {
            data.map((elemento, index) => (
              <option key={ index }>{elemento}</option>
            ))
          }
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
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropType.func.isRequired,
  data: PropType.array,
}.isRequired;
export default connect(mapStateToProps)(WalletForm);
