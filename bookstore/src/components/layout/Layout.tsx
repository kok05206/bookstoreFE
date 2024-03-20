import styled from 'styled-components';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutStyled>{children}</LayoutStyled>
      <Footer />
    </>
  );
}

const LayoutStyled = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 20px 12px;
  }
`;
