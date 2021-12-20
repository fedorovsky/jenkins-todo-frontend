import { IModule } from 'redux-dynamic-modules';
import { reducer } from './counterSecond';
import { CounterSecondModule } from './types';

export function getCounterSecondModule(): IModule<CounterSecondModule> {
  return {
    id: 'counterSecond',
    reducerMap: {
      counterSecond: reducer,
    },
  };
}
