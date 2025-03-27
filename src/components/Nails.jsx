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
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Column (40%) */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8">
        <h2 className="text-3xl inter-bold text-center md:text-left">NAILS</h2>
        <h2 className="text-3xl text-center romanesco-regular md:text-left">
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="NAILS" description="SELECT SERVICES">
        <ServiceSelector type="nails" />
      </Modal>
    </div>
  );
}
