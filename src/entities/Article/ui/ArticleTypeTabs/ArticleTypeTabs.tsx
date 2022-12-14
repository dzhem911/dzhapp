import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { value, onChangeType, className } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('ИТ'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      onTabClick={onTabClick}
      value={value}
      className={classNames('', {}, [className])}
    />
  );
});
