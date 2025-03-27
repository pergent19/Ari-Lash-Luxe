import React, { useState } from "react";
import facial from "@/assets/images/facial.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";

export default function Facial() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row">
      {/* left Column (40%) */}
      <div
        className="w-full md:w-[40%] h-full md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${facial})` }}
        data-testid="facial-bg"
      ></div>
      {/* right Column (60%) */}
      <div className="w-full md:w-[60%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8">
        <h2 className="text-[14px] md:text-[24px] inter-bold">FACIALS</h2>
        <h2 className="text-[20px] md:text-[27px] text-center romanesco-regular">
          Revitalize your skin with facials designed to <br /> cleanse, hydrate,
          and restore your natural glow.
        </h2>
        <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="FACIALS" description="SELECT SERVICES">
        <ServiceSelector type="facials" />
        {/* <StaffSelector /> */}
      </Modal>
    </div>
  );
}
