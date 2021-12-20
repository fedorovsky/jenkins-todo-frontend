import { composeWithDevTools } from 'redux-devtools-extension';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { createStore } from 'redux-dynamic-modules';
import { routerModule } from 'modules/routerModule';
import { CounterFirstModule } from 'CounterFirst/redux/types';
import { CounterSecondModule } from 'CounterSecond/redux/types';

// rehydrate state on app start
const initialState = {};

const rootModule = {
  id: 'root-module',
  reducerMap: {},
};

const store = createStore(
  {
    initialState,
    extensions: [getThunkExtension()],
    advancedComposeEnhancers: composeWithDevTools({
      name: 'dynamic-modules-app',
    }),
  },
  rootModule,
  routerModule,
);

export type DynamicModules = CounterFirstModule & CounterSecondModule;

// export type StaticModules = {};
// export type RootState = DynamicModules & StaticModules;

export type RootState = DynamicModules;

export type AppDispatch = typeof store.dispatch;

export default store;

// https://github.com/microsoft/redux-dynamic-modules/issues/118
