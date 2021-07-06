import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <FooterTop>
          <div>
            <h2>CastMeApp</h2>
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
            Want influencer marketing updates straight to your inbox? Subscribe to our weekly
            newsletter. You&apos;ll also be the first to know about our latest events!
          </p>

          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </div>
        </SubscribeContainer>
      </MainContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
`;

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  .contacts-list {
    > p {
      margin: 0;
    }
  }
`;

const FooterTop = styled.div`
  display: flex;

  > div {
    flex: 1 1 0;
  }

  h2 {
    font-family: Shadows Into Light;
    font-size: 3.5rem;
    margin: 0;
  }

  .social {
    display: flex;
    justify-content: space-between;
    max-width: 200px;

    > button {
      border: none;
      background: transparent;
      padding: 0;
    }
  }
`;

const SubscribeContainer = styled.div`
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
`;
