// Coloque aqui suas actions
import currenciesAPI from '../../services/curAPI';

export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export const submitEmail = (email) => ({
  type: SUBMIT_EMAIL,
  email,
});

// --------------------------------- Requisito 3 ----------------------------------------- //
export const GET_CUR = 'GET_CUR';
export const SUCESS_CUR_GET = 'SUCESS_CUR_GET';
export const FAIL_CUR = 'FAIL_CUR';

export const getCur = () => ({
  type: GET_CUR,
});

export const sucessCurGet = (payload) => ({
  type: SUCESS_CUR_GET,
  payload,
});

export const failCur = (err) => ({
  type: FAIL_CUR,
  err,
});

export const fetchThunkCurr = () => async (dispatch) => {
  dispatch(getCur());
  try {
    const payload = await currenciesAPI();
    delete payload.USDT;
    const moedas = Object.entries(payload).map((element) => element[1].code);
    dispatch(sucessCurGet(moedas));
  } catch (err) {
    dispatch(failCur(err));
  }
};

// --------------------------------- Requisito 4 ----------------------------------------- //
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const GET_EXPENSE = 'GET_EXPENSE';
export const EXPENSE_ERROR = 'EXPENSE_ERROR';

// const expenseSave = () => ({
//   type: SAVE_EXPENSE,
// });

const getExpense = (payloadAPI, info) => ({
  type: GET_EXPENSE,
  payloadAPI,
  info,
});

const expenseFail = (err) => ({
  type: EXPENSE_ERROR,
  err,
});

export const thunkExpense = (info) => async (dispatch) => {
  try {
    const data = await currenciesAPI();
    dispatch(getExpense(data, info));
  } catch (err) {
    dispatch(expenseFail(err));
  }
};

// --------------------------------- Requisito 7 ----------------------------------------- //
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
