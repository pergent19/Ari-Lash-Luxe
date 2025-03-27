import React, { useState } from "react";
import nails from "@/assets/images/nails.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";

export default function Nails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleServiceSelection = (serviceType) => {
    setSelectedService(serviceType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Column (40%) */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8">
        <h2 className="text-[14px] md:text-[24px] inter-bold text-center">
          NAILS
        </h2>
        <h2 className="text-[20px] md:text-[27px] text-center romanesco-regular">
          Perfectly polished nails for a flawless, stylish <br /> finish.
        </h2>
        <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
      </div>

      {/* Right Column (60%) */}
      <div
        data-testid="nails-bg"
        className="w-full md:w-[60%] h-full md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nails})` }}
      ></div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={
          selectedService === "nails"
            ? "NAILS"
            : selectedService === "lash"
            ? "LASH EXTENSIONS"
            : selectedService === "facials"
            ? "FACIALS"
            : " "
        }
        description="SELECT SERVICES"
      >
        <ServiceSelector
          type="nails"
          onServiceSelect={handleServiceSelection}
        />
      </Modal>
    </div>
  );
}
