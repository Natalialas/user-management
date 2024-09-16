import { UserState } from '../../types/userTypes';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_NAME_FILTER, 
  SET_USERNAME_FILTER, 
  SET_EMAIL_FILTER, 
  SET_PHONE_FILTER,
  UserActionTypes,
} from '../../types/actionTypes';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  nameFilter: '',
  usernameFilter: '',
  emailFilter: '',
  phoneFilter: '',
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_NAME_FILTER:
      return { ...state, nameFilter: action.payload };
    case SET_USERNAME_FILTER:
      return { ...state, usernameFilter: action.payload };
    case SET_EMAIL_FILTER:
      return { ...state, emailFilter: action.payload };
    case SET_PHONE_FILTER:
      return { ...state, phoneFilter: action.payload };
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
