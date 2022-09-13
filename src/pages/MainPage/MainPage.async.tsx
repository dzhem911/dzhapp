// What about default import and tsconfig.json - mode: "ESNext"?
// async components have to be wrapped in suspend!

import {lazy} from 'react';

export const MainPageAsync = lazy(() => import('./MainPage'))