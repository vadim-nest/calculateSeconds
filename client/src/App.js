import './App.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculateDifference } from './utils/calculateDifference';

function App() {
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [difference, setDifference] = useState();

  const datePickerProps = {
    dateFormat: 'dd/MM/yyyy - hh:mm',
    timeInputLabel: 'Time:',
    showMonthDropdown: true,
    showYearDropdown: true,
    showTimeInput: true,
    dropdownMode: 'select',
    fixedHeight: true,
    form: 'external-form',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await calculateDifference(startDate, endDate);
    setDifference(data);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {difference ? (
          <p>The time difference is {difference} seconds.</p>
        ) : (
          <p>Enter the dates to find the time difference!</p>
        )}
        <form className='select-box' onSubmit={handleSubmit}>
          <div className='left-select'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              {...datePickerProps}
            />
          </div>
          <div className='right-select'>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              {...datePickerProps}
            />
          </div>
          <input type='submit' value='Calculate' />
        </form>
      </header>
    </div>
  );
}

export default App;
