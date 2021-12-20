import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { RootState } from 'store';

/**
 * Constants
 */
export enum ACTION {
  COUNTER_INCREASE = '@@counterSecond/COUNTER_INCREASE',
  COUNTER_DECREASE = '@@counterSecond/COUNTER_DECREASE',
}

export interface CounterState {
  readonly value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const reducer: Reducer<CounterState, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.COUNTER_INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case ACTION.COUNTER_DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

/**
 * Selectors
 */
export const stateSelector = (state: RootState) => state.counterSecond;

export const counterSelector = createSelector(
  stateSelector,
  (state) => state.value,
);

/**
 * Action Creators
 */
interface Increase {
  type: typeof ACTION.COUNTER_INCREASE;
}

interface Decrease {
  type: typeof ACTION.COUNTER_DECREASE;
}

type ActionType = Increase | Decrease;

export const increase = () => ({
  type: ACTION.COUNTER_INCREASE,
});

export const decrease = () => ({
  type: ACTION.COUNTER_DECREASE,
});
