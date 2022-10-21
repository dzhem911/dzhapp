import { lazy } from 'react';
// components should be default exported!

// artificial delay for the sake of example of performance
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // suppress error import by ts-ignore
  // @ts-ignore
  setTimeout(() => resolve(import('./ProfilePage')), 2000);
}));
