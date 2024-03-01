import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function EllipsisBox({ children }: Props) {
  return (
    <EllipsisBoxStyle>
      <p>{children}</p>
    </EllipsisBoxStyle>
  );
}

const EllipsisBoxStyle = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
