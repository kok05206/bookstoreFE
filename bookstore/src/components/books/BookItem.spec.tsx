import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';

const dummyBook: Book = {
  id: 1,
  title: 'dummy book',
  img: 5,
  categoryId: 1,
  form: 'paper',
  isbn: 1,
  summary: 'dummy summary',
  detail: 'dummy detail',
  author: 'dummy author',
  pages: 100,
  contents: 'dummy contents',
  price: 10000,
  pubDate: '2021-01-01',
  likes: 1,
};

describe('BookItem', () => {
  it('렌더 여부', () => {
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );
    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(screen.getByText('10,000원')).toBeInTheDocument();
    expect(screen.getByText(dummyBook.likes)).toBeInTheDocument();
    expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
