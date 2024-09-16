import { User } from './userTypes';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_USERNAME_FILTER = 'SET_USERNAME_FILTER';
export const SET_EMAIL_FILTER = 'SET_EMAIL_FILTER';
export const SET_PHONE_FILTER = 'SET_PHONE_FILTER';


export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[]; 
}

export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string; 
}

export type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | { type: typeof SET_NAME_FILTER; payload: string }
  | { type: typeof SET_USERNAME_FILTER; payload: string }
  | { type: typeof SET_EMAIL_FILTER; payload: string }
  | { type: typeof SET_PHONE_FILTER; payload: string };
