import React from 'react';
import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobsBoardCard from 'components/pages/dashboard/JobsBoard/JobsBoardCard';

export default function JobsBoard() {
  return (
    <DashboardLayout>
      <TopContainer>
        <JobCardsContainer>
          {FAKE_JOBS.map((job, key) => (
            <JobsBoardCard job={job} key={key} />
          ))}
        </JobCardsContainer>
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;

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
  {
    title: 'Megan Stevens',
    hunterName: 'Rotated Half Aggressive Goat',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti? quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti.',
  },
  {
    title: 'Ryan Johnson',
    hunterName: 'Rotated Half Aggressive Moose Blah Blah',
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
  {
    title: 'Richie Richards',
    hunterName: 'Rotated Full Stallion',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
  {
    title: 'Richie Richards',
    hunterName: 'Rotated Full Stallion',
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
    title: 'Mark Smithers',
    hunterName: 'Prancing Quarter Aggressive Ram',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
  {
    title: 'Ryan Johnson',
    hunterName: 'Rotated Half Aggressive Moose Blah Blah',
    avatar: '/images/default-avatar.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, natus molestias! Eius quia culpa tenetur explicabo doloribus hic harum quisquam dolorum, mollitia aut quod architecto sed corrupti?',
  },
];
