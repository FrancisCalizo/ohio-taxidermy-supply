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
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quidem quas nesciunt
          repudiandae a amet dolores itaque pariatur blanditiis modi, fuga earum veniam, ipsum
          labore deleniti? Blanditiis consequuntur explicabo dicta?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quidem quas nesciunt
          repudiandae a amet dolores itaque pariatur blanditiis modi, fuga earum veniam, ipsum
          labore deleniti? Blanditiis consequuntur explicabo dicta?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quidem quas nesciunt
          repudiandae a amet dolores itaque pariatur blanditiis modi, fuga earum veniam, ipsum
          labore deleniti? Blanditiis consequuntur explicabo dicta?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quidem quas nesciunt
          repudiandae a amet dolores itaque pariatur blanditiis modi, fuga earum veniam, ipsum
          labore deleniti? Blanditiis consequuntur explicabo dicta?
        </p>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 70vh;
  background-image: url('/images/friends.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 10%;
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
  padding: 3rem 2rem;
  margin: 0 auto;

  p {
    color: ${(props) => props.theme.colors.gray};
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
