import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { darken, lighten } from 'polished';

interface JobTicketsCardProps {
  job: any;
}

export default function JobTicketsCard({ job }: JobTicketsCardProps) {
  const router = useRouter();
  const { title, hunterName, avatar, description } = job;

  return (
    <div>
      <Card>
        <div className="card-main">
          <div className="card-header">
            <Image src={avatar} alt="Influencer" width={50} height={50} quality={50} />
            <hr className="card-header-hr" />
          </div>

          <div className="card-title-area">
            <h4>{hunterName}</h4>
            <h3>{title}</h3>
          </div>

          <p className="card-description">{description}</p>
        </div>

        <div className="card-footer">
          <Button
            onClick={() => router.push('/dashboard/job-tickets/1')}
            variant="white"
            placement="left"
          >
            View Job
          </Button>
          <Button onClick={() => alert('Coming Soon')} variant="black" placement="right">
            Contact Hunter
          </Button>
        </div>
      </Card>
    </div>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 1rem;
  background: #fff;
  height: 100%;

  & .card-header {
    display: flex;
    align-items: center;

    & .card-header-hr {
      border-color: rgba(155, 155, 155, 0.1);
      height: 1px;
      width: 100%;
    }

    img {
      border-radius: 50px;
      border: 1px solid gainsboro !important;
    }
  }

  & .card-title-area {
    & h4 {
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 0;
    }

    & h3 {
      margin-top: 0.5rem;
    }
  }

  .card-description {
    font-size: 0.9rem;
  }

  .card-footer {
    display: flex;

    @media (max-width: 1500px) and (min-width: 1350px),
      (max-width: 1150px) and (min-width: 1100px),
      (max-width: 930px) and (min-width: 800px) {
      flex-wrap: wrap;
    }
  }
`;

const Button = styled.button<{ variant: 'black' | 'white'; placement: 'left' | 'right' }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) => (variant === 'black' ? theme.colors.dark : '#fff')};
  color: ${({ theme, variant }) => (variant === 'black' ? '#fff' : theme.colors.dark)};
  border: 0.5px solid
    ${({ theme, variant }) => (variant === 'black' ? '#fff' : lighten(0.5, theme.colors.dark))};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  margin: 0.5rem 0 0;
  margin: ${({ placement }) => (placement === 'left' ? '0.5rem 5px 0 0' : '0.5rem 0 0 5px')};
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'black' ? lighten(0.1, theme.colors.dark) : darken(0.15, '#fff')};
  }

  ${({ theme }) => theme.global.setFocus(theme.global.dark)}

  @media (max-width: 1500px) and (min-width: 1350px),
  (max-width: 1150px) and (min-width: 1100px),
  (max-width: 930px) and (min-width: 800px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
