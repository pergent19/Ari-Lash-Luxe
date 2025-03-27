import React, { useState } from "react";
import lash from "@/assets/images/lash.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";

export default function Lash() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8">
        <h2 className="text-[14px] md:text-[24px] inter-bold text-center md:text-left">LASH EXTENSION</h2>
        <h2 className="text-[20px] md:text-[27px] text-center romanesco-regular md:text-left">
          Enhance your beauty with lush, customized <br /> lash extensions for a flawless look.
        </h2>
        <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
      </div>

      {/* Right Column (with background image) */}
      <div
        data-testid="lash-bg"
        className="w-full md:w-[60%] h-full md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lash})` }}
      ></div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="LASH EXTENSIONS" description="SELECT SERVICES">
        <ServiceSelector type="lash" />
      </Modal>
    </div>
  );
}
