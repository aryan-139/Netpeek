import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import SessionGrid from './charts/sessionGrid';
import speedContext from '../context/speedContext';

import Chart from 'chart.js/auto';
import axiosApi from '../utils/axiosApi';

const Dashboard = () => {

  const uploadData = [1.3, 19.5, 0, 5.9, 2];
  const downloadData = [100.2, 65.3,120.0, 45.9, 92.8];
  const { setSpeed, speed } = React.useContext(speedContext);
  //temporary
  const totalPageHits=124;
  const[counter, setCounter]=React.useState(0);
  const[progress, setProgress]=React.useState(true);
  useEffect(() => {
    const storedCounter = localStorage.getItem('pageCounter');
    if (storedCounter) {
      setCounter(parseInt(storedCounter, 10));
    }
    setCounter((prevCounter) => prevCounter + 1);
    localStorage.setItem('pageCounter', counter.toString());
  }, []); 

  //test
  const makeSpeedRequest = async () => {
    try {
      const response = await fetch('http://localhost:8001/speed');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const speedData = await response.json();
      setSpeed(speedData);
      console.log('Speed data:', speedData);
      
      // Now you can do something with the speed data, like updating your state or UI.
    } catch (error) {
      console.error('Error making speed request:', error);
    }
  };
  
    

  
  

  useEffect(() => {   
    const ctx = document.getElementById('uploadChart').getContext('2d');
    const dsc=document.getElementById('downloadChart').getContext('2d');
    const chartUploadData = {
      labels: ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4', 'Instance 5'],
      datasets: [{
        label: 'Incoming Upload Speed (in MBPS)',
        data: speed.uploadSpeedInstance,
        borderColor: 'rgba(104,138,255,255)',
        borderWidth: 2, 
        pointRadius: 5, 
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(104,138,255,255)',
        fill: true,
        backgroundColor: 'rgba(104,138,255,255)',
      }]
    };
    const chartDownloadData = {
      labels: ['Instance 1', 'Instance 2', 'Instance 3', 'Instance 4', 'Instance 5'],
      datasets: [{
        label: 'Incoming Download Speed (in MBPS)',
        data: speed.downloadSpeedInstance,
        borderColor: 'rgba(104,138,255,255)',
        borderWidth: 2, 
        pointRadius: 5, 
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(104,138,255,255)',
        fill: true,
        backgroundColor: 'rgba(104,138,255,255)',
      }]
    };
    const chartOptions = {
      scales: {
        x: {
          type: 'category',
          position: 'bottom',
          grid: {
            display: false,
            color: '#FFFFF7',
          },
          
        },
        y: {
          type: 'linear',
          position: 'left',
          grid: {
            display: false,
            color: '#FFFFF7'
          },
        }
      },
      elements: {
        line: {
          tension: 0, 
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white',
          }
        }
      },
    };

    const existingChart = new Chart(ctx, {
      type: 'line',
      data: chartUploadData,
      options: chartOptions
    });
    const existingChart2 = new Chart(dsc, {
      type: 'line',
      data: chartDownloadData,
      options: chartOptions
    });
    //clean up
    return () => {
      existingChart.destroy();
      existingChart2.destroy();
    };
  }, []);

  

  return (
    <Box sx={{ flex: 1, height: '100vh', backgroundColor: 'black', fontFamily: 'Inter' }}>
      <Box sx={{ width: '100%' }}>
     
    </Box>
      <Box sx={{ marginTop: "0.5%", justifyContent: "left", marginLeft: "2%", marginTop: "1%", display: "flex" }}>
        <Typography variant="h7" component="h2" gutterBottom sx={{ textDecoration: "underline" }}>
          Dashboard
        </Typography>

        <Typography variant="h7" component="h2" gutterBottom sx={{ marginLeft:"70%" }}>
          Total Page Hits: {counter}
        </Typography>
      </Box>

      <Box sx={{ color: "white" }}>
        <Box sx={{padding:"2%", display:"flex", gap:"2%"}}>
          <Typography>
          Hello, User! Hit the test button to check your internet speed.
          </Typography>
          <Button variant="outlined" color="primary" onClick={makeSpeedRequest}>
            Test Internet Speed
          </Button>

          <Button variant="outlined" color="error">
            Start a New Session
          </Button>

          <Button variant="outlined">
            End Session
          </Button>
        </Box>
       
        <Typography variant="h4" component="h2" gutterBottom sx={{ marginLeft: "2%" }}>
          Have an awesome day!
        </Typography>

        <Box sx={{height:"20%", width:"40%", display:"flex", marginLeft:"1.7%",padding:"1%", gap:"4%"}}>
        <canvas id="uploadChart" width="400" height="200"></canvas>
        <canvas id="downloadChart" width="400" height="200"></canvas>
        </Box>

         </Box>

        {/**Datagrid */}
        <Box sx={{ marginLeft: "2%", marginTop: "2%", width: "40%", height: "40%", display:"flex", gap:"10%" }}>
          <SessionGrid />
          <SessionGrid />
        </Box>

        
    </Box>
  );
}

export default Dashboard;
