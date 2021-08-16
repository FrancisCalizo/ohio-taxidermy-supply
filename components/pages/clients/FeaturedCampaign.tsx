import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { darken } from 'polished';

export default function FeaturedCampaign() {
  return (
    <MainContainer>
      <h2 className="heading">Featured Campaign</h2>

      <Campaign>
        <div className="campaign-image-container">
          <Image
            src={`/images/clients/bang-campaign.jpeg`}
            alt="logo"
            quality={100}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="campaign-right">
          <div className="campaign-right_header-body">
            <h2 className="campaign-title">Bang Energy | Fueling The Destiny</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt qui eligendi
              ducimus reprehenderit ea suscipit laboriosam est sit iste itaque impedit minima quam
              quasi, in quas. Cum, corporis fugiat itaque animi minus omnis culpa ratione enim,
              voluptates veritatis, nulla amet iste? Voluptatum vero amet explicabo reprehenderit
              optio fugiat dolorem.
            </p>
          </div>

          <div className="campaign-right_footer">
            <ReadMoreButton>Read More</ReadMoreButton>
          </div>
        </div>
      </Campaign>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 3rem 0;

  .heading {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: -0.1rem;
  }
`;

const Campaign = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 799px) {
    flex-direction: column;
  }

  .campaign-image-container {
    position: relative;
    height: 300px;
    min-width: 300px;

    & > div:first-child {
      border-radius: 7px 0 0 7px;
    }
  }

  .campaign-right {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .campaign-right_footer {
      display: flex;
      justify-content: flex-end;
    }

    p {
      color: ${({ theme }) => theme.colors.gray};

      @media (max-width: 1100px) and (min-width: 800px) {
        font-size: calc(12px + (16 - 12) * ((100vw - 400px) / (1100 - 400)));
      }
    }
  }

  .campaign-title {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: -0.1rem;
    margin: 0;

    @media (max-width: 1100px) and (min-width: 800px) {
      font-size: calc(12px + (32 - 12) * ((100vw - 400px) / (1100 - 400)));
    }
  }
`;

const ReadMoreButton = styled.button`
  display: block;
  width: 170px;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.pink};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-radius: 50px;
  margin: 0.75rem 0.5rem 0.25rem 0;
  font-size: 16px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.pink)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)};
`;
