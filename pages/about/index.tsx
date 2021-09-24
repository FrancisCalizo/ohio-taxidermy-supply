import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';

export default function index() {
  return (
    <div>
      <Banner>
        <h1>About Us</h1>
      </Banner>

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus exercitationem
          esse neque beatae harum ipsam expedita cum numquam consequatur sapiente dolore, modi
          explicabo tempora magnam officia, voluptatibus, cumque optio ut nam. Ad non porro
          molestias exercitationem tempora perferendis esse. Temporibus, perferendis reprehenderit
          molestias veritatis laboriosam iusto aperiam sed sapiente.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolores perspiciatis qui
          molestias nobis sequi, eos rerum. Aspernatur sed excepturi dolore laudantium, debitis
          asperiores totam exercitationem iusto rem. Minus consectetur suscipit labore incidunt
          consequuntur deleniti quas itaque molestiae assumenda perspiciatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id accusamus ducimus quod
          quia beatae culpa cumque in dolorem accusantium sequi non, voluptatum dignissimos iste!
          Voluptatum atque quod, repudiandae numquam voluptates aliquid natus, illum eum alias error
          quidem fugiat. Minus repellendus dolores, sint alias mollitia dicta quis perspiciatis
          consequuntur, nobis rem dignissimos itaque magnam in maxime aspernatur exercitationem
          reprehenderit aliquam.
        </p>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 40vh;
  background-image: url('/images/about-us-banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 30%;
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
  padding: 2rem;
  margin: 0 auto;

  p {
    font-size: calc(16px + (20 - 16) * ((100vw - 400px) / (1800 - 400)));
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
