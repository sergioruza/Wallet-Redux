// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CUR, FAIL_CUR, SUCESS_CUR_GET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
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
  default:
    return state;
  }
};

export default wallet;
