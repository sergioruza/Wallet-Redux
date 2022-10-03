// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CUR, FAIL_CUR, SUCESS_CUR_GET,
  GET_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CUR:
    return {
      ...state,
    };
  case SUCESS_CUR_GET:
    return {
      ...state,
      currencies: action.payload,
    };
  case FAIL_CUR:
    return {
      ...state,
      error: action.err,
    };
  case GET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: (state.expenses.length - 1) + 1,
        value: action.info.value,
        description: action.info.description,
        currency: action.info.currency,
        method: action.info.method,
        tag: action.info.tag,
        exchangeRates: action.payloadAPI,
      }],
    };
  case REMOVE_EXPENSE: {
    return {
      ...state,
      expenses: [...action.payload],
    };
  }
  default:
    return state;
  }
};

export default wallet;
