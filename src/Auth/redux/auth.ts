import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { RootState } from 'store';
import { AuthState } from './types';

/**
 * Constants
 */
export enum ACTION {
  REGISTER_REQUEST = '@@auth/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@auth/REGISTER_FAILURE',
}

const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  user: {},
};

export const reducer: Reducer<AuthState, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

/**
 * Selectors
 */
export const stateSelector = (state: RootState) => state.auth;

export const isLoggedInSelector = createSelector(
  stateSelector,
  (state) => state.loggedIn,
);

/**
 * Action Creators
 */
interface RegisterRequest {
  type: typeof ACTION.REGISTER_REQUEST;
}

interface RegisterSuccess {
  type: typeof ACTION.REGISTER_SUCCESS;
}
type ActionType = RegisterRequest | RegisterSuccess;
