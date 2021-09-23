import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Workflow() {
  return (
    <MainContainer>
      <SectionTitle>The Process</SectionTitle>

      <ImageContainer>
        <Image
          src={'/images/workflow.jpg'}
          layout="responsive"
          width={860}
          height={460}
          quality={90}
        />
      </ImageContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: white;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: -2px;
  padding: 2rem 0 0.5rem;
  margin: 0;
`;

const ImageContainer = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;
