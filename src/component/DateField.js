import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export default function DateField({ onSelectDate }) {
  const [date, setDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const defaultStartDate = new Date('2023-12-27');
  const defaultEndDate = new Date('2023-12-23');
  const [selectionRange, setSelectionRange] = useState({
    startDate: defaultStartDate,
    endDate: defaultEndDate,
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    onSelectDate(date);
  };

  const handleSave = () => {
    setDate(
      `${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}`
    );
    onSelectDate(`${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}`
    );
    setShowDatePicker(false);
  };

  return (
    <>
      <div className="position-relative d-flex align-items-center w-sm-325px w-275px mt-3 date-input ms-2">
        <input
          type="text"
          className="flex-grow-1 w-100"
          placeholder="Select date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onClick={() => setShowDatePicker(true)}
        />
        <img
          src={process.env.PUBLIC_URL + "/media/simple-line-icons_calender.svg"}
          alt=""
        />
      </div>
      {showDatePicker && (
        <div className="date-popup-container">
          <div className="date-popup-content">
            <i
              className="bi bi-x position-absolute end-0 top-0 text-dark cursor-pointer m-2"
              style={{ fontSize: '40px' }}
              onClick={() => setShowDatePicker(false)}
            ></i>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <div className="btn btn-primary w-200px" onClick={handleSave}>
              Save
            </div>
          </div>
        </div>
      )}
    </>
  );
}
