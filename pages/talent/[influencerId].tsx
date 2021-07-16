import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
  faGooglePlusSquare,
  faPinterest,
  faPiedPiperSquare,
  faTiktok,
  faVine,
  faBitcoin,
} from '@fortawesome/free-brands-svg-icons';

import SiteLayout from 'components/layout/SiteLayout';

export default function SingleInfluencer() {
  return (
    <MainContainer>
      <TopBanner>
        <div className="banner-left">
          <Image
            src={`/images/talent-profile.jpg`}
            alt="profile"
            width={280}
            height={280}
            quality={90}
          />
          <div>
            <h3>Gwen Stacy</h3>
            <p className="headline">Some Headline</p>
            <p className="categories">Drama, Music, Travel</p>
            <p className="location">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ fontSize: 24, color: '#e74c3c', marginRight: '1rem' }}
              />
              Rome, Italy
            </p>
          </div>
        </div>
        <div className="banner-right"></div>
      </TopBanner>

      <MiddleContainer>
        <h2>Summary</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at delectus sint
          voluptatum voluptates quia laudantium ab deleniti impedit doloremque! Enim ratione, hic
          quidem aspernatur molestiae laudantium repudiandae harum! Assumenda reiciendis quaerat
          illum laboriosam quos veritatis voluptas fugiat a ex?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolorem eos
          repellendus earum fugit distinctio at corporis est quae, saepe nostrum quos quis totam
          veniam perferendis necessitatibus explicabo impedit illum quisquam pariatur velit? Saepe,
          maiores. Officiis tempore, libero nesciunt autem perspiciatis officia, magnam aperiam eos
          facere exercitationem corrupti similique odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere placeat nesciunt delectus obcaecati eum porro, corrupti animi
          corporis sit? Corrupti unde facilis ad amet explicabo voluptatibus voluptatem atque vitae
          quo.
        </p>

        <h2>Social</h2>
        <div className="social-container">
          {TEMP_SOCIAL_DATA.map((social, key) => (
            <SocialCard key={key}>
              <div>
                <FontAwesomeIcon
                  icon={social.icon}
                  style={{ fontSize: 36, color: social.color, marginRight: '1rem' }}
                />
                <p>{social.handle}</p>
              </div>
              <div>
                <button>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ fontSize: 24, color: '#AEB5D8' }}
                  />
                </button>
              </div>
            </SocialCard>
          ))}
        </div>
      </MiddleContainer>
    </MainContainer>
  );
}

const SocialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  margin: 0 1rem 1rem 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

const TopBanner = styled.div`
  display: flex;
  /* justify-content: center; */
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 2rem;

  .banner-left {
    display: flex;
    padding: 0 1rem;
    align-items: center;

    img {
      border: 2px solid ${(props) => props.theme.colors.pink} !important;
      border-radius: 200px;
    }

    > div {
      margin-left: 2rem;

      h3 {
        font-size: 2rem;
        margin-bottom: 0;
        color: ${(props) => props.theme.colors.darkGray};
      }

      .headline {
        font-style: italic;
        margin: 0.75rem 0;
      }

      .categories {
        margin: 0.75rem 0;
      }

      .location {
        font-size: 1.25rem;
      }
    }
  }
`;

const MiddleContainer = styled.div`
  padding: 2rem;

  p {
    color: ${(props) => props.theme.colors.gray};
  }

  .social-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MainContainer = styled.div``;

SingleInfluencer.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;

const TEMP_SOCIAL_DATA = [
  {
    icon: faFacebookSquare,
    color: '#1877f2',
    handle: 'Gwen Stacy',
  },
  {
    icon: faTwitter,
    color: '#1da1f2',
    handle: '@gwenstacy',
  },
  {
    icon: faYoutubeSquare,
    color: '#ff0000',
    handle: 'Gwen Films',
  },
  {
    icon: faInstagram,
    color: '#c32aa3',
    handle: '@theRealGwenStacy',
  },
  {
    icon: faPinterest,
    color: '#bd081c',
    handle: 'Gwen Stacy',
  },
  {
    icon: faLinkedin,
    color: '#0a66c2',
    handle: 'Gwen Stacy',
  },
  {
    icon: faGooglePlusSquare,
    color: '#db4437',
    handle: 'Gwen Stacy',
  },
  {
    icon: faPiedPiperSquare,
    color: '#25d366',
    handle: 'Gwen Stacy',
  },
  {
    icon: faTiktok,
    color: '#69c9d0',
    handle: '@GwenStacyTokz',
  },
  {
    icon: faVine,
    color: '#00b489',
    handle: '@GwenStacyTokz',
  },
  {
    icon: faBitcoin,
    color: '#fbbc05',
    handle: '@CryptoStacy',
  },
];
