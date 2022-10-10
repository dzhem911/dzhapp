// Schema for createReduxStore

import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
