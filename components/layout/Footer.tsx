import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { footerHeaders, footerRoutes } from 'components/utils/routes';

export default function Footer() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <FooterTop>
          <div>
            <h2>
              <span>Cast</span>
              <span>Me</span>
              <span>App</span>
            </h2>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social">
              <button>
                <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 30 }} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30 }} />
              </button>
              <button>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />
              </button>
              <button>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 30 }} />
              </button>
            </div>
          </div>
        </FooterTop>

        <div className="contacts-list">
          <p>General: contact@castmeapp.com</p>
          <p>Jobs: job@castmeapp.com</p>
          <p>Press: press@castmeapp.com</p>
        </div>

        <SubscribeContainer>
          <p>
            Want marketing updates straight to your inbox? Subscribe to our weekly newsletter.
            You&apos;ll also be the first to know about our latest events!
          </p>

          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </div>
        </SubscribeContainer>

        <RowLinks>
          {footerRoutes.map((column, key) => (
            <div key={key}>
              <h4>{footerHeaders[key]}</h4>
              <ul>
                {column.map((route, idx) => (
                  <li key={idx}>
                    <Link href={route.path}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RowLinks>

        <FooterFooter>
          <hr />
          <p>@CastMeApp 2021 - All rights Reserved.</p>
        </FooterFooter>
      </MainContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  margin-top: 3rem;
`;

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  color: white;

  .contacts-list {
    > p {
      margin: 0;

      @media (max-width: 800px) {
        text-align: center;
      }
    }

    @media (max-width: 800px) {
      margin-top: 2rem;
    }
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    flex: 1 1 0;
  }

  h3 {
    color: black;
    font-size: 1.5rem;
  }

  h2 {
    font-family: Shadows Into Light;
    font-size: 3.5rem;
    margin: 0;
    color: white;

    span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }

    span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }

    @media (max-width: 800px) {
      font-size: 3.5rem;
      text-align: center;
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
    max-width: 200px;

    > button {
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
    }

    @media (max-width: 800px) {
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SubscribeContainer = styled.div`
  p {
    margin: 2rem 0 0;
    font-size: 0.9rem;

    @media (max-width: 800px) {
      text-align: center;
    }
  }

  .form-row {
    display: flex;
    justify-content: space-between;

    > input {
      display: block;
      font-size: ${(props) => props.theme.input.fontSize};
      padding: ${(props) => props.theme.input.padding};
      margin: 1rem 2rem 1rem 0;
      width: 100%;
      border: 1px solid lightgray;
      border-radius: 4px;

      ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}

      @media (max-width: 800px) {
        margin: 0.5rem 0;
      }
    }

    @media (max-width: 800px) {
      flex-wrap: wrap;
      margin-top: 1rem;
    }
  }
`;

const SubscribeButton = styled.button`
  display: block;
  background: ${(props) => props.theme.colors.teal};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  width: 300px;

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.teal)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.teal)}

  @media (max-width: 800px) {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
  }
`;

const RowLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0.5rem;

  h4 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.pink};
  }

  ul {
    display: block;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    & > div {
      justify-self: center;
      text-align: center;
    }
  }
`;

const FooterFooter = styled.div`
  hr {
    margin: 1.5rem 0;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 0.75rem;
  }
`;
