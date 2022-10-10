import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from '../StateSchema';

// for reuse in storybook or jest
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    // off dev_tools for production
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
