import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { counterSelector, decrease, increase } from '../redux/counterFirst';
import { getCounterFirstModule } from '../redux/getCounterFirstModule';

const CounterFirst = () => {
  const counterValue = useSelector(counterSelector);

  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increase());

  const handleDecrease = () => dispatch(decrease());

  const goToCounterSecond = () => dispatch(push('/second-module'));

  return (
    <DynamicModuleLoader modules={[getCounterFirstModule()]}>
      <h1>Counter First: {counterValue}</h1>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
      <button type="button" onClick={goToCounterSecond}>
        Go To Counter Second
      </button>
    </DynamicModuleLoader>
  );
};

export default CounterFirst;
