import React, { useState } from "react";
import landing from "@/assets/images/landing.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleServiceSelection = (serviceType) => {
    console.log(serviceType);
    setSelectedService(serviceType);
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
            selectedService === "nails"
              ? "NAILS"
              : selectedService === "lash"
              ? "LASH EXTENSIONS"
              : selectedService === "facials"
              ? "FACIALS"
              : " "
          }
          description={selectedService ? "SELECT SERVICES" : " "}
        >
          <ServiceSelector type="" onServiceSelect={handleServiceSelection} />
        </Modal>
      </div>
    </>
  );
}
