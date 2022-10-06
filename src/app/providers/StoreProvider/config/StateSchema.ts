// Schema for createReduxStore

import { CounterSchema } from 'entities/counter';

export interface StateSchema {
  counter: CounterSchema;
}
