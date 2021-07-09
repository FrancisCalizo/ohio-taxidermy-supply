import React from 'react';
import styled from 'styled-components';
import SiteLayout from 'components/layout/SiteLayout';

export default function Cast() {
  return (
    <div>
      <Title>Your Cast</Title>
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 3rem;
`;

Cast.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
