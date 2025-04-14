import React, { useRef } from "react";
import nails from "@/assets/images/nails.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./Stepper/ServiceSelector";
import StaffSelector from "./Stepper/StaffSelector";
import DayTime from "./Stepper/DayTime";
import Time from "./Stepper/Time";

import { useDispatch, useSelector } from "react-redux";

import {
  openNailsModal,
  closeNailsModal,
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
  setSelectedTime,
} from "../redux/features/modalSlice";

import { motion, useInView } from "motion/react";

export default function Nails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const dispatch = useDispatch();

  const {
    step,
    selectedServiceType,
    selectedOptions,
    selectedStaff,
    selectedDate,
    selectedTime,
    nailsModalOpen,
  } = useSelector((state) => state.modal);

  return (
    <div className="h-screen flex flex-col md:flex-row" id="nails">
      {/* Left Column (40%) */}
      <motion.div
        className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-4 px-4 md:px-8 py-20 md:py-8"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
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
      </motion.div>

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
        <motion.div
          key={step} // This makes it re-animate when step changes
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, easing: "ease-in-out" }}
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
          ) : step === 4 ? (
            <Time
              selectedTime={selectedTime}
              onTimeSelect={(time) => dispatch(setSelectedTime(time))}
              onBack={() => dispatch(backStep())}
              onNext={() => dispatch(nextStep())}
            />
          ) : null}
        </motion.div>
      </Modal>
    </div>
  );
}
