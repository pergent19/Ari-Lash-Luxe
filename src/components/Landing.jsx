import React, { useCallback, useEffect, useState } from "react";
import landing from "@/assets/images/landing.jpg";
import Button from "./Button/button";
import Modal from "./Modal/modal";
import ServiceSelector from "./ServiceSelector";
import StaffSelector from "./StaffSelector";
import DayTime from "./DayTime";
import Time from "./Time";

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
  setSelectedTime

} from "../redux/features/modalSlice";

const Landing = React.memo(() => {
  //const [selectedTime, setSelectedTime] = useState(null);

  console.log("🚀 Landing component re-rendered");
  // console.log(selectedTime);

  useEffect(() => {
    console.log("🔥 Landing component mounted");
  }, []);

  const dispatch = useDispatch();
  const {
    isOpen,
    step,
    selectedServiceType,
    selectedOptions,
    selectedStaff,
    selectedDate,
    selectedTime
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
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landing})` }}
        data-testid="landing-container"
      >
        <div className="flex flex-col justify-center items-start h-full landing space-y-8">
          <p className="text-white text-[20px]  md:text-[30px] inter-bold">
            WELCOME TO THE NEW ERA
          </p>
          <h1 className="text-white text-[30px]  md:text-[52px] inter-bold">
            LASHES IN MINUTES, <br /> NOT HOURS
          </h1>
          <Button text="BOOK NOW" href="#" onClick={handleOpenModal} />
        </div>
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
        </Modal>
      </div>
    </>
  );
});

export default Landing;
