// Помогает импортировать CSS/SASS модули с typescript & react & webpack
// и помогает с автокомплитом стилей
declare module '*.sass' {
  interface IClassNames {
    [classname: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg" {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;