import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  onHandleClick = (expense) => {
    const { expenses, dispatch } = this.props;
    const filter = expenses.filter((element) => element !== expense);
    dispatch(removeExpense(filter));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            expenses.map((element) => {
              const { currency } = element;
              const { description } = element;
              const { tag } = element;
              const { method } = element;
              const { value } = element;
              const moeda = element.exchangeRates[currency].name;
              const { ask } = element.exchangeRates[currency];
              const convertedValue = (Number(value) * Number(ask)).toFixed(2);

              return (
                <tr key={ element.id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{moeda}</td>
                  <td>{Number(ask).toFixed(2)}</td>
                  <td>{convertedValue}</td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      onClick={ () => this.onHandleClick(element) }
                      type="button"
                    >
                      Excluir

                    </button>
                  </td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                    >
                      Editar

                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropType.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
