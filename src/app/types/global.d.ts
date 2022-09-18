// Помогает импортировать CSS/SASS модули с typescript & react & webpack
// и помогает с автокомплитом стилей
declare module '*.sass' {
  interface IClassNames {
    [classname: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}