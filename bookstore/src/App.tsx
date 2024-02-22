import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { ThemeName, getTheme } from './style/theme';
import ThemeSwicher from './components/header/ThemeSwicher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwicher />
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
