import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import moment from 'moment'; // or import { differenceInDays } from 'date-fns';

const SleepCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const calculateSleeps = () => {
    if (!selectedDate) return null;

    const currentDate = moment();
    const chosenDate = moment(selectedDate);
    const difference = chosenDate.diff(currentDate, 'days');

    return difference;
  };

  const sleeps = calculateSleeps();
  const minDate = moment().format('YYYY-MM-DD')

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" gutterBottom>
        Select Date :
      </Typography>
      <TextField
        id="date-picker"
        label=""
        type="date"
        defaultValue={selectedDate}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: minDate, 
        }}
        style={{ marginBottom: '20px' }}
      />
      {sleeps !== null && (
        <Typography variant="body1">
          {sleeps} {sleeps === 1 ? 'sleep' : 'sleeps'} until {moment(selectedDate).format('MMMM Do, YYYY')}
        </Typography>
      )}
    </div>
  );
};

export default SleepCalculator;
