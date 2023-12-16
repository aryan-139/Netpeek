import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Box } from '@mui/system';

const SessionGrid = () => {
    const columns = [
        {
          field: 'id',
          headerName: 'ID',
          width: 90,
        },
        {
          field: 'sessionId',
          headerName: 'Session ID',
          width: 180,
          editable: true,
        },
        {
          field: 'DataUsage',
          headerName: 'Data Usage',
          width: 160,
          editable: true,
        },
        {
          field: 'duration',
          headerName: 'Duration',
          type: 'number',
          width: 160,
          editable: true,
        },
      ];
    

  const rows = [
        { id: 1, sessionId: 'ABC12345', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 2, sessionId: 'DEF67890', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 3, sessionId: 'GHI12345', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 4, sessionId: 'JKL67890', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 5, sessionId: 'MNO12345', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 6, sessionId: 'PQR67890', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 7, sessionId: 'STU12345', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 8, sessionId: 'VWX67890', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },
        { id: 9, sessionId: 'YZA12345', DataUsage: Math.random() * 1000 + 100, duration: Math.floor(Math.random() * 60) + 1 },      
  ];

  return (
    <Box sx={{ height: '400px', width: '600px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5]}
        style={{ color: 'white' }}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default SessionGrid;
