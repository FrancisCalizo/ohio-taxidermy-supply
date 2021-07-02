import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';

export default function Talent() {
  const [randomProfilePictures, setRandomProfilePictures] = useState([]);

  useEffect(() => {
    (async function fetchRandomImages() {
      const res = await axios.get('https://randomuser.me/api/?inc=picture&results=50');

      setRandomProfilePictures(res.data.results.map((res: any) => res.picture.medium));
    })();
  }, []);

  return (
    <MainContainer>
      <h1>The Talent</h1>
      <GridContainer>
        {randomProfilePictures.map((talent, key) => (
          <TalentCard key={key}>
            <CardHeader>
              <Image
                src={randomProfilePictures[key] || '/images/loading-still.png'}
                alt="Influencer"
                width={50}
                height={50}
                quality={50}
              />
              <h3 className="handle">@theGreatWon23</h3>
            </CardHeader>
          </TalentCard>
        ))}
      </GridContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const GridContainer = styled.div``;

const TalentCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 1rem;
`;

const CardHeader = styled.div`
  display: flex;

  img {
    border-radius: 50px;
  }

  .handle {
    font-size: 16px;
    margin-left: 10px;
  }
`;

Talent.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
