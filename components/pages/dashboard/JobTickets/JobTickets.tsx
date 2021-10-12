import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

import JobTicketsCard from 'components/pages/dashboard/JobTickets/JobTicketsCard';

export default function JobTickets() {
  return (
    <div>
      <TopContainer>
        <div className="button-container">
          <div className="button">
            <Button variant="white">
              <FontAwesomeIcon icon={faSearch} style={{ marginRight: '.5rem' }} />
              Add From Jobs Board
            </Button>
          </div>
          <div className="button">
            <Button>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }} />
              Create New Ticket
            </Button>
          </div>
        </div>
      </TopContainer>

      <JobCardsContainer>
        {FAKE_JOBS.map((job, key) => (
          <JobTicketsCard job={job} key={key} />
        ))}
      </JobCardsContainer>
    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;

  .button-container {
    display: flex;

    .button {
      width: 220px;
      margin-left: 1rem;
    }
  }
`;

const Button = styled.button<{ variant?: 'white' }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) => (variant === 'white' ? '#fff' : theme.colors.orange)};
  color: ${({ theme, variant }) => (variant === 'white' ? theme.colors.dark : '#fff')};
  border: 0.5px solid
    ${({ theme, variant }) => (variant === 'white' ? lighten(0.3, theme.colors.dark) : '#fff')};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'white' ? darken(0.1, '#fff') : darken(0.05, theme.colors.orange)};
  }

  ${({ theme }) => theme.global.setFocus(theme.colors.orange)}
`;

const JobCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem 1.5rem;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FAKE_JOBS = [
  {
    title: 'Ryan Johnson',
    hunterName: 'Rotated Half Aggressive Moose Blah Blah',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
  {
    title: 'Megan Stevens',
    hunterName: 'Rotated Half Aggressive Goat',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti? quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti.',
  },
  {
    title: 'Richie Richards',
    hunterName: 'Rotated Full Stallion',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
  {
    title: 'Mark Smithers',
    hunterName: 'Prancing Quarter Aggressive Ram',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
];
