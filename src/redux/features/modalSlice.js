import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  lashModalOpen: false,
  nailsModalOpen: false,
  facialsModalOpen: false,
  step: 1,
  selectedServiceType: "",
  selectedOptions: [],
  selectedStaff: null,
  selectedDate: new Date().toISOString(), // Store as an ISO string from the start,
  selectedTime: null,
  isSuccess: false
};

// Reset logic for closing modals
const resetModalState = () => ({
  selectedOptions: [],
  selectedStaff: null,
  selectedDate: new Date().toISOString(),
  selectedServiceType: "",
  selectedTime: null,
  step: 1,
});

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // openModal: (state, action) => {
    //   if(action.payload === "success") {
    //     state.isSuccess = true;
    //     if (state.isOpen) {
    //       state.isOpen = false;
    //     } else if (state.lashModalOpen) {
    //       state.lashModalOpen = false;
    //     }
    //     else if (state.nailsModalOpen) {
    //       state.nailsModalOpen = false;
    //     }
    //     else if (state.facialsModalOpen) {
    //       state.facialsModalOpen = false;
    //     }   
    //   } else {
    //     state.isOpen = true;
    //     state.step = 1;
    //   }
    // },
    openModal: (state, action) => {
      const isSuccess = action.payload === "success";
    
      if (isSuccess) {
      
        // Close any open modal
        state.isOpen = false;
        state.lashModalOpen = false;
        state.nailsModalOpen = false;
        state.facialsModalOpen = false;
        
        state.isSuccess = true;
    
      } else {
        state.isOpen = true;
        state.step = 1;
      }
    },
    closeModal: (state, action) => {
      if(action.payload === "success") {
        state.isSuccess = false;
        Object.assign(state, resetModalState());
      } else {
        state.isOpen = false;

        Object.assign(state, resetModalState());
      }
    },
    openLashModal: (state) => {
      state.lashModalOpen = true;
    },
    closeLashModal: (state) => {
      state.lashModalOpen = false;
      Object.assign(state, resetModalState());
    },
    openNailsModal: (state) => {
      state.nailsModalOpen = true;
    },
    closeNailsModal: (state) => {
      state.nailsModalOpen = false;
      Object.assign(state, resetModalState());
    },
    openFacialsModal: (state) => {
      state.facialsModalOpen = true;
    },
    closeFacialsModal: (state) => {
      state.facialsModalOpen = false;
      Object.assign(state, resetModalState());
    },
    nextStep: (state) => {
      state.step += 1;
    },
    backStep: (state) => {
      state.step = Math.max(1, state.step - 1);
    },
    setSelectedServiceType: (state, action) => {
      state.selectedServiceType = action.payload;
    },
    setSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
    setSelectedStaff: (state, action) => {
      state.selectedStaff = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    }
  },
});

export const {
  openModal,
  closeModal,
  nextStep,
  backStep,
  setSelectedServiceType,
  setSelectedOptions,
  setSelectedStaff,
  setSelectedDate,
  setSelectedTime,
  openLashModal,
  closeLashModal,
  openNailsModal,
  closeNailsModal,
  openFacialsModal,
  closeFacialsModal,
} = modalSlice.actions;

export default modalSlice.reducer;
