import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

export default function Charts() {
  return (
    <MainContainer>
      <div>
        <h2 className="chart-title">Monthly Revenue</h2>
        <Bar
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                backgroundColor: [
                  'rgba(99, 179, 237,0.4)',
                  // 'rgba(241, 129, 129,0.4)',
                  // 'rgba(104, 211, 144,0.4)',
                ],
                borderColor: [
                  'rgba(99, 179, 237,0.9)',
                  // 'rgba(241, 129, 129,0.9)',
                  // 'rgba(104, 211, 144,0.9)',
                ],
                hoverBackgroundColor: [
                  'rgba(99, 179, 237,0.7)',
                  // 'rgba(241, 129, 129,0.7)',
                  // 'rgba(104, 211, 144,0.7)',
                ],
                hoverBorderColor: [
                  'rgba(99, 179, 237, 1)',
                  // 'rgba(241, 129, 129, 1)',
                  // 'rgba(104, 211, 144, 1)',
                ],
                data: [80000, 20000, 30000, 19000, 72000, 22304],
                borderWidth: 3,
                barThickness: 'flex',
              },
            ],
          }}
          legend={{ display: false }}
          options={{
            aspectRatio: 2,
            maintainAspectRatio: true,
            layout: {
              padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
              },
            },
            scales: {
              // @ts-ignore
              yAxes: [
                {
                  ticks: {
                    fontColor: 'white',
                  },
                },
              ],
              // @ts-ignore
              xAxes: [
                {
                  ticks: {
                    fontColor: 'white',
                    fontSize: 15,
                  },
                },
              ],
            },
            animation: {
              duration: 500,
              // easing: "easeInSine",
              // onComplete: function () {
              //   // @ts-ignore
              //   const chartInstance = this.chart,
              //     ctx = chartInstance?.ctx;

              //   ctx.font = '1rem Arial';
              //   ctx.fillStyle = 'white';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';

              //   this.data.datasets.forEach(function (dataset, i) {
              //     const meta = chartInstance.controller.getDatasetMeta(i);
              //     meta.data.forEach(function (bar: any, index: any) {
              //       // @ts-ignore
              //       if (dataset.data[index] > 0) {
              //         const data = dataset.data[index];
              //         // @ts-ignore
              //         ctx.fillText(data.toLocaleString(), bar._model.x, bar._model.y);
              //       } else {
              //         const data = 0;

              //         ctx.fillText(data, bar._model.x, bar._model.y);
              //       }
              //     });
              //   });
              // },
              // onProgress: function () {
              //   // @ts-ignore
              //   const chartInstance = this.chart,
              //     ctx = chartInstance?.ctx;

              //   ctx.font = '1rem Arial';
              //   ctx.fillStyle = 'white';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';

              //   this.data.datasets.forEach(function (dataset, i) {
              //     const meta = chartInstance.controller.getDatasetMeta(i);
              //     meta.data.forEach(function (bar: any, index: any) {
              //       // @ts-ignore
              //       if (dataset.data[index] > 0) {
              //         const data = dataset.data[index];
              //         // @ts-ignore
              //         ctx.fillText(data.toLocaleString(), bar._model.x, bar._model.y);
              //       } else {
              //         const data = 0;

              //         ctx.fillText(data, bar._model.x, bar._model.y);
              //       }
              //     });
              //   });
              // },
            },
          }}
        />
      </div>
      <div>
        <h2 className="chart-title">Total Jobs Per Month</h2>
        <Bar
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                backgroundColor: ['rgba(99, 179, 237,0.4)'],
                borderColor: ['rgba(99, 179, 237,0.9)'],
                hoverBackgroundColor: ['rgba(99, 179, 237,0.7)'],
                hoverBorderColor: ['rgba(99, 179, 237, 1)'],
                data: [10, 7, 3, 19, 10, 34],
                borderWidth: 3,
                barThickness: 'flex',
              },
            ],
          }}
          legend={{ display: false }}
          options={{
            aspectRatio: 2,
            maintainAspectRatio: true,
            layout: {
              padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
              },
            },
            scales: {
              // @ts-ignore
              yAxes: [
                {
                  ticks: {
                    fontColor: 'white',
                  },
                },
              ],
              // @ts-ignore
              xAxes: [
                {
                  ticks: {
                    fontColor: 'white',
                    fontSize: 15,
                  },
                },
              ],
            },
            animation: {
              duration: 500,
              // easing: "easeInSine",
              // onComplete: function () {
              //   // @ts-ignore
              //   const chartInstance = this.chart,
              //     ctx = chartInstance?.ctx;

              //   ctx.font = '1rem Arial';
              //   ctx.fillStyle = 'white';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';

              //   this.data.datasets.forEach(function (dataset, i) {
              //     const meta = chartInstance.controller.getDatasetMeta(i);
              //     meta.data.forEach(function (bar: any, index: any) {
              //       // @ts-ignore
              //       if (dataset.data[index] > 0) {
              //         const data = dataset.data[index];
              //         // @ts-ignore
              //         ctx.fillText(data.toLocaleString(), bar._model.x, bar._model.y);
              //       } else {
              //         const data = 0;

              //         ctx.fillText(data, bar._model.x, bar._model.y);
              //       }
              //     });
              //   });
              // },
              // onProgress: function () {
              //   // @ts-ignore
              //   const chartInstance = this.chart,
              //     ctx = chartInstance?.ctx;

              //   ctx.font = '1rem Arial';
              //   ctx.fillStyle = 'white';
              //   ctx.textAlign = 'center';
              //   ctx.textBaseline = 'bottom';

              //   this.data.datasets.forEach(function (dataset, i) {
              //     const meta = chartInstance.controller.getDatasetMeta(i);
              //     meta.data.forEach(function (bar: any, index: any) {
              //       // @ts-ignore
              //       if (dataset.data[index] > 0) {
              //         const data = dataset.data[index];
              //         // @ts-ignore
              //         ctx.fillText(data.toLocaleString(), bar._model.x, bar._model.y);
              //       } else {
              //         const data = 0;

              //         ctx.fillText(data, bar._model.x, bar._model.y);
              //       }
              //     });
              //   });
              // },
            },
          }}
        />
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
