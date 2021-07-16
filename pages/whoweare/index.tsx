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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus esse qui,
            reprehenderit aliquid nesciunt ut. Doloremque porro, est dolor vero accusamus eligendi,
            ipsam harum excepturi non dolorem reprehenderit qui?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus esse qui,
            reprehenderit aliquid nesciunt ut. Doloremque porro, est dolor vero accusamus eligendi,
            ipsam harum excepturi non dolorem reprehenderit qui?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus esse qui,
            reprehenderit aliquid nesciunt ut. Doloremque porro, est dolor vero accusamus eligendi,
            ipsam harum excepturi non dolorem reprehenderit qui?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus esse qui,
            reprehenderit aliquid nesciunt ut. Doloremque porro, est dolor vero accusamus eligendi,
            ipsam harum excepturi non dolorem reprehenderit qui?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus esse qui,
            reprehenderit aliquid nesciunt ut. Doloremque porro, est dolor vero accusamus eligendi,
            ipsam harum excepturi non dolorem reprehenderit qui?
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

  & > div {
    width: 50%;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  & > div:nth-child(1) {
    margin-right: 1rem;
  }

  & > div:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
