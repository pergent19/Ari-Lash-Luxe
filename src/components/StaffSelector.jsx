import React, { useState } from "react";

function StaffSelector() {
    const [selectedStaff, setSelectedStaff] = useState("");

    const handleOptionChange = (event) => {
      setSelectedStaff(event.target.value);
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
          image: "https://ui-avatars.com/api/?name=Michael+Johnson&background=random", // Dummy avatar
        },
      ];

  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white dark:bg-gray-800 rounded-lg">
    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
      Select a staff member:
    </h3>

    <ul className="flex flex-col gap-4">
      {staffData.map((staff) => (
        <li key={staff.id}>
          <input
            type="radio"
            id={staff.id}
            name="staff"
            value={staff.id}
            className="hidden peer"
            onChange={handleOptionChange}
            checked={selectedStaff === staff.id}
          />
          <label
            htmlFor={staff.id}
            className="flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            >
              {/* <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              /> */}
            </svg>
          </label>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default StaffSelector;
