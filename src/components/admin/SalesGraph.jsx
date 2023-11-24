import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { sampleProducts } from '../../features/adminpage/productdata';

const SalesGraph = ({ product }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
        chartInstance.current.destroy();
      }


      // Map numeric month to corresponding name
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];
  
      const salesDataByMonth = sampleProducts.reduce((acc, product) => {
        const month = parseInt(product.date.split('-')[1]);
        const monthName = monthNames[month - 1];
        const existingEntry = acc.find(entry => entry.month === monthName);
  
        if (existingEntry) {
          existingEntry.salesData += parseFloat(product.salesData);
        } else {
          acc.push({ month: monthName, salesData: parseFloat(product.salesData) });
        }
  
        return acc;
      }, []);
  
      const months = salesDataByMonth.map(entry => entry.month);
      const salesData = salesDataByMonth.map(entry => entry.salesData);


    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Total SalesData Each Month',
            data: salesData,
            backgroundColor: '#24527a',
            borderColor: '#24527a',
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
  }, [sampleProducts]);

  return <canvas ref={chartRef} style={{ height: '150px'}} />;
};

export default SalesGraph;
