import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getCounterSecondModule } from '../redux/getCounterSecondModule';

const CounterSecond = React.lazy(() => import('./CounterSecond'));

const CounterSecondLoader: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getCounterSecondModule()]}>
      <React.Suspense fallback={<div>loading...</div>}>
        <CounterSecond />
      </React.Suspense>
    </DynamicModuleLoader>
  );
};

export default CounterSecondLoader;
