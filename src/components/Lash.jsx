import React from "react";
import lash from "@/assets/images/lash.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";
import DayTime from "./DayTime";
import Time from "./Time";

import { useDispatch, useSelector } from "react-redux";

import {
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
  setSelectedTime,
  openLashModal,
  closeLashModal
} from "../redux/features/modalSlice";

export default function Lash() {

  const dispatch = useDispatch();

    const {
      lashModalOpen,
      step,
      selectedServiceType,
      selectedOptions,
      selectedStaff,
      selectedDate,
      selectedTime
    } = useSelector((state) => state.modal);
  

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8">
        <h2 className="text-[14px] md:text-[24px] inter-bold text-center">
          LASH EXTENSION
        </h2>
        <h2 className="text-[20px] md:text-[27px] text-center romanesco-regular">
          Enhance your beauty with lush, customized <br /> lash extensions for a
          flawless look.
        </h2>
        <Button text="BOOK NOW" href="#"  onClick={() => dispatch(openLashModal())} />
      </div>

      {/* Right Column (with background image) */}
      <div
        data-testid="lash-bg"
        className="w-full md:w-[60%] h-full md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lash})` }}
      ></div>

      {/* Modal Component */}
      <Modal
        isOpen={lashModalOpen}
        onClose={() => dispatch(closeLashModal())}
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
              type="lash"
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
          ) : step === 4 ? (
            <Time
              selectedTime={selectedTime}
              onTimeSelect={(time) => dispatch(setSelectedTime(time))}
              onBack={() => dispatch(backStep())}
              onNext={() => dispatch(nextStep())}
            />
          ) : null}
      </Modal>
    </div>
  );
}
