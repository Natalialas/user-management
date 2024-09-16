import { Dispatch } from 'redux';
import { UserActionTypes, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_NAME_FILTER, SET_USERNAME_FILTER, SET_EMAIL_FILTER, SET_PHONE_FILTER} from '../../types/actionTypes';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};

export const setNameFilter = (filter: string): UserActionTypes => ({
  type: SET_NAME_FILTER,
  payload: filter,
});

export const setUsernameFilter = (filter: string): UserActionTypes => ({
  type: SET_USERNAME_FILTER,
  payload: filter,
});

export const setEmailFilter = (filter: string): UserActionTypes => ({
  type: SET_EMAIL_FILTER,
  payload: filter,
});

export const setPhoneFilter = (filter: string): UserActionTypes => ({
  type: SET_PHONE_FILTER,
  payload: filter,
});

