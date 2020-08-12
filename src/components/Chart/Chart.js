import React from 'react';
import { Line } from 'react-chartjs-2';
import classes from './Chart.module.css'

const Chart = (props) => {
  const data = {
    labels: props.data.map(itm => {
      if(itm.loc.length > 15){return itm.loc.slice(0,12) + '...'}
      else { return itm.loc }
    }),
    datasets: [
      {
        label: 'Active',
        data: props.data.map(itm => itm.totalConfirmed),
        borderColor: ['rgba(0, 0, 255, 0.5)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(0, 0, 255, 0.6)',
        pointBorderColor: 'rgba(0, 0, 255, 0.6)',
      },
      {
        label: 'Inactive',
        data: props.data.map(itm => itm.discharged),
        borderColor: ['rgba(0, 255, 0, 0.5)'],
        backgroundColor: ['hsla(120,100%,50%,0.2)'],
        pointBackgroundColor: 'rgba(0, 255, 0, 0.6)',
        pointBorderColor: 'rgba(0, 255, 0, 0.6)',
      },
      {
        label: 'Deaths',
        data: props.data.map(itm => itm.deaths),
        borderColor: ['rgba(255,0,0,0.5)'],
        backgroundColor: ['rgba(255,0,0,0.5)'],
        pointBackgroundColor: 'rgba(255,0,0,0.6)',
        pointBorderColor: 'rgba(255,0,0,0.6)',
      }
    ]
  }
  return(
      <div className={classes.Chart}>
        <Line data={data}/>
      </div>
    );
};

export default Chart
