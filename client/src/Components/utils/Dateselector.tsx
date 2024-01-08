// components/DateSelector.tsx
import { useState } from 'react';

interface DateSelectorProps {
  onChange: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onChange }) => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => (currentYear - index).toString());

  const handleDateChange = () => {
    if (selectedDay && selectedMonth && selectedYear) {
      const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
      onChange(formattedDate);
    }
  };

  return (
    <div className="flex space-x-2">
      {/* Day Selector */}
      <select
        className="p-2 border border-gray-300"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        onBlur={handleDateChange}
      >
        <option value="" disabled>
          Day
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      {/* Month Selector */}
      <select
        className="p-2 border border-gray-300"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        onBlur={handleDateChange}
      >
        <option value="" disabled>
          Month
        </option>
        {months.map((month, index) => (
          <option key={index + 1} value={(index + 1).toString().padStart(2, '0')}>
            {month}
          </option>
        ))}
      </select>

      {/* Year Selector */}
      <select
        className="p-2 border border-gray-300"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        onBlur={handleDateChange}
      >
        <option value="" disabled>
          Year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
