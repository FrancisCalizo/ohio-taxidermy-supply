import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function JobCard() {
  return (
    <div>
      <Card>
        <div className="card-header">
          <Image
            src="/images/default-avatar.png"
            alt="Influencer"
            width={50}
            height={50}
            quality={50}
          />
          <hr className="header-hr" />
        </div>

        <div className="title-area">
          <h4>Ryan Johnson</h4>
          <h3>Rotated Half Aggressive Moose </h3>
        </div>

        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius
          quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod
          architecto sed corrupti?
        </p>
      </Card>
    </div>
  );
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 1rem;
  background: #fff;

  & .card-header {
    display: flex;
    align-items: center;

    & .header-hr {
      border-color: rgba(155, 155, 155, 0.1);
      height: 1px;
      width: 100%;
    }

    img {
      border-radius: 50px;
      border: 1px solid gainsboro !important;
    }
  }

  & .title-area {
    & h4 {
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 0;
    }

    & h3 {
      margin-top: 0.5rem;
    }
  }

  .description {
    font-size: 0.9rem;
  }
`;
