// Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flex: 1, height: '100vh', backgroundColor:'black', fontFamily:'Inter' }}>
      <Box sx={{marginTop:"0.5%", justifyContent:"left", marginLeft:"2%", marginTop:"1%", display:"flex"}}>
      <Typography variant="h7" component="h2" gutterBottom sx={{textDecoration:"underline"}}>
        Dashboard
      </Typography>
      </Box>
      {/**add the language to the right of the flexbox */}

      <Box sx={{color:"white"}}>
        <Typography variant="h3" component="h2" gutterBottom sx={{marginLeft:"2%", marginTop:"2%"}}>
          Hi, Aryan,
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{marginLeft:"2%"}}>
          Have an awesome day!
        </Typography>

      </Box>
     
    </Box>
  );
}

export default Dashboard;
