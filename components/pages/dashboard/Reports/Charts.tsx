import React from 'react';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Charts() {
  return (
    <MainContainer>
      <div>
        <h2 className="chart-title">Monthly Revenue</h2>
        <Bar options={options} data={data} />
      </div>
      <div>
        <h2 className="chart-title">Total Jobs Per Month</h2>
        <Bar options={options} data={data} />
      </div>
      <div>
        <h2 className="chart-title">New Customers</h2>
        <Bar options={options} data={data} />
      </div>
      <div>
        <h2 className="chart-title">Average Job Duration</h2>
        <Bar options={options} data={data} />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .chart-title {
    text-align: center;
    margin-bottom: -0.5rem;
  }
`;
