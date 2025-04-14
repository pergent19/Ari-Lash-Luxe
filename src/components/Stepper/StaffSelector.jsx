import React from "react";
import Button from "../Button/button";

function StaffSelector({onBack ,onNext, selectedStaff, onStaffSelect}) {

  const handleOptionChange = (event) => {
    onStaffSelect(event.target.value); // Pass the selected staff to the parent component
  };

  const handleNextStep = () => {
    onNext();
  };

  const handleBackStep = () => {
    onBack();
  };


  const staffData = [
    {
      id: "staff-john",
      name: "John Doe",
      role: "Lash Artist",
      services: ["Lashes", "Nails", "Facials"],
      image: "https://ui-avatars.com/api/?name=John+Doe&background=random", // Dummy avatar
    },
    {
      id: "staff-jane",
      name: "Jane Smith",
      role: "Nail Technician",
      services: ["Nails", "Facials"],
      image: "https://ui-avatars.com/api/?name=Jane+Smith&background=random", // Dummy avatar
    },
    {
      id: "staff-michael",
      name: "Michael Johnson",
      role: "Facial Specialist",
      services: ["Facials"],
      image:
        "https://ui-avatars.com/api/?name=Michael+Johnson&background=random", // Dummy avatar
    },
  ];

  return (
    <div className="h-90 md:h-120 max-w-lg mx-auto p-1 md:p-5 bg-white dark:bg-gray-800 rounded-lg">
      <ul className="flex flex-col gap-4">
        {staffData.map((staff) => (
          <li key={staff.id}>
            <input
              type="radio"
              id={staff.id}
              name="staff"
              value={staff.name}
              className="hidden peer"
              onChange={handleOptionChange}
              checked={selectedStaff === staff.name}
            />
            <label
              htmlFor={staff.id}
              className="flex items-center justify-between w-full p-1 md:p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:text-[#C5A43B] peer-checked:border-[#C5A43B] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex items-center space-x-4">
                {/* Staff Image */}
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                {/* Staff Details */}
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{staff.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {staff.role}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Services: {staff.services.join(", ")}
                  </div>
                </div>
              </div>
              <svg
                className="w-5 h-5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              ></svg>
            </label>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-5 mb-10">
        <Button text="BACK" className="w-1/2 bg-gray-300 text-white" onClick={handleBackStep} />
        <Button text="NEXT" className="w-1/2" onClick={handleNextStep} />
      </div>
    </div>
  );
}

export default StaffSelector;
