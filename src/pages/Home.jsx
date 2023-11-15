import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import BasicPie from '../components/PieChart';
import BasicBars from '../components/BarChart';
import SimpleLineChart from '../components/LineChart';
import BarsDataset from '../components/Linechart2';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
        <main style={{display:'flex',flexWrap:'wrap',flex:'1 1 600px',width:'100%',margin:'0 auto',justifyContent:'space-around',paddingTop:'1rem'}}>
        <div>
          <BasicPie />
        </div>
        <div>
          <BasicBars />
        </div>
        <div>
          <SimpleLineChart />
        </div>
        <div>
          <BarsDataset />
        </div>
      </main>
    </>
  )
}

export default Home