// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
