import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

export default function index() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>About Us</PageTitle>
      </div>

      <FlexContainer>
        <div>
          <Image
            src={'/images/media.jpg'}
            alt="about-image"
            layout="responsive"
            width={600}
            height={450}
            quality={50}
          />
        </div>
        <div>
          <p>
            CastMeApp.com is a living breathing platform to break the gap between industry need and
            talent at hand. <br /> <br />
            At CastMeApp.com we host a network of creative talent creating and sharing their
            capabilities within the market. We then categorize and include external analytics to
            match the cast and ensure brands, business, labels and casting directors/entertainment
            houses get the talent they need to create the campaign.
          </p>
        </div>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  display: flex;
  margin: 0 2rem;
  color: ${(props) => props.theme.colors.gray};
  line-height: 1.7;
  max-width: 1100px;
  margin: 0 auto;

  & > div {
    width: 50%;

    @media (max-width: 960px) {
      width: 95%;
    }
  }

  & > div:nth-child(1) {
    margin-right: 1rem;
  }

  & > div:nth-child(2) {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      margin: 0;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 4rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
