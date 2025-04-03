import React, { useState } from "react";
import landing from "@/assets/images/landing.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";
import DayTime from "./DayTime";

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]); // Store selected service
  const [selectedStaff, setSelectedStaff] = useState(null); // Store selected staff
  const [selectedDate, setSelectedDate] = useState(new Date()); // Store selected date
  const [step, setStep] = useState(1); // 1 = ServiceSelector, 2 = StaffSelector, 3 = DayTime

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleServiceSelection = (serviceType) => {
    setSelectedServiceType(serviceType);
  };
  
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setStep((prev) => Math.max(1, prev - 1)); // Ensure step doesn't go below 1
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landing})` }}
        data-testid="landing-container"
      >
        <div className="flex flex-col justify-center items-start h-full landing space-y-8">
          <p className="text-white text-[20px]  md:text-[30px] inter-bold">
            WELCOME TO THE NEW ERA
          </p>
          <h1 className="text-white text-[30px]  md:text-[52px] inter-bold">
            LASHES IN MINUTES, <br /> NOT HOURS
          </h1>
          <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
        </div>
        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={
            selectedServiceType === "nails"
              ? "NAILS"
              : selectedServiceType === "lash"
              ? "LASH EXTENSIONS"
              : selectedServiceType === "facials"
              ? "FACIALS"
              : "ARI LASH LUXE"
          }
          description={
            step === 1
              ? "SELECT SERVICES"
              : step === 2
              ? "PREFERED STAFF"
              : step === 3
              ? "DAY AND TIME"
              : ""
          }
        >
          {step === 1 ? (
            <ServiceSelector
              type={selectedServiceType}
              selectedServiceType={selectedServiceType}
              onServiceSelect={handleServiceSelection}
              onNext={handleNextStep}
              selectedOptions={selectedOptions}
              onSelectedOptions={setSelectedOptions}
            />
          ) : step === 2 ? (
            <StaffSelector  
              onBack={handleBackStep} 
              onNext={handleNextStep} 
              selectedStaff={selectedStaff}
              onStaffSelect={setSelectedStaff}  />
          ) : step === 3 ? (
            <DayTime 
              onBack={handleBackStep} 
              onNext={handleNextStep} 
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate} />
          ) : null}
        </Modal>
      </div>
    </>
  );
}
