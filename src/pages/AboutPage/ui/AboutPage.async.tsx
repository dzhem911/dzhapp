// What about default import and tsconfig.json - mode: "ESNext"?
import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // suppress error import by ts-ignore
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
