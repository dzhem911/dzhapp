// специальный тайпскриптовый тип Record
// в качестве ключа используется string, в качестве значения boolean | string
export type Mods = Record<string, boolean | string | undefined>

// возвращает строку классов
// Принимает аргументы: главный класс - cls,
// объект с модами - объект в котором, в качестве ключей идут названия класса,
// а как значение - boolean флаг
// массив дополнительных классов
export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value)) // фильтрую кортежи только со значеним true
      .map(([className]) => className), // возвращаю имена классов
  ]
    .join(' ');
}
