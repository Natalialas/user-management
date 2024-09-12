import { Dispatch } from 'redux';
import { UserActionTypes, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../../types/actionTypes';
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
