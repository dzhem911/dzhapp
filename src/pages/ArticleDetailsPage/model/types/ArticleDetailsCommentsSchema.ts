// Extends 51mod -> 31 min
import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
  isLoading?: boolean;
  error?: string;
}
