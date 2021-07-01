import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';

export default function index() {
  return (
    <FlexContainer>
      <div>
        <Image
          src={'/images/contact.jpg'}
          alt="about-image"
          layout="responsive"
          width={600}
          height={450}
          quality={50}
        />
      </div>
      <div>
        <FormContainer>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Title>Let's get in touch!</Title>
          <div className="name-container">
            <Input placeholder="First Name*" />
            <Input placeholder="Last Name" />
          </div>
          <Input placeholder="Email Address*" />
          <Input placeholder="Company*" />
          <Input placeholder="Phone Number*" />
          <Input placeholder="Country" />
          <TextArea placeholder="Message*" rows={5} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SaveButton>Submit</SaveButton>
          </div>
        </FormContainer>
      </div>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: ${(props) => props.theme.colors.gray};
  background: #f2869b;
  color: white;
  height: 100vh;

  & > div:nth-child(1) {
    margin-right: 1rem;
    width: 60%;

    @media (max-width: 1200px) {
      width: 50%;
    }

    @media (max-width: 960px) {
      width: 100%;
      margin: 1rem 1rem 2rem;
    }
  }

  & > div:nth-child(2) {
    margin-left: 1rem;
    width: 40%;
    margin-right: 2rem;

    @media (max-width: 1200px) {
      width: 50%;
    }

    @media (max-width: 960px) {
      width: 100%;
      margin-bottom: 2rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Input = styled.input`
  display: block;
  font-size: ${(props) => props.theme.input.fontSize};
  padding: ${(props) => props.theme.input.padding};
  margin: 1rem auto;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const TextArea = styled.textarea<{ rows: number }>`
  width: 100%;
  display: block;
  font-size: ${(props) => props.theme.input.fontSize};
  padding: ${(props) => props.theme.input.padding};
  margin: 1rem auto;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const FormContainer = styled.div`
  background: #fff;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.3);
  padding: 2rem;

  .name-container {
    display: flex;

    & > input:nth-child(1) {
      margin-right: 0.5rem;
      margin-bottom: 0;
    }

    & > input:nth-child(2) {
      margin-left: 0.5rem;
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0.5rem 0 1.5rem;
  color: #000;
  font-family: Shadows Into Light;
`;

const SaveButton = styled.button`
  display: block;
  background: #f2869b;
  color: white;
  border: none;
  padding: 0.75rem 3rem;
  border-radius: 50px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: #f2869b;

  &:hover {
    background: ${darken(0.1, '#f2869b')};
  }
`;

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
