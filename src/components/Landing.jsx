import React, { useCallback, useRef } from "react";
import landing from "@/assets/images/landing.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./Stepper/ServiceSelector";
import StaffSelector from "./Stepper/StaffSelector";
import DayTime from "./Stepper/DayTime";
import Time from "./Stepper/Time";
import SuccessContent from "./Modal/Content/SuccessContent";

import { useDispatch, useSelector } from "react-redux";

import {
  openModal,
  closeModal,
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
  setSelectedTime,
} from "../redux/features/modalSlice";

import { motion, useInView } from "motion/react";

const Landing = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const dispatch = useDispatch();
  const {
    isOpen,
    step,
    selectedServiceType,
    selectedOptions,
    selectedStaff,
    selectedDate,
    selectedTime,
    isSuccess,
  } = useSelector((state) => state.modal);

  const handleOpenModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch]);

  const handleServiceSelect = useCallback(
    (service) => {
      dispatch(setSelectedServiceType(service));
    },
    [dispatch]
  );

  const handleSelectedOptions = useCallback(
    (options) => {
      dispatch(setSelectedOptions(options));
    },
    [dispatch]
  );

  return (
    <>
      <div
        id="landing"
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landing})` }}
        data-testid="landing-container"
      >
        <motion.div
          className="flex flex-col justify-center items-start h-full landing space-y-8"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-white text-[20px]  md:text-[30px] inter-bold">
            WELCOME TO THE NEW ERA
          </p>
          <h1 className="text-white text-[30px]  md:text-[52px] inter-bold">
            LASHES IN MINUTES, <br /> NOT HOURS
          </h1>
          <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
        </motion.div>
        {/* Modal Component */}
        <Modal
          isOpen={isOpen}
          onClose={() => dispatch(closeModal())}
          title={
            selectedServiceType === "nails"
              ? "NAILS"
              : selectedServiceType === "lash"
              ? "LASH EXTENSIONS"
              : selectedServiceType === "facials"
              ? "FACIALS"
              : "ARI LASH LUXE"
          }
          description={
            step === 1
              ? "SELECT SERVICES"
              : step === 2
              ? "PREFERED STAFF"
              : step === 3 || step === 4
              ? "DAY AND TIME"
              : ""
          }
        >
          <motion.div
            key={step} // This makes it re-animate when step changes
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, easing: "ease-in-out" }}
          >
            {step === 1 ? (
              <ServiceSelector
                type={selectedServiceType}
                selectedServiceType={selectedServiceType}
                onServiceSelect={handleServiceSelect}
                onNext={() => dispatch(nextStep())}
                selectedOptions={selectedOptions}
                onSelectedOptions={handleSelectedOptions}
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

        <Modal
          isOpen={isSuccess}
          onClose={() => dispatch(closeModal("success"))}
        >
          <SuccessContent
            selectedServiceType={selectedOptions}
            selectedStaff={selectedStaff}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </Modal>
      </div>
    </>
  );
});

export default Landing;
