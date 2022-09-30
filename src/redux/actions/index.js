// Coloque aqui suas actions
import currenciesAPI from '../../services/curAPI';

export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';

export const submitEmail = (email) => ({
  type: SUBMIT_EMAIL,
  email,
});

// -------------------------------------------------------------------------- //
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
