import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function Charts() {
  return (
    <MainContainer>
      <div>
        <h2 className="chart-title">Monthly Revenue</h2>
        <Bar
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(99, 179, 237,0.5)',
              },
            ],
          }}
        />
      </div>

      <div>
        <h2 className="chart-title">Total Jobs Per Month</h2>
        <Line
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
          }}
          data={{
            labels: labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }}
        />
      </div>
      <div>
        <h2 className="chart-title">New Customers</h2>
        <Bar
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(255,114,33, .5)',
              },
            ],
          }}
        />
      </div>

      <div>
        <h2 className="chart-title">Average Job Duration</h2>
        <Bar
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(104, 211, 144,0.5)',
              },
            ],
          }}
        />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  /* TODO: Having issue with making the charts responsive. 
  Look into both react-chartjs and chart.js github issues 
  to resolve. Resize works on width expansion, but not shrink */
  /* grid-auto-flow: column; */
  /* grid-auto-columns: 50%; */

  .chart-title {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;
