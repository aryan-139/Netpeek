import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  //make the API call

  return (
    //the current purpose is very basic that is 
    <div className="App" style={{marginTop:"20px", textAlign:"center"}}>
      <Typography variant="h3" component="h2" gutterBottom>
        NetPeek-Network Monitoring Tool
      </Typography>
      
    </div>
  );
}

export default App;
