import React from 'react';
import styled from 'styled-components';

export default function Content({ children }: any) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.div`
  background: #d9d9d9;
  margin-top: 65px;
  height: calc(100vh - 73px);

  @media (min-width: 769px) {
    margin-left: 260px;
    margin-top: 73px;
  }
`;
