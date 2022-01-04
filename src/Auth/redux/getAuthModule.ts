import { IModule } from 'redux-dynamic-modules';
import { reducer } from './auth';
import { AuthModule } from './types';

export function getAuthModule(): IModule<AuthModule> {
  return {
    id: 'authModule',
    reducerMap: {
      auth: reducer,
    },
  };
}
