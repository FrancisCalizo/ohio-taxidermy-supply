import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';

export default function ScoutTaxidermist() {
  return (
    <div>
      <Banner>
        <h1>Scout A Taxidermist</h1>
      </Banner>

      <Container>
        <h1>Coming soon</h1>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 40vh;
  background-image: url('/images/scout-taxidermist.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0.6;
  }

  h1 {
    color: white;
    font-size: calc(32px + (54 - 32) * ((100vw) / (1200 - 300)));
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 0.5rem 2rem 2rem;
  margin: 0 auto;
`;

ScoutTaxidermist.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
