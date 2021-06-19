import React from 'react';
import styled from 'styled-components';

export default function Content() {
  return (
    <ContentContainer>
      <h1>This is some content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae sit adipisci sunt
        veritatis accusamus ratione magnam rem aliquam odio dolorem nihil in, ab obcaecati
        accusantium consectetur quisquam cupiditate sequi blanditiis, error eligendi? Aut facere
        sint ab praesentium nihil, qui architecto beatae ipsa sunt quae mollitia sapiente asperiores
        accusantium recusandae.
      </p>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  @media (min-width: 769px) {
    margin-left: 260px;
  }
`;
