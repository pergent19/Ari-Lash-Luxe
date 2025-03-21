import React, { useState } from "react";
import facial from "@/assets/images/facial.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";

export default function Facial() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex">
      {/* Right Column (40%) */}
      <div
        className="w-[40%] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${facial})` }}
        data-testid="facial-bg"
      ></div>
      {/* Left Column (60%) */}
      <div className="w-[60%] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl inter-bold">FACIALS</h2>
        <h2 className="text-3xl text-center romanesco-regular">
          Revitalize your skin with facials designed to <br /> cleanse, hydrate,
          and restore your natural glow.
        </h2>
        <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ServiceSelector type="facials" />
      </Modal>
    </div>
  );
}
