import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import visitationData from './data';
import './VisitMatrixComponent.css'; // Import CSS for custom styling

const VisitMatrixComponent = () => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: visitationData.map((data) => data.date),
          datasets: [
            {
              label: 'Visitation Count',
              data: visitationData.map((data) => data.visitors),
              backgroundColor: 'rgba(75, 192, 192, 0.5)', // Adjusted transparency
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      // Cleanup: destroy the chart instance when the component is unmounted
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [visitationData]);

  return (
    <div className="visit-matrix-container">
      <h1>Visitation Matrix Table</h1>
      <canvas ref={canvasRef} id="chart" width="300" height="150"></canvas>
      <table className="visit-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Inmate</th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {visitationData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.inmate}</td>
              <td>{data.visitors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitMatrixComponent;

 