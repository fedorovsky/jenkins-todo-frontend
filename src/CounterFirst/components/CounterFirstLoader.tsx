import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getCounterFirstModule } from '../redux/getCounterFirstModule';

const CounterFirst = React.lazy(() => import('./CounterFirst'));

const CounterFirstLoader: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getCounterFirstModule()]}>
      <React.Suspense fallback={<div>loading...</div>}>
        <CounterFirst />
      </React.Suspense>
    </DynamicModuleLoader>
  );
};

export default CounterFirstLoader;
