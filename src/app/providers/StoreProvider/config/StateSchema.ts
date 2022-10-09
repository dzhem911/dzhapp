// Schema for createReduxStore

import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
