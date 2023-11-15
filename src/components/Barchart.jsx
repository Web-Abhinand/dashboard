import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function BasicBars() {

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['SM1', 'SM2', 'SM3'] }]}
      series={[{ data: [4000, 3000, 5000] }, { data: [1000, 6000, 3000] }, { data: [2000, 5000, 6000] }]}
      width={600}
      height={300}
    />
  );
}