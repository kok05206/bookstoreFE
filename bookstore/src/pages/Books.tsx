import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';
import BooksViewSwitcher from '../components/books/BooksViewSwitcher';
import { useBooks } from '../hooks/useBooks';
import Loading from '../components/common/Loading';
import { useBooksInfinite } from '../hooks/useBooksInfinite';
import Button from '../components/common/Button';
import { useEffect, useRef } from 'react';

export default function Books() {
  const { books, pagination, isEmpty, isBooksLoading, fetchNextPage, hasNextPage } =
    useBooksInfinite();

  const moreRef = useRef(null);

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMore();
          observer.unobserve(entry.target);
        }
      });
    });

    if (moreRef.current) {
      observer.observe(moreRef.current);
    }
    return () => observer.disconnect();
  }, [books, moreRef]);

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size='large'>도서 검색 결과</Title>
      <BookStyle>
        <div className='filter'>
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        <BooksList books={books} />
      </BookStyle>
    </>
  );
}

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;
  }
`;
