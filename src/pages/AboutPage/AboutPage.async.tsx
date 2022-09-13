// What about default import and tsconfig.json - mode: "ESNext"?
import {lazy} from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'))