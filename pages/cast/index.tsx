import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

export default function Cast() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Your Cast</PageTitle>
      </div>

      <BudgetContainer>
        <div className="budget">
          <div>
            <h4>Budget Total</h4>
            <h2>$322,108.93</h2>
          </div>
          <div>
            <h4>Budget Used</h4>
            <h2>$204,000.00</h2>
          </div>
        </div>
        <div className="your-cast">
          <h4>Your Cast</h4>
          <div className="cast-card-container">
            {[...Array(4)].map((_, key) => (
              <CastCard key={key}>
                <Image
                  src={`/images/talent-profile.jpg`}
                  alt="profile"
                  width={160}
                  height={160}
                  quality={90}
                />
                <div>
                  <h3>Gwen Stacy</h3>
                  <p className="headline">Some Headline</p>
                  <p className="categories">Drama, Music, Travel</p>
                  <Link href={`/talent/${key}`}>
                    <ViewProfileButton>View Profile</ViewProfileButton>
                  </Link>
                  <ContactButton>Contact</ContactButton>
                </div>
              </CastCard>
            ))}
          </div>
        </div>
      </BudgetContainer>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>The Pool</PageTitle>
      </div>

      <PoolContainer>
        {[...Array(4)].map((_, key) => (
          <PoolCard key={key}>
            <div className="hire-container">
              <Image
                src={`/images/talent-profile.jpg`}
                alt="profile"
                width={160}
                height={160}
                quality={90}
              />

              <HireButton>Hire Me!</HireButton>
            </div>
            <div>
              <h3>Gwen Stacy</h3>
              <p className="headline">Some Headline</p>
              <p className="categories">Drama, Music, Travel</p>
              <Link href={`/talent/${key}`}>
                <ViewProfileButton>View Profile</ViewProfileButton>
              </Link>
              <ContactButton>Contact</ContactButton>
            </div>
          </PoolCard>
        ))}
      </PoolContainer>
    </div>
  );
}

const BudgetContainer = styled.div`
  display: flex;
  margin: 0 1rem;
  padding: 1rem 2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  h4 {
    margin: 0.25rem 0 0.5rem;
    color: ${(props) => props.theme.colors.gray};
  }

  .budget {
    margin-right: 2rem;

    & > div {
      margin-bottom: 1.5rem;
      border-bottom: 5px solid ${(props) => props.theme.colors.teal};
      border-radius: 5px;
    }

    h2 {
      color: ${(props) => props.theme.colors.darkGray};
      margin: 0;
      font-size: 3rem;
    }
  }

  .your-cast {
    margin-left: 2rem;
    flex: 1 1 auto;

    .cast-card-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const CastCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  width: 400px;
  margin: 0 1rem 1rem 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 100px;
  }

  img {
    border: 2px solid ${(props) => props.theme.colors.pink} !important;
    border-radius: 200px;
  }

  > div {
    margin-left: 2rem;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0;
      color: ${(props) => props.theme.colors.darkGray};
    }

    .headline {
      font-style: italic;
      margin: 0.5rem 0;
      color: ${(props) => props.theme.colors.purple};
    }

    .categories {
      margin: 0.25rem 0;
    }
  }
`;

const ViewProfileButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.pink};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-radius: 50px;
  margin: 0.75rem 0.5rem 0.25rem 0;
  font-size: calc(10px + (18 - 10) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.pink)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)};
`;

const ContactButton = styled(ViewProfileButton)`
  background: ${(props) => props.theme.colors.paleBlue};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.paleBlue)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.paleBlue)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.paleBlue)};
`;

const PoolContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;

  @media (max-width: 1660px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PoolCard = styled(CastCard)`
  width: auto;

  .hire-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HireButton = styled(ContactButton)`
  background: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.green)};
  margin: 0.5rem 0 0 0;
  padding: 0.25rem;
  max-width: 100px;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.green)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.green)};
`;

Cast.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
