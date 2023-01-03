import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  // suppress error import by ts-ignore
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
