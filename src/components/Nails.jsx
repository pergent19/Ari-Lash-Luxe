import React, { useState } from "react";
import nails from "@/assets/images/nails.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";
import DayTime from "./DayTime";

import { useDispatch, useSelector } from "react-redux";

import {
  // openModal,
  // closeModal,
  openNailsModal,
  closeNailsModal,
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
} from "../redux/features/modalSlice";

export default function Nails() {
  
  const dispatch = useDispatch();

  const {
    // isOpen,
    step,
    selectedServiceType,
    selectedOptions,
    selectedStaff,
    selectedDate,
    nailsModalOpen
  } = useSelector((state) => state.modal);

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
        <Button
          text="BOOK NOW"
          href="#"
          onClick={() => dispatch(openNailsModal())}
        />
      </div>

      {/* Right Column (60%) */}
      <div
        data-testid="nails-bg"
        className="w-full md:w-[60%] h-full md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nails})` }}
      ></div>

      {/* Modal Component */}
      <Modal
        isOpen={nailsModalOpen}
        onClose={() => dispatch(closeNailsModal())}
        title={
          selectedServiceType === "nails"
            ? "NAILS"
            : selectedServiceType === "lash"
            ? "LASH EXTENSIONS"
            : selectedServiceType === "facials"
            ? "FACIALS"
            : " "
        }
        description="SELECT SERVICES"
      >
          {step === 1 ? (
            <ServiceSelector
              type="nails"
              selectedServiceType={selectedServiceType}
              onServiceSelect={(service) =>
                dispatch(setSelectedServiceType(service))
              }
              onNext={() => dispatch(nextStep())}
              selectedOptions={selectedOptions}
              onSelectedOptions={(options) =>
                dispatch(setSelectedOptions(options))
              }
            />
          ) : step === 2 ? (
            <StaffSelector
              onBack={() => dispatch(backStep())}
              onNext={() => dispatch(nextStep())}
              selectedStaff={selectedStaff}
              onStaffSelect={(staff) => dispatch(setSelectedStaff(staff))}
            />
          ) : step === 3 ? (
            <DayTime
              onBack={() => dispatch(backStep())}
              onNext={() => dispatch(nextStep())}
              selectedDate={selectedDate}
              onDateSelect={(date) => dispatch(setSelectedDate(date))}
            />
          ) : null}
      </Modal>
    </div>
  );
}
