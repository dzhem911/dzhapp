import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from '../StateSchema';

// for reuse in storybook or jest
export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    // off dev_tools for production
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
