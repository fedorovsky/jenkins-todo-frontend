import { createBrowserHistory, LocationState } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { IModule } from 'redux-dynamic-modules';

export const history = createBrowserHistory();

export const routerModule: IModule<LocationState> = {
  id: 'startup',
  reducerMap: {
    router: connectRouter(history),
  },
  middlewares: [routerMiddleware(history)],
};
