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

  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.div`
  background: #f1f2f6;
  padding: 1rem;
  margin-top: 61px;
  min-height: calc(100vh - 61px);

  @media (min-width: 769px) {
    margin-left: 260px;
    margin-top: 72px;
    min-height: calc(100vh - 72px);
  }
`;
