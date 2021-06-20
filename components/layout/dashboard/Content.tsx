import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getPathName } from 'components/utils';

export default function Content({ children }: any) {
  const router = useRouter();

  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(getPathName(router.pathname, 'dashboard/'));
  }, [router.pathname]);

  return (
    <MainContainer>
      <DashboardTitle>{title || 'Overview'}</DashboardTitle>
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #d9d9d9;
  margin-top: 65px;
  padding: 1rem;

  @media (min-width: 769px) {
    margin-left: 260px;
    margin-top: 73px;
  }
`;

const DashboardTitle = styled.h2`
  text-transform: capitalize;
  margin-top: 0;
`;
