// eslint-disable-next-line dz-path-plugin/path-checker
import { Article } from 'entities/Article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
