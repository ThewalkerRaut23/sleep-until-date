import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SleepCalculator from './SleepCalculator';

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Card sx={{ maxWidth: 400, marginLeft: 'auto' }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Dream Countdown with Frida 1.0
          </Typography>
          <SleepCalculator />
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
