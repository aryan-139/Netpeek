// Sidebar.js
import React from 'react';
import { Box, Icon, Typography, Card, CardContent, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';


const Sidebar = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    //use this to make it mobile responsive

    const cardsData=[
    { title: 'Upload Speed', content: '5.2 MBPS' },
    { title: 'Download Speed', content: '104.7 MBPS' },
    { title: 'Session Data', content: '450.7 MB' },
    { title: 'Nearest Server', content: 'Kolkata, India' },
    { title: 'Current ISP Provider', content: 'Bharti Airtel' },
    {title: 'Session Status', content:'Inactive'},
    ]

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
    {cardsData.map((card) => (
  <Card sx={{ backgroundColor: '#2D2F30', marginBottom: '16px' }} key={card.title}>
    <CardContent>
      <Typography variant="h6" component="h2" gutterBottom style={{ color: 'white' }}>
        {card.title}
      </Typography>
      {card.title === 'Session Status' ? (
  card.content === 'Active' ? (
    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
      {card.content}
    </Button>
  ) : (
    <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>
      {card.content}
    </Button>
  )
) : (
  <Typography variant="h4" component="h2" gutterBottom style={{ color: 'white' }}>
    {card.content}
  </Typography>
)}

    </CardContent>
  </Card>
))}

    {/**Other KPI's */}
    

    </Box>
  );
}

export default Sidebar;
