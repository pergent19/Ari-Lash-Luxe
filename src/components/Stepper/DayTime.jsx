import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isBefore,
  getDay,
  isSameDay,
} from "date-fns";
import Button from "../Button/button";

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function DayTime({ onBack, onNext, onDateSelect, selectedDate }) {
  const [currentDate, setCurrentDate] = useState(new Date()); // Controls month view
  const today = new Date();

  // Ensure selectedDate is a valid ISO string and then convert to Date
  const selectedDateObject = selectedDate ? new Date(selectedDate) : null;

  // Navigate to previous month (disabled if it's the current month or earlier)
  const handlePrevMonth = () => {
    if (format(currentDate, "yyyy-MM") > format(today, "yyyy-MM")) {
      setCurrentDate((prev) => subMonths(prev, 1));
    }
  };

  // Navigate to next month
  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handleDateClick = (day) => {
    if (!isBefore(day, today) || isToday(day)) {
      onDateSelect(isSameDay(selectedDateObject, day) ? null : day.toISOString()); // Convert to ISO string
    }
  };

  // Get the days of the selected month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  // Get the weekday of the first day of the month to align the grid
  const firstDayIndex = getDay(startOfMonth(currentDate));

  const handleNextStep = () => {
    onNext();
  };

  const handleBackStep = () => {
    onBack();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white">
      {/* Month Selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{format(currentDate, "MMMM")}</h2>
        <div className="gap-2 flex items-center">
          <button
            onClick={handlePrevMonth}
            disabled={format(currentDate, "yyyy-MM") <= format(today, "yyyy-MM")}
            className={`px-3 py-1 rounded-lg ${format(currentDate, "yyyy-MM") <= format(today, "yyyy-MM") ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-400 text-white"}`}
          >
            ←
          </button>
          <button
            onClick={handleNextMonth}
            className="px-3 py-1 bg-gray-400 text-white rounded-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
        {weekdays.map((day) => (
          <div key={day} className="py-2">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">{day}</span>
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Empty spaces for alignment */}
        {Array.from({ length: firstDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {/* Actual days */}
        {daysInMonth.map((day) => {
          const isPast = isBefore(day, today) && !isToday(day);
          const isSelected = selectedDateObject && isSameDay(day, selectedDateObject);
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`rounded-lg w-full transition p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg ${
                isSelected
                  ? "bg-[#C5A43B] text-white font-bold" // Gold color for selected date
                  : isPast
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Disabled state for past dates
                  : "bg-gray-100 hover:bg-gray-200" // Default state for other days
              }`}
              disabled={isPast && !isToday(day)}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center mt-5">
        <Button
          text="BACK"
          className="w-1/2 bg-gray-300 text-white"
          onClick={handleBackStep}
        />
        <Button text="NEXT" className="w-1/2" onClick={handleNextStep} />
      </div>
    </div>
  );
}

export default DayTime;
