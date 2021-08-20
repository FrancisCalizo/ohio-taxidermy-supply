import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import styled from 'styled-components';
import { createClient } from 'contentful';

import { darken } from 'polished';

export default function TalentCards() {
  const [randomProfilePictures, setRandomProfilePictures] = useState([]);

  // TODO: Remove Later. Temporary pictures loaded for profiles
  useEffect(() => {
    (async function fetchRandomImages() {
      const res = await axios.get('https://randomuser.me/api/?inc=picture&results=52');

      setRandomProfilePictures(res.data.results.map((res: any) => res.picture.medium));
    })();

    fetchTalent();
  }, []);

  async function fetchTalent() {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
    });

    const res = await client.getEntries({ content_type: 'talent' });
  }

  return (
    <GridContainer>
      {randomProfilePictures.map((_, key) => (
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
          <CardContent>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta iure rerum accusamus
              adipisci et nesciunt voluptates, laudantium quam corrupti iste.
            </p>

            <div className="statistics">
              <div>
                <h3>220K</h3>
                <p>Followers</p>
              </div>
              <div>
                <h3>2.2%</h3>
                <p>Engagement</p>
              </div>
            </div>

            <div className="badges">
              {['Comedy', 'Travel', 'Skits'].map((ind: string, key) => (
                <Industrybadge key={key}>{ind}</Industrybadge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/talent/${key}`}>
              <ViewProfileButton>View Profile</ViewProfileButton>
            </Link>
            <ContactButton>Contact</ContactButton>
          </CardFooter>
        </TalentCard>
      ))}
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TalentCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: 0.75rem;

  img {
    border-radius: 50px;
  }

  .handle {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Industrybadge = styled.div`
  background: ${(props) => props.theme.colors.green};
  display: inline-block;
  color: ${(props) => darken(0.6, props.theme.colors.green)};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  text-align: center;
  text-transform: capitalize;
  margin: 0.25rem 0.5rem 0.25rem 0;
  font-size: 12px;
`;

const CardContent = styled.div`
  .description {
    font-size: 0.75rem;
    margin: 0;
  }

  .statistics {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 1rem 0;

    & h3 {
      margin: 0;
    }

    & p {
      font-size: 0.75rem;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .badges {
    margin: 0.5rem 0 0.25rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
`;

const ViewProfileButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.pink};
  color: white;
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

  @media (max-width: 1050px) {
    font-size: calc(10px + (14 - 10) * ((100vw - 600px) / (1050 - 600)));
  }

  @media (max-width: 810px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ContactButton = styled(ViewProfileButton)`
  background: #fff;
  color: ${(props) => props.theme.colors.gray};
  border: 1px solid ${(props) => props.theme.colors.gray};

  &:hover {
    background: ${darken(0.1, '#fff')};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.gray)};
`;
