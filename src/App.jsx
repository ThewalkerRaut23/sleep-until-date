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
      marginLeft= "10%"
    >
      <Card sx={{ maxWidth: 1000, marginLeft: 'auto' }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Dream Countdown with Frida
          </Typography>
          <SleepCalculator />
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
