import { Category } from '@/models/category.model';
import { requestHandler } from '@/api/http';

export const fetchCategory = async () => {
  return await requestHandler<Category[]>('get', '/category');
};
