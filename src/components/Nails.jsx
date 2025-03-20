import React, {useState} from "react";
import nails from "@/assets/images/nails.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";

export default function Nails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex">
      {/* Left Column (40%) */}
      <div className="w-[40%] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl inter-bold">NAILS</h2>
        <h2 className="text-3xl text-center romanesco-regular">
          Perfectly polished nails for a flawless, stylish <br /> finish.
        </h2>
        <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
      </div>

      {/* Right Column (60%) */}
      <div
        data-testid="nails-bg"
        className="w-[60%] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nails})` }}
      ></div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ServiceSelector type="nails" />
      </Modal>
    </div>
  );
}
