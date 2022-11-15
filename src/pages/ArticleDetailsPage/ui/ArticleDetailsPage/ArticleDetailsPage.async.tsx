import { lazy } from 'react';
// components should be default exported!

// artificial delay for the sake of example of performance
export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // suppress error import by ts-ignore
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 2000);
}));
