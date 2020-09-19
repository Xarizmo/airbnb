import React, { useState } from 'react';
import './Search.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';

// DATE PICKER COMPONENT
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  
  return (
    <div className='search'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input
        type="number"
        min={0}
        defaultValue={2}
      />
      <Button>
        Search AirBnB
      </Button>
    </div>
  );
}

export default Search;