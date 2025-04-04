import React from "react";
import facial from "@/assets/images/facial.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";
import DayTime from "./DayTime";

import { useDispatch, useSelector } from "react-redux";

import {
  // openModal,
  // closeModal,
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
  openFacialsModal,
  closeFacialsModal,
} from "../redux/features/modalSlice";

export default function Facial() {

  const dispatch = useDispatch();

  const {
    //isOpen,
    facialsModalOpen,
    step,
    selectedServiceType,
    selectedOptions,
    selectedStaff,
    selectedDate,
  } = useSelector((state) => state.modal);

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
        <Button
          text="BOOK NOW"
          href="#"
          onClick={() => dispatch(openFacialsModal())}
        />
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={facialsModalOpen}
        onClose={() => dispatch(closeFacialsModal())}
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
              type="facials"
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
