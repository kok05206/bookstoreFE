import { useEffect, useState } from 'react';
import { fetchCategory } from '../api/category.api';
import { Category } from '../models/category.model';
import { useLocation } from 'react-router-dom';
import { QUERYSTRING } from '../constants/querystring';

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const locaton = useLocation();

  const setActive = () => {
    const params = new URLSearchParams(locaton.search);
    if (params.get(QUERYSTRING.CATEGORY_ID)) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.categoryId === Number(params.get(QUERYSTRING.CATEGORY_ID)),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll = [
        {
          categoryId: null,
          categoryName: '전체',
        },
        ...category,
      ];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [locaton.search]);

  return { category };
};
