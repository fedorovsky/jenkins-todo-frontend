import { IModule } from 'redux-dynamic-modules';
import { reducer } from './counterFirst';
import { CounterFirstModule } from './types';

export function getCounterFirstModule(): IModule<CounterFirstModule> {
  return {
    id: 'counterFirst',
    reducerMap: {
      counterFirst: reducer,
    },
  };
}
