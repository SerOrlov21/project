import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

{/* из api испортируются эти функции, и внутри скобок передаются данные, по которым функция должна 
вернуть тот или иной результат  */}

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
