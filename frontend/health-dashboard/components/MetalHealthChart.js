import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Systolic',
      data: [120, 130, 125, 140, 135, 130, 125],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Diastolic',
      data: [80, 85, 83, 90, 87, 85, 82],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }
  ]
};

function MetalHealthChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Blood Pressure Trends
        </Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
}

export default BloodPressureChart;
