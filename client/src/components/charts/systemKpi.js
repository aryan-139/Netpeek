import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import speedContext from '../../context/speedContext';

const SystemKpi = () => {
  const { speed } = React.useContext(speedContext);

  const data = {
    "Total Page Hits": speed.uploadSpeedInstance.length,
    "Total Sessions": "5",
    "Total Users": "3",
    "Total Errors": "0",
    "Total Uploads": "1",
    "Total Downloads": "2", 
    "Total Data Usage": "1.2 GB",
    "Total Time Spent": "5 min",
    "Total Usage": "1.2 GB",
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between',flexDirection: 'row', flexWrap: 'wrap', gap: '12px' }}>
    {Object.entries(data).map(([key, value], index) => (
      <Card key={index} sx={{ borderColor: 'white', width: '600px', flex:'1 0 25%', marginBottom:'2px', height:"fit-content" }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {key}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
  );
};

export default SystemKpi;
