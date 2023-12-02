// Sidebar.js
import React from 'react';
import { Box, Icon, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';


const Sidebar = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    //use this to make it mobile responsive
  return (
    console.log(windowWidth, windowHeight),
    <Box sx={{ width: "20%", height: '100vh', backgroundColor: '#353839', flexShrink: 0, padding:'16px' }}>
    {/**Icon and Product Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <BusinessIcon style={{ color: 'white', marginRight: '8px' }} />
      <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
        NetPeek-Network Monitoring 
      </Typography>
      </Box>

    {/**Other KPI's */}
    

    </Box>
  );
}

export default Sidebar;
