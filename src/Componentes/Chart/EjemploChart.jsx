import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import UseUsuarios from '../../Hooks/UseUsuarios';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function EjemploChart(props) {
    const { sensores } = UseUsuarios();
    console.log(sensores);
    const optimo = 450;

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
         animation: false,
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Dioxido de Carbono (PPM)',
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',

          },
        //   y1: {
        //     type: 'linear',
        //     display: true,
        //     position: 'right',
        //     grid: {
        //       drawOnChartArea: false,
        //     },
        //   },
        },
      };
      
    

  return <Line options={options} data={{
        labels: sensores.map(sen => sen.created_at.split('T')[1]),
        datasets: [
            {
            label: 'Real',
            data: sensores.map(sen => sen.ppm_gas),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
            
            },
            {
                label: 'Optimo',
                data: sensores.map( label => (optimo)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                radius: 0,
                yAxisID: 'y',
            }

    ]

  }} />;
}
export default EjemploChart

