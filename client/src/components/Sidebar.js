// Sidebar.js
import React from 'react';
import { Box, Icon, Typography, Card, CardContent, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import speedContext from '../context/speedContext';
import speedApi from '../api/speedApi';


const Sidebar = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    //use this to make it mobile responsive
    const { speed } = React.useContext(speedContext);

    const cardsData=[
    { title: 'Upload Speed', content: speed.uploadSpeed},
    { title: 'Download Speed', content: speed.downloadSpeed },
    { title: 'Session Data', content: speed.sessionData},
    { title: 'Nearest Server', content: speed.nearestServer },
    { title: 'Current ISP Provider', content: speed.currentISP },
    {title: 'Session Status', content: speed.sessionStatus},
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
