import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect,useState } from 'react';
import axios from 'axios';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
];

export default function SimpleLineChart() {

  useEffect(() => {
    fetchData();
  }, []);

  const [dataa, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const series = dataa.map((item) => ({
    data: pData, // Assuming each item has a 'data' property
    label: item.name, // Assuming each item has a 'label' property
  }));

  dataa.map((item) => {
    console.log(item.name);
  });

  return (
    <LineChart
      width={600}
      height={300}
      // series={[
      //   { data: pData, label: 'SM1' },
      //   { data: uData, label: 'SM2' },
      // ]}
      series={series}
        
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}