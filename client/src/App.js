import './App.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const datePickerProps = {
    dateFormat: "dd/MM/yyyy - hh:mm",
    timeInputLabel: 'Time:',
    showMonthDropdown: true,
    showYearDropdown: true,
    showTimeInput: true,
    dropdownMode: 'select',
    fixedHeight: true,
    form: 'external-form'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate, endDate);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='select-box'>
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
            <form id='external-form' onSubmit={handleSubmit}>
              <input type='submit' />
            </form>
        </div>
      </header>
    </div>
  );
}

export default App;
