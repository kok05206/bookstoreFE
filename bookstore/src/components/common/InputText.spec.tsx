import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '@/context/themeContext';
import InputText from '@/components/common/InputText';
import React from 'react';

describe('input 테스트', () => {
  it('렌더 확인', () => {
    //1. 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder='입력' />
      </BookStoreThemeProvider>
    );
    //2. 확인
    expect(screen.getByPlaceholderText('입력')).toBeInTheDocument();
  });

  it('forwardRef test', () => {
    const ref = React.createRef<HTMLInputElement>();

    //1. 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder='입력' ref={ref} />
      </BookStoreThemeProvider>
    );
    //2. 확인
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
