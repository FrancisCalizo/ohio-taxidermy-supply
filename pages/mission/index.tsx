import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';

export default function index() {
  return (
    <div>
      <Banner>
        <h1>Our Mission</h1>
      </Banner>
      <Container>
        <h2>Mission Statement</h2>
        <p>
          The purpose of CastMeApp.com is to provide a platform where Talent can create, Clients can
          hire, Consumers can be entertained and all opportunities can be Cast to the right match
          for the experience to be fruitful for all parties. CastMeApp.com is a medium. A stress
          free connection platform to provide opportunities and to bridge the gap between Talent,
          Client, Travel and Opportunity without wasted hours or false data. With CastMeApp.com,
          clients can track performance and Talent can be themselves, authentically creating and
          landing in front of the right opportunity.
        </p>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 40vh;
  background-image: url('/images/friends.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: calc(32px + (54 - 32) * ((100vw) / (1200 - 300)));
  }
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;

  p {
    color: ${(props) => props.theme.colors.gray};
    font-size: calc(16px + (22 - 16) * ((100vw - 400px) / (1800 - 400)));
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
