import React, { useEffect } from 'react';
import Button from '../Button/button';

const ServiceSelector = React.memo(({ type, selectedServiceType, onServiceSelect, onNext, selectedOptions, onSelectedOptions }) => {

  useEffect(() => {
    onServiceSelect(type); 
  }, [type]);

  const handleServiceChange = (event) => {
    const selectedValue = event.target.value;
    onServiceSelect(selectedValue);
    onSelectedOptions([]); 
  };


  const handleCheckboxChange = (event) => {
    const value = event.target.value;
  
    // Calculate the updated selected options
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value) 
      : [...selectedOptions, value]; 
  

    onSelectedOptions(updatedOptions); 
  };

  const handleSubmit = () => {
    onNext(); 
  };

  // Service options with hours and prices
  const services = {
    nails: [
      { name: 'Manicure', hours: '1 hour', price: '$25' },
      { name: 'Pedicure', hours: '1.5 hours', price: '$30' },
      { name: 'Nail Art', hours: '1 hour', price: '$20' },
    ],
    lash: [
      { name: 'Lash Extensions', hours: '2 hours', price: '$100' },
      { name: 'Lash Lift', hours: '1 hour', price: '$50' },
      { name: 'Lash Tint', hours: '30 minutes', price: '$30' },
    ],
    facials: [
      { name: 'Deep Cleansing', hours: '1.5 hours', price: '$60' },
      { name: 'Anti-Aging', hours: '1 hour', price: '$70' },
      { name: 'Hydrating', hours: '1 hour', price: '$50' },
    ],
  };

  // All services (to be shown when no service is selected)
  const allServices = [
    ...services.nails,
    ...services.lash,
    ...services.facials
  ];

  return (
    <div className="max-w-md mt-5 flex flex-col h-80 md:h-full">
      {/* Row 1: Dropdown */}
      <div className="mb-4">
        <select
          id="service"
          value={selectedServiceType}
          onChange={handleServiceChange}
          className="w-full p-3 border border-black"
        >
          <option value="">SELECT SERVICES</option>
          <option value="nails">NAILS</option>
          <option value="lash">LASH EXTENSION</option>
          <option value="facials">FACIALS</option>
        </select>
      </div>

      {/* Row 2: Checkboxes based on selected service or all services if none selected */}
      <div className="mb-4">
        {(selectedServiceType ? services[selectedServiceType] : allServices).map((serviceOption) => (
          <div key={serviceOption.name} className="flex items-center mb-4">
            <input
              type="checkbox"
              value={serviceOption.name}
              checked={selectedOptions.includes(serviceOption.name)}
              onChange={handleCheckboxChange}
              id={serviceOption.name}
              className="mr-2 w-6 h-6 custom-checkbox"
            />
            <label htmlFor={serviceOption.name} className="flex flex-col">
            <span className="font-bold">{serviceOption.name}</span> {/* Bold font */}
            <span className="text-sm text-gray-600">
                {serviceOption.hours} - {serviceOption.price}
            </span>
            </label>
          </div>
        ))}
      </div>

      {/* Row 3: Button */}
      <div className="flex justify-center">
        <Button text="NEXT" onClick={handleSubmit} className='w-full mb-5' />
      </div>
    </div>
  );
});

export default ServiceSelector;
