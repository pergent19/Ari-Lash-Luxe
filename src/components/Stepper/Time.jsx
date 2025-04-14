import React, {useCallback} from "react";
import Button from "../Button/button";
import { useDispatch } from "react-redux";

import {
  openModal
} from "../../redux/features/modalSlice";


const Time = ({ selectedTime, onTimeSelect, onBack, onNext }) => {

  const dispatch = useDispatch();

   const handleOpenModal = useCallback(() => {
    dispatch(openModal("success"));
  }, [dispatch]);

  const morningTimes = generateTimeSlots(8, 12); // 8:00 AM - 11:45 AM
  const afternoonTimes = generateTimeSlots(13, 18); // 1:00 PM - 5:45 PM

  function generateTimeSlots(startHour, endHour) {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(formatTime(hour, 0)); // Example: 8:00 AM, 9:00 AM
      slots.push(formatTime(hour, 30)); // Example: 8:30 AM, 9:30 AM
    }
    return slots;
  }

  function formatTime(hour, minutes) {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:${minutes === 0 ? "00" : "30"} ${period}`;
  }

  return (
    <>
      <div className="flex justify-around items-center text-lg font-bold mb-2 border-1 border-black p-1 mt-2">
        <h2>Morning</h2>
        <h2>Afternoon</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 h-110">
        {/* Morning Times */}
        <div className="flex flex-col">
          {morningTimes.map((time) => (
            <button
              key={time}
              className={`p-1 border rounded mb-2 transition ${
                selectedTime === time
                  ? "bg-[#C5A43B] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => onTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Afternoon Times */}
        <div className="flex flex-col">
          {afternoonTimes.map((time) => (
            <button
              key={time}
              className={`p-1 border rounded mb-2 transition ${
                selectedTime === time
                  ? "bg-[#C5A43B] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => onTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button text="BACK" className="w-1/2 bg-gray-300 text-white" onClick={ () => onBack()} />
        <Button text="COMPLETE" className="w-1/2" onClick={handleOpenModal} />
      </div>
    </>
  );
};

export default Time;
