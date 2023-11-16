import React, { useState } from 'react';
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Typography, Button } from '@mui/material';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sleeps, setSleeps] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateSleeps = () => {
    if (selectedDate) {
      const today = new Date();
      const differenceInTime = selectedDate.getTime() - today.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setSleeps(differenceInDays);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <MuiDatePicker
          label="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" color="primary" onClick={calculateSleeps}>
          Calculate Sleeps
        </Button>
        {sleeps !== null && (
          <Typography variant="body1">
            {`Number of Sleeps until selected date: ${sleeps}`}
          </Typography>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default DatePicker;
