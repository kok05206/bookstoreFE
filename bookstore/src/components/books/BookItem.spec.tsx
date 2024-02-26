import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/themeContext';

const dummyBook = {
  id: 1,
  title: 'DummyBook',
  img: 5,
  categoryId: 1,
  form: 'paperback',
  isbn: 'Dummy ISBN',
  summary: 'Dummy Summary',
  detail: 'Dummy Detail',
  author: 'Dummy Author',
  pages: 100,
  contents: 'Dummy Contents',
  price: 10000,
  pubDate: '2021-01-01',
  likes: 1,
};

describe('book item 테스트', () => {
  it('렌더 확인', () => {
    const { getByText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
  });
});
