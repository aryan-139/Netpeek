// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SpeedProvider from './context/speedProvider';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
    <SpeedProvider>
      <Sidebar />
      <Dashboard />
    </SpeedProvider>
    </div>
  );
}

export default App;
