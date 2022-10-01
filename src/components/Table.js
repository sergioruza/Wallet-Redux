import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
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
                  <td>Em branco</td>
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
