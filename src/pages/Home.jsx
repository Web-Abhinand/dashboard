import React from 'react'
import Navbar from '../components/Navbar';
import BasicPie from '../components/PieChart';
import BasicBars from '../components/BarChart';
import SimpleLineChart from '../components/LineChart';
import BarsDataset from '../components/Linechart2';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <>  
        <Navbar />
        <Sidebar />
        <BasicPie />
        <BasicBars />
        <SimpleLineChart />
        <BarsDataset />
    </>
  )
}

export default Home