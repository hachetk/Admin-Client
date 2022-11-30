import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


 function BarProductividad() {
    
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Productividad de Lechuga',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Producido',
        data: [10,20,30,40,50],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Perdida',
        data: [10,20,30,40,50],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarProductividad