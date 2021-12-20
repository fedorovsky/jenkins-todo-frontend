import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { counterSelector, decrease, increase } from '../redux/counterSecond';
import { getCounterSecondModule } from '../redux/getCounterSecondModule';

const CounterSecond = () => {
  const counterValue = useSelector(counterSelector);

  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increase());

  const handleDecrease = () => dispatch(decrease());

  const goToCounterFirst = () => dispatch(push('/first-module'));

  return (
    <DynamicModuleLoader modules={[getCounterSecondModule()]}>
      <h1>Counter Second: {counterValue}</h1>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
      <button type="button" onClick={goToCounterFirst}>
        Go To Counter First
      </button>
    </DynamicModuleLoader>
  );
};

export default CounterSecond;
