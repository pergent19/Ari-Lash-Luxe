import React from 'react';
import { format } from 'date-fns';

const SuccessContent = ({ selectedServiceType, selectedStaff, selectedDate, selectedTime }) => {
  const formattedDate = format(new Date(selectedDate), 'EEEE, MMMM d, yyyy');

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-2">🎉 Appointment Confirmed!</h2>
      <p className="text-gray-700 mb-4">Thank you for booking with us! Here are your appointment details:</p>
      <div className="bg-gray-100 p-4 rounded-md shadow-md inline-block text-left">
        <p><span className="font-semibold">Services Selected:</span> {selectedServiceType.join(', ')}</p>
        <p><span className="font-semibold">Staff:</span> {selectedStaff}</p>
        <p><span className="font-semibold">Date:</span> {formattedDate}</p>
        <p><span className="font-semibold">Time:</span> {selectedTime}</p>
      </div>
      <p className="mt-4 text-gray-600">We look forward to pampering you. 💅<br />You’ll receive a reminder before your appointment.</p>
    </div>
  );
};

export default SuccessContent;
